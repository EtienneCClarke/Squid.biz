import React, { useState } from "react";
import { ethers } from "ethers";
import { useDisclosure } from "@chakra-ui/react";
import useKollabShare from "../web3/useKollabShare";
import Disconnector from "../components/Disconector";
import InfoModal from "../components/infoModal";
import Back from "../components/Back";
import addPayeeIcon from "../assets/svg/add-payee.svg";
import delPayeeIcon from "../assets/svg/del-payee.svg";
import "../css/style.css";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

export default function Create() {

    const kollab_share = useKollabShare();
    const [error, setError] = useState();
    const [payeeAddrError, setAddrPayeeError] = useState();
    const [payeeShareError, setSharePayeeError] = useState();
    const [nameError, setNameError] = useState();
    const [descriptionError, setDescriptionError] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [tempPayeeAddr, setTempPayeeAddr] = useState();
    const [tempPayeeShare, setTempPayeeShare] = useState();
    const [shareholders, setShareholders] = useState([]);
    const [totalShares, setTotalShares] = useState(0);

    const {
        isOpen: isErrorOpen,
        onOpen: onErrorOpen,
        onClose: onErrorClose
    } = useDisclosure();

    function checkDuplicates() {
        const currentShareholders = [];
        shareholders.forEach((shareholder) => {
            currentShareholders.push(shareholder.address);
        });
        if(currentShareholders.indexOf(tempPayeeAddr) > -1) { 
            setError('Sorry! You cannot enter the same address twice.');
            onErrorOpen();
            return null;
        }
        return true;
    }

    function addShareHolder() {
        !tempPayeeAddr || tempPayeeAddr == '' ? setAddrPayeeError('error-input') : setAddrPayeeError('');
        !tempPayeeShare || tempPayeeShare == '' ? setSharePayeeError('error-input') : setSharePayeeError('');
        if(!tempPayeeAddr || tempPayeeAddr == '' || !tempPayeeShare || tempPayeeShare == '') { return null; }
        checkDuplicates();
        setShareholders([{ address: tempPayeeAddr, share: parseInt(tempPayeeShare)}, ...shareholders]);
        setTotalShares(totalShares + parseInt(tempPayeeShare));
        setTempPayeeAddr('');
        setTempPayeeShare('');
    }

    function checkForm() {
        let flag = 0;
        if(!name || name == '') {
            flag +=1;
            setNameError('error-input');
        } else {
            setNameError('');
        }
        if(!description || description == '') {
            flag +=1;
            setDescriptionError('error-input');
        } else {
            setDescriptionError('');
        }
        if(flag > 0) { return false; }
        if(shareholders.length == 0 || !checkDuplicates()) { 
            setError('Please add payees!');
            onErrorOpen();
            return false;
        }
        return true;
    }

    async function createSplitter() {
        if(!checkForm()) { return null;}
        let addresses = [];
        let shares = [];
        shareholders.forEach((shareholder) => {
            addresses.push(shareholder.address);
            shares.push(shareholder.share);
        })
        try {
            await kollab_share.createSplitter(
                name,
                description,
                addresses,
                shares,
                {
                    value: ethers.utils.parseEther("0.01")
                }
            ).then((res) => {
                console.log(res);
            });
        } catch (e) {
            setError(e.reason);
            onErrorOpen();
        }
    }

    return (
        <div className="view flex flex-column flex-align-center scrollable-y">
            <div className="create-container">
                <h1 className="title-large vtspace-75 text-center">Create New Kollab</h1>
                <h3 className="input-label vtspace-25 hlspace-15">Enter Details</h3>
                <input
                    className={"text-input vtspace-15 " + nameError}
                    type="text"
                    placeholder="Name"
                    onChange={(txt) => {
                        setName(txt.target.value);
                    }}
                />
                <textarea
                    className={"text-input vtspace-15 " + descriptionError}
                    placeholder="Description"
                    rows={5}
                    onChange={(txt) => {
                        setDescription(txt.target.value)
                    }}
                />
                <h3 className="input-label vtspace-25 hlspace-15">Add Payee</h3>
                <div className="add-payee-form vtspace-10">
                    <input
                        className={"text-input " + payeeAddrError}
                        type="text"
                        placeholder="Wallet Address"
                        value={tempPayeeAddr}
                        onChange={(txt) => {
                            setTempPayeeAddr(txt.target.value);
                        }}
                    />
                    <input 
                        className={"text-input w-50 hlspace-10 " + payeeShareError}
                        type="number"
                        placeholder="Shares"
                        value={tempPayeeShare}
                        onChange={(num) => {
                            setTempPayeeShare(num.target.value);
                        }}
                    />
                    <img
                        className="add-payee-button hlspace-15"
                        src={addPayeeIcon}
                        onClick={addShareHolder}
                    />
                </div>
                <div className="shareholders-title">
                    <h3 className="input-label vtspace-25 hlspace-15">Payees</h3>
                    <h3 className="input-label vtspace-25 text-center">Shares</h3>
                </div>
                <TransitionGroup component="div">
                    {shareholders.map((shareholder) => {
                        return(
                            <CSSTransition key={shareholder.address} timeout={200} classNames="shareholder">
                                <div className="shareholders-row">
                                    <p>
                                        {shareholder.address}
                                    </p>
                                    <p className="text-center">
                                        {shareholder.share}
                                    </p>
                                    <img
                                        className="del-payee-icon push-right"
                                        src={delPayeeIcon}
                                        onClick={() => {
                                            setShareholders(shareholders.filter((s) => s !== shareholder));
                                            setTotalShares(totalShares - parseInt(shareholder.share));
                                        }}
                                    />
                                </div>
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </div>
            <div className="text-center vtspace-100">
                    <p className="total-shares">Total Shares:{' ' + totalShares}</p>
                    <p className="creation-fee vtspace-15">Fee 0.01 Eth + Gas</p>
                    <p
                        className="button bg-blue txt-spacing vtspace-25"
                        onClick={createSplitter}
                    >
                        CREATE
                    </p>
            </div>
            <p className="powered-tag-flex">Powered By Dream Kollab</p>
            <InfoModal 
                isOpen={isErrorOpen}
                closeModal={onErrorClose}
                Title={"Something went wrong!"}
                Content={error}
            />
            <Back />
            <Disconnector />
        </div>
    );

};