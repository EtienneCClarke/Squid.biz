import React from "react"

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
        accessor: 'total_balance'
    },
    {
        Header: 'Address',
        accessor: 'address'
    },
    {
        Header: ' ',
        Cell: ({row : {original}}) => (
            <button
                onClick={() => console.log(original)}
            >
                Click Me
            </button>
        )
    }

]