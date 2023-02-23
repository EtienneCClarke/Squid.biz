import React, { useEffect, useMemo, useRef } from "react";
import { COLUMNS_CURRENT } from "./columnsCurrent";
import { COLUMNS_CREATED } from "./columnsCreated";
import { useTable, useSortBy } from "react-table";
import useWindowDimensions from "../../utils/useWindowDimensions";
import sortedAsc from "../../assets/icons/sorted-asc.png";
import sortedDesc from "../../assets/icons/sorted-desc.png";
import unsorted from "../../assets/icons/unsorted.png";
import "../../css/table.css";
import { useWeb3React } from "@web3-react/core";

export default function Table({ _data, toDisplay }) {

    const { width } = useWindowDimensions();

    const { chainId } = useWeb3React();

    const columns = useMemo(() => toDisplay ? COLUMNS_CURRENT : COLUMNS_CREATED);
    const data = useMemo(() => _data);

    const table = useRef();

    const hideColumns = () => {
        if(width < 360) {
            return(toDisplay ? ['global_balance', 'address', 'creator', 'personal_balance', 'uuid'] : ['creator', 'address', 'global_balance', 'uuid']);
        }
        if(width < 475 && width >= 360) {
            return(toDisplay ? ['global_balance', 'address', 'creator', 'personal_balance'] : ['creator', 'address', 'global_balance']);
        }
        if(width < 600 && width >= 475) {
            return(toDisplay ? ['global_balance', 'creator', 'address'] : ['creator', 'address']);
        }
        if(width < 815 && width >= 600) {
            return(toDisplay ? ['creator', 'address'] : ['creator', 'address', ]);
        }
        if(width < 940 && width >= 815) {
            return(toDisplay ? ['global_balance', 'creator', 'personal_balance'] : ['creator', 'global_balance']);
        }
        if(width < 1100 && width >= 940) {
            return(toDisplay ? ['global_balance', 'creator'] : ['creator', 'global_balance']);
        }
        if(width < 1190 && width >= 1100) {
            return(toDisplay ? ['global_balance', 'personal_balance', 'creator'] : ['creator', 'global_balance']);
        }
        if(width < 1310 && width >= 1190) {
            return(toDisplay ? ['global_balance', 'creator'] : ['creator']);
        }
        if(width < 1760 && width >= 1310) {
            return(toDisplay ? ['creator'] : ['creator']);
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
        <table ref={table} {...getTableProps()} cellSpacing="10">
            <thead className={chainId == 1 || chainId == 5 ? "bg-dark-blue" : chainId === 137 || chainId === 80001 ? "bg-dark-purple" : "bg-black"}>
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