import React from 'react'
import { Link } from 'react-router-dom'
import { Person, CalendarMonth, PhoneAndroid, Email, LocationSearching, Publish } from '../../constants/muiIcons'

const User = () => {
  return (
    <div className='flex-[4] p-5'>
      <div className='userTitleC flex items-center justify-between'>
        <h1 className='userTitle font-bold text-[29px]'>Edit Use</h1>
        <Link to='/newuser'>
          <button className='userButtonButton w-[80px] p-1 bg-teal-500 rounded-md text-white text-[16px] cursor-pointer'>
            Create
          </button></Link>
      </div>
      <div className="useContainer flex mt-6">
        <div className="userShow flex-1 p-5 shadow mr-5">
          <div className="userShowTop flex items-center">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-10 h-10 rounded-full object-cover mr-5"
            />
            <div className="flex flex-col">
              <span className=' font-[700]'>Anna Becker</span>
              <span className='font-[300]'>Software Engineer</span>
            </div>
          </div>
          <div className="userButtom mt-5">
            <span className='text-[14px] font-bold text-gray-400'>Account Details</span>
            <div className="userShowInfo flex items-center my-5 text-[#444]">
              <Person className='text-[16px]   ' />
              <span className='userShowTitle ml-2 '>annabeck88</span>
            </div>
            <div className="userShowInfo flex items-center my-5 text-[#444]">
              <CalendarMonth className='text-[16px]' />
              <span className='userShowTitle ml-2'>10.12.1988</span>
            </div>
            <span className='text-[14px] font-bold text-gray-400'>Contact Detail</span>
            <div className="userShowInfo flex items-center my-5 text-[#444]">
              <PhoneAndroid className='text-[16px]' />
              <span className='userShowTitle ml-2'>+250 780 076 941</span>
            </div>
            <div className="userShowInfo flex items-center my-5 text-[#444]">
              <Email className='text-[16px]' />
              <span className='userShowTitle ml-2'>annabeck88@gmail.com</span>
            </div>
            <div className="userShowInfo flex items-center my-5 text-[#444]">
              <LocationSearching className='text-[16px]' />
              <span className='userShowTitle ml-2'>Kigali | Rwanda</span>
            </div>
          </div>
        </div>
        <div className="userUpdate flex-[2] p-5 shadow ">
          <span className='text-[24px] font-bold'>Edit</span>
          <form className=" flex justify-between mt-5">
            <div className="userUpdateLeft ">
              <div className="flex flex-col mt-3">
                <label className='mb-2 text-[14px]'>username</label>
                <input
                  type='text'
                  placeholder='annabeck99'
                  className='border-b-2 border-gray-500 w-[250px] h-7 outline-none '
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className='mb-2 text-[14px]'>Full Name</label>
                <input
                  type='text'
                  placeholder='Anna Becker'
                  className='border-b-2 border-gray-500 w-[250px] h-7 outline-none '
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className='mb-2 text-[14px]'>Email</label>
                <input
                  type='text'
                  placeholder='annabeck99@gmail.com'
                  className='border-b-2 border-gray-500 w-[250px] h-7 outline-none '
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className='mb-2 text-[14px]'>Phone</label>
                <input
                  type='text'
                  placeholder='+250 780 076 941'
                  className='border-b-2 border-gray-500 w-[250px] h-7 outline-none '
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className='mb-2 text-[14px]'>Address</label>
                <input
                  type='text'
                  placeholder='Kigali | Rwanda'
                  className='border-b-2 border-gray-500 w-[250px] h-7 outline-none '
                />
              </div>
            </div>
            <div className="userUpdateRight flex flex-col justify-between">
              <div className="userUpdateLoad flex items-center">
                <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                  className="w-[100px] h-[100px] ml-5 rounded-md object-cover " />
                <label htmlFor="file" className='cursor-pointer '><Publish /></label>
                <input type="file" name="" id="file" className='hidden' />
              </div>
              <button className="userUpdate bg-blue-800 rounded-md p-1 text-white cursor-pointer">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User