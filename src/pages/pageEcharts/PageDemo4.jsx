import { Button, Typography } from "antd";
import { useState } from "react";
import EchartsModule from "../../components/EchartsModule";

const { Title } = Typography;

const PageDemo = () => {
  const [boxWidth, setBoxWidth] = useState(true)
  const [boxHeight, setBoxHeight] = useState(true)
  const options = {
    legend: {},
    xAxis: {
      type: 'category',
      data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie', 'Brownie', 'Cheese']
    },
    yAxis: {},
    tooltip: {
      trigger: 'axis',
      className: 'echart-tooltip-zIndex',
    }
  }
  const seriesData = [
    {
      type: 'line',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4, 88, 90]
    },
    {
      type: 'line',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9, 75, 68]
    },
    {
      type: 'line',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1, 95, 93]
    }
  ]
  function changeDate4() {
    setBoxWidth(!boxWidth)
  }
  function changeDate41() {
    setBoxHeight(!boxHeight)
  }

  return (
    <div>
      <Title level={3}>3、切换宽高，自动 resize</Title>
      <div>
        <Button onClick={changeDate4}>切换宽度</Button>
        <Button className="ml-2" onClick={changeDate41}>切换高度</Button>
      </div>
      <div className="w-full h-80">
        <div style={{width: boxWidth ? '100%' : '50%', height: boxHeight ? '100%' : '75%'}}>
          <EchartsModule options={options} seriesData={seriesData}></EchartsModule>
        </div>
      </div>
    </div>
  );
};

export default PageDemo;
