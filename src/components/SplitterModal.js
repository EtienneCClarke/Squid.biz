import React, { useState, Fragment, useEffect } from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import InfoModal from "../components/infoModal";
import { ethers } from "ethers";
import ethIcon from "../assets/icons/ethereum.png";
import polygonIcon from "../assets/icons/polygon.png";
import useWindowDimensions from "../utils/useWindowDimensions";
import useKollabShare from "../web3/useKollabShare";
import "../css/style.css";
import { useWeb3React } from "@web3-react/core";

export default function SplitterModal({ isOpen, closeModal, data, isCreator}) {

    const kollab_share = useKollabShare();
    const { chainId } = useWeb3React();
    const { width, height } = useWindowDimensions();
    const [small, setSmall] = useState(false);
    const [error, setError] = useState();
    const [info, setInfo] = useState();

    const {
        isOpen: isErrorOpen,
        onOpen: onErrorOpen,
        onClose: onErrorClose
    } = useDisclosure();

    const {
        isOpen: isInfoOpen,
        onOpen: onInfoOpen,
        onClose: onInfoClose
    } = useDisclosure();

    function date(timestamp) {
        if(!timestamp || timestamp === '' || timestamp < 1000000000 || isNaN(timestamp)) { return " N/A"; }
        const d = new Date(timestamp * 1000);
        return (" " + d.toLocaleDateString() + " " + d.toLocaleTimeString());
    }

    function truncate(str, value) {
        if(str.length > 5) {
            if (str.includes('.')) {
                const parts = str.split('.');
                return parts[0] + '.' + parts[1].slice(0, value) + '...';
            }
            return str.slice(0, value) + '...'
        }
        return str;
    }

    function displayBalance() {
        if(isCreator) {
            if(width < 380) {
                return truncate(ethers.utils.formatEther(data.total_balance), 3);
            }
            if(width < 600) {
                return truncate(ethers.utils.formatEther(data.total_balance), 5);
            }
            if(width < 1100) {
                return truncate(ethers.utils.formatEther(data.total_balance), 10);
            }
            return ethers.utils.formatEther(data.total_balance);
        }
        if(width < 380) {
            return truncate(ethers.utils.formatEther(data.personal_balance), 3);
        }
        if(width < 600) {
            return truncate(ethers.utils.formatEther(data.personal_balance), 5);
        }
        if(width < 1100) {
            return truncate(ethers.utils.formatEther(data.personal_balance), 10);
        }
        return ethers.utils.formatEther(data.personal_balance);
    }

    async function payoutGlobal() {
        try {
            await kollab_share.payoutAll(data.uuid).then(() => {
                setInfo("Withdrawl process has begun! This can be monitored from your wallet.");
                onInfoOpen();
            });
        } catch (e) {
            setError(e.reason);
            onErrorOpen();
        }
    }

    async function payout() {
        try {
            await kollab_share.payout(data.uuid).then(() => {
                setInfo("Withdrawl process has begun! This can be monitored from your wallet.");
                onInfoOpen();
            });
        } catch (e) {
            setError(e.reason);
            onErrorOpen();
        }
    }

    function checkScreen() {
        if(width < 620 || height < 700) { setSmall(true); }
        else { setSmall(false); }
    }

    useEffect(() => {
        checkScreen();
    });

    return(
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            size={small ? "full" : "xl"}
            isCentered
            scrollBehavior="inside"
        >
            <ModalOverlay
                bg='blackAlpha.50'
                backdropFilter='blur(2px)'
            />
            <ModalContent
                minW={width < 1200 ? "80%" : "900"}
            >
                <ModalBody className="modal bg-universal br-25 overflow-y">
                    <ModalCloseButton zIndex={2}/>
                    <div className={small ? "splitter-details-container full-height" : "splitter-details-container"}>
                        <div className="balance-container sticky">
                            <div className="balance">
                                {width < 300 ? <></> : <img src={chainId === 1 || chainId === 5 ? ethIcon : chainId === 137 || chainId === 80001 ? polygonIcon : null} width={chainId === 1 || chainId === 5 ? "20px" : "40px"}/>}
                                <p className="balance-val">
                                    {displayBalance()}
                                </p>
                            </div>
                            <p className="balance-label">{isCreator ? 'Total Pot Value' : 'Personal Balance'}</p>
                            <p className="balance-label-small vtspace-5">{isCreator ? "Personal Balance: " + ethers.utils.formatEther(data.personal_balance) + " ": "Total Pot Value: " + ethers.utils.formatEther(data.total_balance) + " "}{chainId === 1 || chainId === 5 ? "Eth" : "MATIC"}</p>
                        </div>
                        <div className="splitter-content">
                            <div className="content-header">
                                <p className="content-title">{data.name}</p>
                                <p className="content-uuid push-right">#{data.uuid}</p>
                            </div>
                            <p className="content-description vtspace-10">
                                {data.description}
                            </p>
                            <div className="content-info flex flex-row flex-space-between flex-wrap vbspace-25 w-100">
                                <div className={"splitter-details  vtspace-25 " + (width < 1130 ? "h-center w-100" : "br")}>
                                    <p>Squid Address: <br/><span className="txt-bold">{data.address}</span></p>
                                    <p className="vtspace-10">Your Shares:{" " + data.personal_shares}</p>
                                    <p>Total Shares:{" " + data.total_shares}</p>
                                    <p className="vtspace-10">Last Withdrawl:{date(data.last_withdraw)}</p>
                                    <p className="vtspace-10">Creator: <br/>{data.creator}</p>
                                </div>
                                <div className={"splitter-shareholders  vtspace-25 " + (width < 1130 ? "h-center w-100" : "")}>
                                    <p className="sticky shareholder-header">Share</p>
                                    <p className="sticky shareholder-header">Address</p>
                                    {data.shareholders.map((s, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <p className="data-cell">{s.share}</p>
                                                <p className="data-cell">{s.address}</p>
                                            </Fragment>
                                        );
                                    })}
                                </div>
                            </div>
                            {isCreator ? (
                                <div
                                    className="button bg-purple push-bottom vtspace-75 vbspace-25"
                                    onClick={payoutGlobal}
                                >
                                    Global Payout
                                </div>
                            ) : (
                                <div
                                    className="button bg-blue push-bottom vtspace-75 vbspace-25"
                                    onClick={payout}
                                >
                                    Withdraw
                                </div>
                            )}
                        </div>
                        <InfoModal 
                            isOpen={isErrorOpen}
                            closeModal={onErrorClose}
                            Title={"Something went wrong!"}
                            Content={error}
                        />
                        <InfoModal 
                            isOpen={isInfoOpen}
                            closeModal={onInfoClose}
                            Title={"Alert!"}
                            Content={info}
                        />
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

}