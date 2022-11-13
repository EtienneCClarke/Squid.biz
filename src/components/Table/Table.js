import React, { useEffect, useMemo, useState } from "react";
import { COLUMNS_CURRENT } from "./columnsCurrent";
import { COLUMNS_CREATED } from "./columnsCreated";
import { useTable, useSortBy } from "react-table";
import useWindowDimensions from "../../utils/useWindowDimensions";
import sortedAsc from "../../assets/icons/sorted-asc.png";
import sortedDesc from "../../assets/icons/sorted-desc.png";
import unsorted from "../../assets/icons/unsorted.png";
import "../../css/table.css";

export default function Table({ _data, toDisplay }) {

    const { height, width } = useWindowDimensions();

    const columns = useMemo(() => toDisplay ? COLUMNS_CURRENT : COLUMNS_CREATED);
    const data = useMemo(() => _data);

    const hideColumns = () => {
        if(width < 330) {
            return(toDisplay ? ['global_balance', 'address', 'creator', 'personal_balance', 'uuid'] : ['address', 'global_balance', 'uuid']);
        }
        if(width < 500 && width >= 330) {
            return(toDisplay ? ['global_balance', 'address', 'creator', 'personal_balance'] : ['address', 'global_balance']);
        }
        if(width >= 500 && width < 650) {
            return(toDisplay ? ['global_balance', 'address', 'creator'] : ['address']);
        }
        if(width < 1100 && width >= 650) {
            return(toDisplay ? ['address', 'creator'] : ['address']);
        }
        if(width < 1550 && width >= 990) {
            return(toDisplay ? ['creator'] : ['']);
        }
        return [];
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
        initialState: {
            sortBy: [
                {
                    id: 'uuid',
                    desc: true
                }
            ],
            hiddenColumns: hideColumns()
        }
    },
        useSortBy
    );

    return(
        <table {...getTableProps()} cellSpacing="10">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                <span className="title">
                                    {column.render('Header')}
                                    {column.isSorted ? (column.isSortedDesc ? <img src={sortedDesc} /> : <img src={sortedAsc} />) : <img src={unsorted}/>}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );

}