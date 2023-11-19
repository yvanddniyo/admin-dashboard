import React from 'react'

const WidgetLg = () => {
  const Button = ({ type }) => {
    if (type === 'Approved')
      return <button className={'widgetLgButton py-1 px-2 rounded-[10px] bg-green-300 text-black'}>{type}</button>
    else if (type === 'Declined') {
      return <button className={'widgetLgButton py-1 px-2 rounded-[10px] bg-red-100 text-red-500'}>{type}</button>
    }
    else if (type === 'Pending') {
      return <button className={'widgetLgButton py-1 px-2 rounded-[10px] bg-blue-100 text-teal-500'}>{type}</button>
    }

  }
  return (
    <div className='WidgetLg flex-[2] shadow p-5'>
      <h3 className='widgetLgTitle text-[22px] font-bold'>Latest Transactions</h3>
      <table className='widgetLgTable w-full m-3 border-separate border-spacing-x-5 border-spacing-y-5'>
        <thead className='' >
          <tr className='widgeLgTr'>
            <th className='widgeLgTh text-left'>Customer</th>
            <th className='widgeLgTh text-left'>Date</th>
            <th className='widgeLgTh text-left'>Amount</th>
            <th className='widgeLgTh text-left'>Status</th>
          </tr>
        </thead>
        <tbody>

          <tr className='widgeLgTr'>
            <td className="widgeLgUser flex items-center font-bold">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <span className=''>Susan Carol</span>
            </td>
            <td className="widgeLgDate  font-[300]"> 2 Jun 2021</td>
            <td className="widgeLgDate font-[300]"> $122.00</td>
            <td className="widgeLgDate">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className='widgeLgTr'>
            <td className="widgeLgUser flex items-center font-bold">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <span className=''>Susan Carol</span>
            </td>
            <td className="widgeLgDate  font-[300]"> 2 Jun 2021</td>
            <td className="widgeLgDate font-[300]"> $122.00</td>
            <td className="widgeLgDate">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className='widgeLgTr '>
            <td className="widgeLgUser flex items-center font-bold">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <span className=''>Susan Carol</span>
            </td>
            <td className="widgeLgDate  font-[300]"> 2 Jun 2021</td>
            <td className="widgeLgDate font-[300]"> $122.00</td>
            <td className="widgeLgDate">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className='widgeLgTr'>
            <td className="widgeLgUser flex items-center font-bold">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <span className=''>Susan Carol</span>
            </td>
            <td className="widgeLgDate  font-[300]"> 2 Jun 2021</td>
            <td className="widgeLgDate font-[300]"> $122.00</td>
            <td className="widgeLgDate">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg