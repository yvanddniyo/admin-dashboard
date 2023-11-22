import React from 'react'
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../constants/dummyData'
import { Publish } from '../../constants/muiIcons';

const Product = () => {
  return (
    <div className='flex-[4] p-[20px]'>
      <div className="productTilteContainer flex items-center justify-between">
        <h1 className='productTitle font-[24px] text-bold'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton w-[80px] p-[5px] bg-teal-500 text-white rounded-md text-[16px] cursor-pointer'>Create</button>
        </Link>
      </div>
      <div className="productTop flex">
        <div className="productTopLeft flex-1   ">
          <Chart
            data={productData}
            dataKey='Sales'
            title={'Sales Performance'}
          />
        </div>
        <div className="productTopRight flex-1  p-5 m-5 shadow">
          <div className="productInfoTop flex">
            <img src="https://www.sportsdirect.com/images/imgzoom/64/64303218_xxl.jpg" alt=""
              className="w-10 h-10 rounded-full mr-2 object-cover" />
            <span className="productNam">Jeans</span>
          </div>
          <div className="productInfoBottom mt-3">
            <div className="productInfoItem w-[150px] flex justify-between">
              <span className='productInfoKey'>id:</span>
              <span className='productInfovalue font-[300]'>123</span>
            </div>
            <div className="productInfoItem w-[150px] flex justify-between">
              <span className='productInfoKey'>sales:</span>
              <span className='productInfovalue font-[300]'>5123</span>
            </div>
            <div className="productInfoItem w-[150px] flex justify-between">
              <span className='productInfoKey'>active:</span>
              <span className='productInfovalue font-[300]'>yes</span>
            </div>
            <div className="productInfoItem w-[150px] flex justify-between ">
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfovalue font-[300]'>yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom flex-1  p-5 m-5 shadow">
        <form className='productForm flex justify-between'>
          <div className='productFormLeft flex flex-col'>
            <label className="mb-3 text-gray-500 p-2 border border-gray-500">Name</label>
            <input type="text" name="" id=""
              placeholder='Men Jeans'
              className="border p-1 border-gray-400 outline-none" />
            <label htmlFor=""> In Stock</label>
            <select name="inStock" id="inStock" className='border border-gray-500 mb-5 outline-none' >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label for="active">Active</label>
            <select name="active" id="active" className='border border-gray-500 outline-none'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight flex flex-col justify-around">
            <div className="productUpLoad flex items-center">
              <img src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6430c78a2198100b8be6531e7f90fbbb.jpg" alt=""
                className="w-[100px] h-[100px] rounded-md ml-5 object-cover"
              />
              <label for='file'><Publish /></label>
              <input type="file"
                name="" id=""
                className="hidden"
              />
            </div>
            <button className="productButton p-1 rounded-md bg-blue-800 cursor-pointer text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product