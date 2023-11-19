import React from 'react'
import { ArrowDownward, ArrowUpward } from '../constants/muiIcons.js'

const FeatureInfo = () => {
  return (
    <div className='FeatureInfo w-full flex justify-between '>
      <div className="featuredItem flex-1 mx-[20px] p-[28px] rounded-[10px] cursor-pointer shadow">
        <span className="featuredItemTitle text-[20px] "> Revenue</span>
        <div className="Featuredmoney mt-3 flex items-center">
          <span className="featuredMoney text-[30px] font-bold">$2,343</span>
          <span className="featuredMoneyRate flex items-center ml-4">-11.4 < ArrowDownward className='text-[14px] ml-[5px] text-red-600' /> </span>
        </div>
        <span className="featuredSub text-[16px] text-gray"> Compared to last month</span>
      </div>
      <div className="featuredItem flex-1 mx-[20px] p-[28px] rounded-[10px] cursor-pointer shadow">
        <span className="featuredItemTitle text-[20px]"> Sale</span>
        <div className="Featuredmoney mt-3 flex items-center">
          <span className="featuredMoney text-[30px] font-bold">$4,415</span>
          <span className="featuredMoneyRate flex items-center ml-4">-10.4 < ArrowDownward className='text-[14px] ml-[5px] text-red-600' /> </span>
        </div>
        <span className="featuredSub text-[16px] text-gray"> Compared to last month</span>
      </div>
      <div className="featuredItem flex-1 mx-[20px] p-[28px] rounded-[10px] cursor-pointer shadow">
        <span className="featuredItemTitle text-[20px]"> Cost</span>
        <div className="Featuredmoney mt-3 flex items-center">
          <span className="featuredMoney text-[30px] font-bold">$2,000</span>
          <span className="featuredMoneyRate flex items-center ml-4">+3.4 < ArrowUpward className='text-[14px] ml-[5px] text-green-600' /> </span>
        </div>
        <span className="featuredSub text-[16px] text-gray"> Compared to last month</span>
      </div>
    </div>
  )
}

export default FeatureInfo