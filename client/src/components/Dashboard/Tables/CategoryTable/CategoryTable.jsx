import React, {useMemo} from 'react'
import {useTable} from 'react-table'
import { recentBooking,recentBookingColumn } from '../../../../pages/data'
const CategoryTable = () => {
    const columns=useMemo(()=> recentBookingColumn,[])
    const data=useMemo(()=> recentBooking,[])
   const tableData= useTable({
        columns,
        data
    })
    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }=tableData
  return (
    <>
   
    <table {...getTableProps} className="border-collapse overflow-scroll">
        <thead className='bg-green-600'>
            {
                headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()} className= "border-2 px-16 py-2">{column.render('Header')}</th>
                            ))
                        }
                       
                    </tr>
                ))
            }
           
        </thead>
        <tbody {...getTableBodyProps()}>
           {
            rows.map(row=>{
                prepareRow(row)
                return(
                    <tr {...row.getRowProps()}>
                        {
                            row.cells.map(cell=>{
                                return <td {...cell.getCellProps()} className= "border-2 p-2">{cell.render('Cell')}</td>
                            })
                        }
                    </tr>
                )
            })
           }
        </tbody>
    </table>
    </>
  )
}

export default CategoryTable