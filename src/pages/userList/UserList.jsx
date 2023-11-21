import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '../../constants/muiIcons'
import { userRows } from '../../constants/dummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'userName',
      headerName: 'Username',
      width: 190, renderCell: (params) => {
        return (
          <div className="flex items-center ">
            <img
              className='w-8 h-8 rounded-full object-cover mr-3'
              src={params.row.avatar} alt="" />
            {params.row.userName}
          </div>
        )
      },

      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
      editable: true,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id} >
              <button className='rounded-[10px] p-2 bg-green-500 text-white cursor-pointer mr-5'>
                Edit
              </button>
            </Link>
            <DeleteOutline className='text-red-500 cursor-pointer'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
      sortable: false,
      width: 160,
    },
  ];

  return (
    <div className='flex-[4]'>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        disableRowSelectionOnClick
        disableColumnSelector
        checkboxSelection
      />
    </div>
  )
}

export default UserList