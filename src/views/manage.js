import React, { useEffect, useState } from "react";
import Back from "../components/Back";
import Table from "../components/Table/Table";
import Disconnector from "../components/Disconector";
import useKollabShare from "../web3/useKollabShare";
import loadingGif from "../assets/gifs/loading.gif";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import "../css/style.css";
import { useDisclosure } from "@chakra-ui/react";
import InfoModal from "../components/infoModal";


export default function Manage () {

    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState();
    const [created, setCreated] = useState();
    const [nav, setNav] = useState();

    const kollab_share = useKollabShare();
    const { account } = useWeb3React();

    const {
        isOpen: isErrorOpen,
        onOpen: onErrorOpen,
        onClose: onErrorClose
    } = useDisclosure();

    async function getIds() {
        let uuids = {
            current: [],
            created: []
        };
        try {
            await kollab_share.getCreatedSplitterIds(account).then((res) => {
                res.forEach(element => {
                    uuids.created.push(ethers.BigNumber.from(element).toNumber());
                });
            });
            await kollab_share.getSplitterIds(account).then((res) => {
                res.forEach(element => {
                    uuids.current.push(ethers.BigNumber.from(element).toNumber());
                })
            });
        } catch (e) {
            setError(e);
            onErrorOpen();
        }
        return uuids;
    }

    async function getData() {
        try {
            const ids = await getIds();
            let temp_current = [];
            let temp_created = [];
            for(let i = 0; i < ids.current.length; i++) {
                await kollab_share.getSplitter(ids.current[i], account).then((res) => {
                    temp_current.push({
                        uuid: ids.current[i],
                        address: res[0],
                        name: res[1],
                        description: res[2],
                        personal_shares: res[3],
                        total_shares: res[4],
                        personal_balance: res[5],
                        total_balance: res[6],
                        last_withdraw: res[7],
                        creator: res[8]
                    });
                });
            }
            for(let i = 0; i < ids.created.length; i++) {
                await kollab_share.getSplitter(ids.created[i], account).then((res) => {
                    temp_created.push({
                        uuid: ids.created[i],
                        address: res[0],
                        name: res[1],
                        description: res[2],
                        personal_shares: res[3],
                        total_shares: res[4],
                        personal_balance: res[5],
                        total_balance: res[6],
                        last_withdraw: res[7],
                        creator: res[8]
                    });
                });
            }
            setCreated(temp_created);
            setCurrent(temp_current);
        } catch (e) {
            setError(e);
            onErrorOpen();
        }
    }

    useEffect(() => {
        setNav('current');
        const fetchData = async () => {
            await getData().then(() => {
                setLoading(false);
            })
        }
        fetchData();
    }, []);

    return (
        <div className="view scrollable-y">
            <div className="manage-container">
                <div className="manage-nav">
                    <p
                        className={"manage-nav-title " + (nav ? "manage-nav-active" : " ")}
                        onClick={()=> {
                            setNav(true);
                        }}
                    >
                        Current Kollabs
                    </p>
                    <p
                        className={"manage-nav-title " + (!nav ? "manage-nav-active" : " ")}
                        onClick={() => {
                            setNav(false);
                        }}
                    >
                        My Kollabs
                    </p>
                </div>
                <div className="w-100">
                    {loading ? (
                        <img className="vtspace-50 h-center" src={loadingGif} alt="loading"/>
                    ) : (
                        nav ? (
                            <Table _data={current} toDisplay={nav} />
                        ) : (
                            <Table _data={created} toDisplay={nav} />
                        )
                    )}
                </div>
            </div>
            <Disconnector />
            <Back />
            <InfoModal 
                isOpen={isErrorOpen}
                closeModal={onErrorClose}
                Title={"Something went wrong!"}
                Content={error}
            />
        </div>
    );

};