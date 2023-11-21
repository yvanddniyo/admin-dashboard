
import {
  TrendingUp, Timeline, LineStyle, PermIdentity, Inventory2,
  Assessment, Paid, Mail, Feedback, Message, Work, Report
} from "../../constants/muiIcons.js"
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar flex-1 h-[calc(100vh-50px)] bg-gray-50  sticky top-[50px] '>
      <div className="sideWrapper p-5 text-[#555]">
        <div className="sidebarmenu mb-[10px] ">
          <h3 className="sidebarTitle text-[13px] text-gray-400 ">Dashboard</h3>
          <ul className="sidebarList list-none p-1">
            <li className="sidebarListitem  p-1 cursor-pointer flex items-center bg-gray-300 hover:bg-gray-300 rounded-[10px]">
              < LineStyle className='mr-3 text-[20px]' /> Home
            </li>
            <li className="sidebarListitem p-1 cursor-pointer flex items-center active:bg-gray-300 hover:bg-gray-300 rounded-[10px]">
              < Timeline className='mr-3 text-[20px]' /> Analytics
            </li>
            <li className="sidebarListitem p-1 cursor-pointer flex items-center active:bg-gray-300 hover:bg-gray-300 rounded-[10px]">
              < TrendingUp className='mr-3 text-[20px !important]' /> Sale
            </li>
          </ul>
        </div>
        <div className="sidebarmenu mb-[10px] ">
          <h3 className="sidebarTitle text-[13px] text-gray-400">Quick Menu</h3>
          <ul className="sidebarList list-none p-1">
            <Link to='/userList'>
              <li className="sidebarListitem  p-1 cursor-pointer flex items-center  hover:bg-gray-400 rounded-[10px]">
                < PermIdentity className='mr-3 text-[20px]' /> Users
              </li>
            </Link>
            <Link to='/productlist'>
              <li className="sidebarListitem p-1 cursor-pointer flex items-center active:bg-gray-300 hover:bg-gray-300 rounded-[10px]">
                < Inventory2 className='mr-3 text-[20px]' /> Products
              </li>
            </Link>
            <li className="sidebarListitem p-1 cursor-pointer flex items-center active:bg-gray-300 hover:bg-gray-300 rounded-[10px]">
              < Paid className='mr-3 text-[20px !important]' /> Transaction
            </li>
            <li className="sidebarListitem p-1 cursor-pointer flex items-center active:bg-gray-300 hover:bg-gray-300 rounded-[10px]">
              <Assessment className='mr-3 text-[20px !important]' /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarmenu mb-[10px] ">
          <h3 className="sidebarTitle text-[13px] text-gray-400">Notification</h3>
          <ul className="sidebarList list-none p-1">
            <li className="sidebarListitem  p-1 cursor-pointer flex items-center  hover:bg-gray-400 rounded-[10px]">
              < Mail className='mr-3 text-[20px]' /> Mail
            </li>
            <li className="sidebarListitem p-1 cursor-pointer flex items-center active:bg-gray-300 hover:bg-gray-300 rounded-[10px]">
              < Feedback className='mr-3 text-[20px]' /> Feedbacks
            </li>
            <li className="sidebarListitem p-1 cursor-pointer flex items-center active:bg-gray-300 hover:bg-gray-300 rounded-[10px]">
              < Message className='mr-3 text-[20px !important]' /> Message
            </li>
          </ul>
        </div>
        <div className="sidebarmenu mb-[10px] ">
          <h3 className="sidebarTitle text-[13px] text-gray-400">Staff</h3>
          <ul className="sidebarList list-none p-1">
            <li className="sidebarListitem  p-1 cursor-pointer flex items-center  hover:bg-gray-400 rounded-[10px]">
              < Work className='mr-3 text-[20px]' /> Manage
            </li>
            <li className="sidebarListitem p-1 cursor-pointer flex items-center active:bg-gray-300 hover:bg-gray-300 rounded-[10px]">
              < Timeline className='mr-3 text-[20px]' /> Analytics
            </li>
            <li className="sidebarListitem p-1 cursor-pointer flex items-center active:bg-gray-300 hover:bg-gray-300 rounded-[10px]">
              < Report className='mr-3 text-[20px !important]' /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar