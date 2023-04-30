import React from 'react'
import "./Listing.css" 
import { useState } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from "../../../AdminPortal/dummyData"
import {Link} from "react-router-dom"


export default function DataTable() {

  const [data, Update] = useState(userRows)
  
  const handleDelete = (id) =>{
    Update(data.filter(item=>item.id !== id) )
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Order', headerName: 'Order', width: 250 },
    { field: 'Ordercode', headerName: 'Order-code', width: 130 },
    { field: 'Category', headerName: 'Category',width: 130 },
    { field: 'customer', headerName: 'Customer', width: 130 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'Grade', headerName: 'Grade', width: 130 },
    { field: 'Transaction', headerName: 'Price/Kg', width: 130 },
    { field: 'Details',headerName: 'Information', width: 130, renderCell: (params)=>{
        return(
            <div>
            <button className='userListEdit'>Details</button>
            </div>)}},
    { field: 'Action', headerName: 'Action', width: 130, renderCell: (params)=>{
      return(
        <div>
        <Link to={"/sidebar2/"+params.row.id}>
        <button className='userListEdit'> Edit</button>
        </Link>
        <DeleteOutlineIcon className='userListdelete' onClick={()=>handleDelete(params.row.id)} />
        </div>
           ) },}
    
   ,
  ];

  return (
    <div style={{ height: 700, width: '100%',paddingTop: '20px' }}>
      <DataGrid
      disableRowSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[8]}
        checkboxSelection
        
      />
    </div>
  );
}
