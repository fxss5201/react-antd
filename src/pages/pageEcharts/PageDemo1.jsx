import { Button, Typography } from "antd";
import { useState } from "react";
import EchartsModule from "../../components/EchartsModule";

const { Title } = Typography;

const PageDemo = () => {
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

  const [seriesData, setSeriesData] = useState([
    {
      type: 'bar',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4, 88, 90]
    },
    {
      type: 'bar',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9, 75, 68]
    },
    {
      type: 'bar',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1, 95, 93]
    }
  ])
  const changeDate = () => {
    setSeriesData([
      {
        type: 'bar',
        name: '2015',
        data: [89.3, 92.1, 94.4, 85.4, 50, 69]
      },
      {
        type: 'bar',
        name: '2016',
        data: [95.8, 89.4, 91.2, 76.9, 75, 68]
      }
    ])
  }

  return (
    <div>
      <Title level={3}>1、默认展示，测试 seriesData 变更</Title>
      <div>
        <Button onClick={changeDate}>切换</Button>
      </div>
      <div className="w-full h-80">
        <EchartsModule options={options} seriesData={seriesData}></EchartsModule>
      </div>
    </div>
  );
};

export default PageDemo;
