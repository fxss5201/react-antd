import { Button, Typography, theme } from "antd";
import { useState } from "react";
import EchartsModule from "../../components/EchartsModule";

const { Title } = Typography;
const { useToken } = theme;

const PageDemo = () => {
  const { token } = useToken();
  const { colorText, colorBgContainer, colorBorder } = token;
  const [intervalTime, setIntervalTime] = useState(5000)
  const options = {
    grid: {
      top: '15%',
      bottom: '10%',
    },
    textStyle: {
      color: colorText,
    },
    legend: {
      textStyle: {
        color: colorText,
      },
    },
    xAxis: {
      type: 'category',
      data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie', 'Brownie', 'Cheese']
    },
    yAxis: {},
    tooltip: {
      trigger: 'axis',
      className: 'echart-tooltip-zIndex',
      backgroundColor: colorBgContainer,
      borderColor: colorBorder,
      textStyle: {
        color: colorText,
      },
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
  const changeDate = () => {
    setIntervalTime(1000)
  }

  return (
    <div>
      <Title level={3}>7、切换动画跳动时间 5s 变 1s</Title>
      <div>
        <Button onClick={changeDate}>切换</Button>
      </div>
      <div className="w-full h-80" style={{backgroundColor: colorBgContainer}}>
        <EchartsModule options={options} seriesData={seriesData} intervalTime={intervalTime}></EchartsModule>
      </div>
    </div>
  );
};

export default PageDemo;
