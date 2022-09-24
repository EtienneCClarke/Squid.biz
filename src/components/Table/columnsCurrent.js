import { ethers } from "ethers";
import React from "react";
import KollabView from "../KollabView";
import "../../css/style.css";

export const COLUMNS_CURRENT = [
    {
        Header: 'UUID',
        accessor: 'uuid',
        Cell: ({row: {original}}) => (
            <p>#{original.uuid}</p>
        )
    },
    {
        Header: 'Name',
        accessor: 'name',
        Cell: ({row: {original}}) => (
            <p className="txt-bold">{original.name}</p>
        )
    },
    {
        Header: 'Personal Balance',
        accessor: 'personal_balance',
        Cell: ({row: {original}}) => (
            <p>{ethers.utils.formatEther(original.personal_balance)}</p>
        )
    },
    {
        Header: 'Global Balance',
        accessor: 'total_balance',
        Cell: ({row: {original}}) => (
            <p>{ethers.utils.formatEther(original.total_balance)}</p>
        )
    },
    {
        Header: 'Address',
        accessor: 'address'
    },
    {
        Header: 'Creator',
        accessor: 'creator'
    },
    {
        Header: ' ',
        Cell: ({row : {original}}) => (
            <KollabView data={original} />
        )
    }
]