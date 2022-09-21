import React, { Component, useState } from "react";
import { ethers } from "ethers";
import { useDisclosure } from "@chakra-ui/react";
import useKollabShare from "../web3/useKollabShare";
import Disconnector from "../components/Disconector";
import InfoModal from "../components/infoModal";
import Back from "../components/Back";
import "../css/style.css";

export default function Create() {

    const kollab_share = useKollabShare();
    const [error, setError] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [shareholders, setShareholders] = useState();

    const {
        isOpen: isErrorOpen,
        onOpen: onErrorOpen,
        onClose: onErrorClose
    } = useDisclosure();

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

    const getData = async () => {
        try {
            await kollab_share.getSplitterIds('0xFf971D4CD49774938AEdA413C8317f2ccdD1675E')
            .then((res) => {
                console.log();
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="view flex flex-column flex-align-center overflow-hidden">
            {/* <p onClick={() => {
                setName('Param Test');
                setDescription('parameter test');
                setShareholders({
                    addresses: ['0xFf971D4CD49774938AEdA413C8317f2ccdD1675E'],
                    shares: [150]
                });
            }}>Add Data</p>
            <p onClick={createSplitter}>Create</p>
            <p onClick={getData}>GetData</p> */}
            <h1>Create New Kollab</h1>
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