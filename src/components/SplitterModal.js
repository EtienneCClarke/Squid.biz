import React, { useState, Fragment } from "react";
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
import ethIcon from "../assets/icons/ethereum_large.png";
import useWindowDimensions from "../utils/useWindowDimensions";
import useKollabShare from "../web3/useKollabShare";
import "../css/style.css";

export default function SplitterModal({ isOpen, closeModal, data, isCreator}) {

    const kollab_share = useKollabShare();
    const { width } = useWindowDimensions();
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

    function date(date) {
        if(!date || date === '' || date === 0) { return " N/A"; }
        const d = new Date(date);
        return d.toLocaleDateString("en-GB");
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

    return(
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            size={"xl"}
            isCentered
        >
            <ModalOverlay
                bg='blackAlpha.50'
                backdropFilter='blur(2px)'
            />
            <ModalContent
                minW={width < 1200 ? "80%" : "900"}
            >
                <ModalBody className="modal bg-universal br-25 overflow-y">
                    <ModalCloseButton />
                    <div className="splitter-details-container">
                        <div className="balance-container">
                            <div className="balance">
                                <img src={ethIcon} width="20px"/>
                                <p className="balance-val">
                                    {isCreator ? ethers.utils.formatEther(data.total_balance) : ethers.utils.formatEther(data.personal_balance)}
                                </p>
                            </div>
                            <p className="balance-label">{isCreator ? 'Total Pot Value' : 'Personal Balance'}</p>
                            <p className="balance-label-small vtspace-5">{isCreator ? "Personal Balance: " + ethers.utils.formatEther(data.personal_balance) + " ": "Total Pot Value: " + ethers.utils.formatEther(data.total_balance) + " "}Eth</p>
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
                                <div className={"splitter-details  vtspace-25 " + (width < 840 ? "h-center w-100" : "")}>
                                    <p>Splitter Address: <br/>{data.address}</p>
                                    <p className="vtspace-10">Your Shares:{" " + data.personal_shares}</p>
                                    <p>Total Shares:{" " + data.total_shares}</p>
                                    <p className="vtspace-10">Last Withdrawl:{date(data.last_withdrawl)}</p>
                                    <p className="vtspace-10">Creator: <br/>{data.creator}</p>
                                </div>
                                <div className={"splitter-shareholders  vtspace-25 " + (width < 840 ? "h-center w-100" : "")}>
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
                                    className="button bg-purple vtspace-75 vbspace-25"
                                    onClick={payoutGlobal}
                                >
                                    Global Payout
                                </div>
                            ) : (
                                <div
                                    className="button bg-blue vtspace-75 vbspace-25"
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