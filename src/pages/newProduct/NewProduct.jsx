import React from 'react'

const NewProduct = () => {
  return (
    <div className='NewProduct flex-[4] '>
      <h1 className='font-[700] text-[24px]'>New Product</h1>
      <form >
        <div className="mt-[10px] flex flex-col mb-3 w-[250px]">
          <label className='text-gray-500 font-bold mb-2'>Image</label>
          <input type="file"
            name="" id="file"
            className=" m-2"
          />
        </div>
        <div className="mt-[10px] flex flex-col mb-3 w-[250px]">
          <label className="text-gray-500 font-bold mb-2">Name</label>
          <input type="text" name="" id=""
            placeholder='Jeans'
            className="m-2 border p-2 outline-none border-gray-400"
          />
        </div>
        <div className="mt-[10px] flex flex-col mb-3 w-[250px]">
          <label className="text-gray-500 font-bold mb-2">Stock</label>
          <input type="text" name="" id=""
            placeholder='123'
            className="m-2 border p-2 outline-none border-gray-400"
          />
        </div>
        <div className="mt-[10px] flex flex-col mb-3 w-[250px]">
          <label htmlFor="">Active</label>
          <select name="active" id="active"
            className='p-3 border border-gray-500 outline-none'
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="mt-2 py-2 px-3 rounded-md bg-blue-800 text-white font-bold cursor-pointer">Create</button>
      </form>
    </div>
  )
}

export default NewProduct