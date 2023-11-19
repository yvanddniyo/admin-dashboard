
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({ title, data, dataKey, grid }) => {


  return (
    <div className='m-5 p-5 shadow'>
      <h3 className='mb-5  '>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}  >
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#5550bd' />
          <Line type="monotone" dataKey={dataKey} />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
          <Legend />
        </LineChart>

      </ResponsiveContainer>
    </div>
  )
}

export default Chart