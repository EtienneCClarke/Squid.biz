import React from "react"
import { ethers } from "ethers";
import KollabView from "../KollabView";
import "../../css/style.css";

export const COLUMNS_CREATED = [
    {
        Header: 'UUID',
        Cell: ({row: {original}}) => (
            <p>#{original.uuid}</p>
        )
    },
    {
        Header: 'Name',
        Cell: ({row: {original}}) => (
            <p className="txt-bold">{original.name}</p>
        )
    },
    {
        Header: 'Global Balance',
        accessor: 'total_balance',
        Cell: ({row: {original}}) => (
            <p>{ethers.utils.formatEther(original.personal_balance)}</p>
        )
    },
    {
        Header: 'Address',
        accessor: 'address'
    },
    {
        Header: ' ',
        Cell: ({row : {original}}) => (
            <KollabView data={original} />
        )
    }

]