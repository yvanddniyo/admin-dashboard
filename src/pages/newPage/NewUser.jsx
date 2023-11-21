import React from 'react'

const NewUser = () => {
  return (
    <div className='flex-[4]'>
      <h1 className="newuserTitle font-bold text-[23px]">New User</h1>
      <form className='flex flex-wrap'>
        <div className="newuserItem w-[400px] flex flex-col mr-5">
          <label className='mb-3 text-[14px] font-bold text-gray-400'>Username</label>
          <input type="text" name="" id=""
            placeholder='john'
            className='border h-5 p-5 border-gray-500 rounded-sm'
          />
        </div>
        <div className="newuserItem w-[400px] flex flex-col mr-5">
          <label className='mb-3 text-[14px] font-bold text-gray-400'>Email</label>
          <input type="text" name="" id=""
            placeholder='john@gmail.com'
            className='border h-5 p-5 border-gray-500 rounded-sm'
          />
        </div>
        <div className="newuserItem w-[400px] flex flex-col mr-5">
          <label className='mb-3 text-[14px] font-bold text-gray-400'>Phone</label>
          <input type="text" name="" id=""
            placeholder='+250 780 376 941'
            className='border h-5 p-5 border-gray-500 rounded-sm'
          />
        </div>
        <div className="newuserItem w-[400px] flex flex-col mr-5">
          <label className='mb-3 text-[14px] font-bold text-gray-400'>Full Name</label>
          <input type="text" name="" id=""
            placeholder='John Smith'
            className='border h-5 p-5 border-gray-500 rounded-sm'
          />
        </div>
        <div className="newuserItem w-[400px] flex flex-col mr-5">
          <label className='mb-3 text-[14px] font-bold text-gray-400'>Password</label>
          <input type="text" name="" id=""
            placeholder='password'
            className='border h-5 p-5 border-gray-500 rounded-sm'
          />
        </div>
        <div className="newuserItem w-[400px] flex flex-col mr-5">
          <label className='mb-3 text-[14px] font-bold text-gray-400'>Address</label>
          <input type="text" name="" id=""
            placeholder='Butare | Rwanda'
            className='border h-5 p-5 border-gray-500 rounded-sm'
          />
        </div>
        <div className='newUserItem w-[400px] flex flex-col mr-5'>
          <label className='mt-2' >Gender</label>
          <div className="newUserGender mt-4">
            <input type="radio" name="gender" id="male" value='male' />
            <label for="male" className='m-3 text-[18px] text-[#555]'>Male</label>
            <input type="radio" name="gender" id="female" value='female' />
            <label for="female" className='m-3 text-[18px] text-[#555]'>Female</label>
            <input type="radio" name="gender" id="other" value='other' />
            <label for="other" className='m-3 text-[18px] text-[#555]'>Other</label>
          </div>
        </div>
        <div className="newUserItem w-[400px] flex flex-col mr-5 ">
          <label className='mt-2'>Active</label>
          <select name="active" id="active" className='h-[40px] rounded-md border border-gray-500 outline-none pl-2'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <button className='newUserButton w-[200px] bg-blue-900 text-white py-2 px-3 font-bold rounded-md my-8 cursor-pointer'>Create</button>
    </div>
  )
}

export default NewUser