import React, { Component, useState } from "react";
import { ethers } from "ethers";
import { useDisclosure } from "@chakra-ui/react";
import useKollabShare from "../web3/useKollabShare";
import Disconnector from "../components/Disconector";
import InfoModal from "../components/infoModal";
import Back from "../components/Back";
import addPayeeIcon from "../assets/svg/add-payee.svg";
import "../css/style.css";

export default function Create() {

    const kollab_share = useKollabShare();
    const [error, setError] = useState();
    const [payeeAddrError, setAddrPayeeError] = useState();
    const [payeeShareError, setSharePayeeError] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [tempPayeeAddr, setTempPayeeAddr] = useState();
    const [tempPayeeShare, setTempPayeeShare] = useState();
    const [shareholders, setShareholders] = useState([{
        address: String,
        share: Number,
    }]);

    const {
        isOpen: isErrorOpen,
        onOpen: onErrorOpen,
        onClose: onErrorClose
    } = useDisclosure();

    function addShareHolder() {
        !tempPayeeAddr || tempPayeeAddr == '' ? setAddrPayeeError('error-input') : setAddrPayeeError('');
        !tempPayeeShare || tempPayeeShare == '' ? setSharePayeeError('error-input') : setSharePayeeError('');
        if(!tempPayeeAddr || tempPayeeAddr == '' || !tempPayeeShare || tempPayeeShare == '') { return null; }
        setShareholders([{ address: tempPayeeAddr, share: tempPayeeShare}, ...shareholders]);
    }

    const createSplitter = async () => {
        try {
            await kollab_share.createSplitter(
                name,
                description,
                shareholders.addresses,
                shareholders.shares,
                {
                    value: ethers.utils.parseEther("0.01")
                }
            );
        } catch (e) {
            setError(e.reason);
            onErrorOpen();
        }
    }

    return (
        <div className="view flex flex-column flex-align-center">
            <div className="create-container">
                <h1 className="title-large vtspace-75 text-center">Create New Kollab</h1>
                <h3 className="input-label vtspace-25 hlspace-15">Enter Details</h3>
                <input
                    className="text-input vtspace-15"
                    type="text"
                    placeholder="Name"
                    onChange={(txt) => {
                        setName(txt.target.value);
                    }}
                />
                <textarea
                    className="text-input vtspace-15"
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
                        onChange={(txt) => {
                            setTempPayeeAddr(txt.target.value);
                        }}
                    />
                    <input 
                        className={"text-input w-50 hlspace-10 " + payeeShareError}
                        type="number"
                        placeholder="Shares"
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
                <div className="flex flex-row">
                    <h3 className="input-label vtspace-25 hlspace-15">Payees</h3>
                    <h3 className="input-label vtspace-25 push-right hrspace-15">Shares</h3>
                </div>
                {shareholders.map((shareholder, index) => {
                    return(
                        <div key={shareholder.address}>
                            <p>{shareholder.address}</p>
                            <p>{shareholder.share}</p>
                        </div>
                    );
                })}
            </div>
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