import { Visibility } from '../constants/muiIcons'

const WidgetSm = () => {
  return (
    <div className='WidgetSm  flex-1 shadow p-5 mr-5'>
      <span className="widgetSmTitle text-[22px] font-bold">New Join Members</span>
      <ul className="widgetsmList m-0 p-0 ">
        <li className="widgetsmList flex items-center justify-between my-5">
          <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
            className=" w-10 h-10 rounded-full object-cover"
          />
          <div className='widgetsmUser flex flex-col'>
            <span className="font-bold ">Anna Keller</span>
            <span className="font-[300]">Software Engineer</span>
          </div>
          <button className='flex items-center rounded-[10px] p-[7px] bg-[#eeeef7] text-[#555] cursor-pointer '>
            <Visibility className='text-4 mr-1' />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetsmList m-0 p-0 ">
        <li className="widgetsmList flex items-center justify-between my-5">
          <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
            className=" w-10 h-10 rounded-full object-cover"
          />
          <div className='widgetsmUser flex flex-col'>
            <span className="font-bold ">Anna Keller</span>
            <span className="font-[300]">Software Engineer</span>
          </div>
          <button className='flex items-center rounded-[10px] p-[7px] bg-[#eeeef7] text-[#555] cursor-pointer '>
            <Visibility className='text-4 mr-1' />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetsmList m-0 p-0 ">
        <li className="widgetsmList flex items-center justify-between my-5">
          <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
            className=" w-10 h-10 rounded-full object-cover"
          />
          <div className='widgetsmUser flex flex-col'>
            <span className="font-bold ">Anna Keller</span>
            <span className="font-[300]">Software Engineer</span>
          </div>
          <button className='flex items-center rounded-[10px] p-[7px] bg-[#eeeef7] text-[#555] cursor-pointer '>
            <Visibility className='text-4 mr-1' />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetsmList m-0 p-0 ">
        <li className="widgetsmList flex items-center justify-between my-5">
          <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
            className=" w-10 h-10 rounded-full object-cover"
          />
          <div className='widgetsmUser flex flex-col'>
            <span className="font-bold ">Anna Keller</span>
            <span className="font-[300]">Software Engineer</span>
          </div>
          <button className='flex items-center rounded-[10px] p-[7px] bg-[#eeeef7] text-[#555] cursor-pointer '>
            <Visibility className='text-4 mr-1' />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetsmList m-0 p-0 ">
        <li className="widgetsmList flex items-center justify-between my-5">
          <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
            className=" w-10 h-10 rounded-full object-cover"
          />
          <div className='widgetsmUser flex flex-col'>
            <span className="font-bold ">Anna Keller</span>
            <span className="font-[300]">Software Engineer</span>
          </div>
          <button className='flex items-center rounded-[10px] p-[7px] bg-[#eeeef7] text-[#555] cursor-pointer '>
            <Visibility className='text-4 mr-1' />
            Display
          </button>
        </li>
      </ul>

    </div>
  )
}

export default WidgetSm