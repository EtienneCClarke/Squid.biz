import React from "react";
import { ethers } from "ethers";
import KollabView from "../KollabView";
import "../../css/style.css";

function truncate(str) {
    if(str.length > 6) {
        if (str.includes('.')) {
            const parts = str.split('.');
            return parts[0] + '.' + parts[1].slice(0, 4) + '...';
        }
        return str.slice(0, 5) + '...'
    }
    return str;
}

export const COLUMNS_CURRENT = [
    {
        Header: 'UUID',
        accessor: 'uuid',
        id: 'uuid',
        Cell: ({row: {original}}) => (
            <p>#{original.uuid}</p>
        )
    },
    {
        Header: 'Name',
        accessor: 'name',
        id: 'name',
        Cell: ({row: {original}}) => (
            <p className="txt-bold">{original.name}</p>
        )
    },
    {
        Header: 'My Share',
        accessor: 'personal_balance',
        id: 'personal_balance',
        Cell: ({row: {original}}) => (
            <p>{truncate(ethers.utils.formatEther(original.personal_balance))}</p>
        )
    },
    {
        Header: 'Total Pot',
        accessor: 'total_balance',
        id: 'global_balance',
        Cell: ({row: {original}}) => (
            <p>{truncate(ethers.utils.formatEther(original.total_balance))}</p>
        )
    },
    {
        Header: 'Address',
        accessor: 'address',
        id: 'address',
    },
    {
        Header: 'Creator',
        accessor: 'creator',
        id: 'creator',
    },
    {
        Header: ' ',
        id: 'settings',
        Cell: ({row : {original}}) => (
            <KollabView data={original} isCreator={false}/>
        )
    }
]