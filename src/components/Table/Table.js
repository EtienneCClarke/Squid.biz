import React, { useEffect, useMemo } from "react";
import { COLUMNS_CURRENT } from "./columnsCurrent";
import { COLUMNS_CREATED } from "./columnsCreated";
import { useTable, useSortBy } from "react-table";
import sortedAsc from "../../assets/icons/sorted-asc.png";
import sortedDesc from "../../assets/icons/sorted-desc.png";
import unsorted from "../../assets/icons/unsorted.png";
import "../../css/table.css";

export default function Table({ _data, toDisplay }) {

    const columns = useMemo(() => toDisplay ? COLUMNS_CURRENT : COLUMNS_CREATED);
    const data = useMemo(() => _data);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps
    } = useTable({
        columns, data
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