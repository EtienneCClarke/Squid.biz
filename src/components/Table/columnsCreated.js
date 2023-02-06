import React from "react"
import { ethers } from "ethers";
import SquidView from "../SquidView";
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

export const COLUMNS_CREATED = [
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
        Header: ' ',
        id: 'settings',
        Cell: ({row : {original}}) => (
            <SquidView data={original} isCreator={true}/>
        )
    }

]