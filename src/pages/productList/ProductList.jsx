import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '../../constants/muiIcons'
import { productRows } from '../../constants/dummyData';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState(productRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 190, renderCell: (params) => {
        return (
          <div className="flex items-center ">
            <img
              className='w-8 h-8 rounded-full object-cover mr-3'
              src={params.row.image} alt="" />
            {params.row.name}
          </div>
        )
      },

      editable: true,
    },
    {
      field: 'stock',
      headerName: 'Stock',
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
      field: 'price',
      headerName: 'Price',
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
            <Link to={"/product/" + params.row.id} >
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
    <div className='productList flex-[4]'>
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

export default ProductList