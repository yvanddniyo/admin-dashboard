import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguagesIcon from "@mui/icons-material/Language";
import SettingsIcons from "@mui/icons-material/Settings";
const Topbar = () => {
  return (
    <div className='topbar w-full h-[50px] bg-white sticky top-0'>
      <div className='topbarWrapper h-full px-[20px] flex items-center justify-between'>
        <div className="topLeft cursor-pointer">
          <h1 className='font-bold text-[30px] text-gray-600'>Toha <span className='text-blue-600 drop-shadow'> admin</span></h1>
        </div>
        <div className="topRight flex items-center cursor-pointer">
          <div className='topbarIconContainer relative mr-[10px] text-gray-500'>
            <NotificationsIcon />
            <span className="absolute w-[15px] h-[15px] top-[-8px] right-[5px] bg-red-500 rounded-full text-white text-[12px] flex justify-center items-center ">2</span>
          </div>
          <div className='topbarIconContainer relative mr-[10px] text-gray-500'>
            <LanguagesIcon />
            <span className="absolute w-[15px] h-[15px] top-[-8px] right-[5px] bg-red-500 rounded-full text-white text-[12px] flex justify-center items-center ">2</span>
          </div>
          <div className='topbarIconContainer relative mr-[10px] text-gray-500'>
            <SettingsIcons />
          </div>
          <img
            className='w-[40px] h-[40px] rounded-full cursor-pointer'
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600 "
            alt="pexel-photo"
          />
        </div>
      </div>
    </div>
  )
}

export default Topbar