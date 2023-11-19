import React from 'react'
import FeatureInfo from '../../featuredInfo/FeatureInfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../constants/dummyData'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widget.Lg/WidgetLg'

const Home = () => {
  return (
    <div className='home flex-[4]'>
      <FeatureInfo />
      <Chart
        title="User Analytics"
        data={userData}
        grid
        dataKey="Active User"
      />
      <div className="homewidget flex m-[20px]">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home