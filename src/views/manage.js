import React, { useEffect, useState, useRef } from "react";
import Table from "../components/Table/Table";
import useSquid from "../web3/useSquid";
import loadingGif from "../assets/gifs/loading.gif";
import searchIcon from "../assets/svg/search.svg";
import { ethers } from "ethers";
import "../css/style.css";
import { useDisclosure } from "@chakra-ui/react";
import InfoModal from "../components/infoModal";
import { useWeb3React } from "@web3-react/core";


export default function Manage () {

    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState();
    const [created, setCreated] = useState();
    const [nav, setNav] = useState();

    const squid = useSquid();
    const { account } = useWeb3React();

    const [search, setSearch] = useState("");

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
            await squid.getCreatedIds(account).then((res) => {
                res.forEach(element => {
                    uuids.created.push(ethers.BigNumber.from(element).toNumber());
                });
            });
        } catch (e) {
            console.log(e);
        }
        try {
            await squid.getIds(account).then((res) => {
                res.forEach(element => {
                    uuids.current.push(ethers.BigNumber.from(element).toNumber());
                });
            });
        } catch (e) {
            console.log(e);
        }
        return uuids;
    }

    async function getData() {
        try {
            const ids = await getIds();
            let temp_current = [];
            let temp_created = [];
            for(let i = 0; i < ids.current.length; i++) {
                let shareholders = [];
                await squid.getShareholders(ids.current[i]).then((res) => {
                    for(let i = 0; i < res.length; i+=2) {
                        shareholders.push({
                            address: res[i],
                            share: res[i+1]
                        });
                    }
                });
                await squid.getShareData(ids.current[i], account).then((res) => {
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
                        creator: res[8],
                        shareholders: shareholders
                    });
                });
            }
            for(let i = 0; i < ids.created.length; i++) {
                let shareholders = [];
                await squid.getShareholders(ids.created[i]).then((res) => {
                    for(let i = 0; i < res.length; i+=2) {
                        shareholders.push({
                            address: res[i],
                            share: res[i+1]
                        });
                    }
                })
                await squid.getShareData(ids.created[i], account).then((res) => {
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
                        creator: res[8],
                        shareholders: shareholders
                    });
                });
            }
            setCreated(temp_created);
            setCurrent(temp_current);
        } catch (e) {
            setError(e.reason);
            onErrorOpen();
        }
    }

    useEffect(() => {
        setNav('current');
        const fetchData = async () => {
            await getData().then(() => {
                setLoading(false);
            });
        };
        fetchData();
    }, []);

    function filter(data) {
        if(loading) return;
        try {
            let res = [];
            for(let i = 0; i < data.length; i++) {
                if(
                    data[i].uuid.toString().toLowerCase().includes(search.toLowerCase()) ||
                    data[i].name.toLowerCase().includes(search.toLowerCase()) ||
                    data[i].address.toLowerCase().includes(search.toLowerCase()) ||
                    data[i].creator.toLowerCase().includes(search.toLowerCase())
                ) { res.push(data[i]); }
            }
            return res;
        } catch (e) {
            console.log("Something went wrong! Try refreshing the page...")
            return data;
        }
    }

    return (
        <>
            <div className="app-view scrollable-y">
                <div className="manage-menu">
                    <div className="search">
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search"
                        />
                        <img src={searchIcon} alt=""/>
                    </div>
                </div>
                <div className="manage-container">
                    <div className="manage-nav">
                        <p
                            className={"manage-nav-title " + (nav ? "manage-nav-active" : " ")}
                            onClick={()=> {
                                setNav(true);
                            }}
                        >
                            My Squids
                        </p>
                        <p
                            className={"manage-nav-title " + (!nav ? "manage-nav-active" : " ")}
                            onClick={() => {
                                setNav(false);
                            }}
                        >
                            Created By Me
                        </p>
                    </div>
                    <div className="w-100">
                        {loading ? (
                            <div>
                                <img className="vtspace-50 h-center" src={loadingGif} alt="loading"/>
                                <p className="loading-text vtspace-25">Retrieving information from the blockchain...</p>
                            </div>
                        ) : (
                            nav ? (
                                <>
                                    <Table
                                        _data={filter(current)}
                                        toDisplay={nav}
                                    />
                                </>
                            ) : (
                                <>
                                    <Table
                                        _data={filter(created)}
                                        toDisplay={nav}
                                    />
                                </>
                            )
                        )}
                    </div>
                </div>
                <InfoModal 
                    isOpen={isErrorOpen}
                    closeModal={onErrorClose}
                    Title={"Something went wrong!"}
                    Content={error}
                />
            </div>
        </>
    );
};