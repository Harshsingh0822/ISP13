import {React, useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Orderlist.css"
import {userRows} from "../dummyData"
import {Link} from "react-router-dom"


export default function DataTable() {

  const [data, Update] = useState(userRows)
  
  const handleDelete = (id) =>{
    Update(data.filter(item=>item.id !== id) )
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Order', headerName: 'Order', width: 250 },
    { field: 'Ordercode', headerName: 'Quantity', width: 130 },
    { field: 'customer', headerName: 'Customer', width: 130 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'Status', headerName: 'Status', width: 130 },
    { field: 'Transaction', headerName: 'Transaction', width: 130 },
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
    <div style={{ height: 800, width: '100%',paddingTop: '20px' }}>
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
