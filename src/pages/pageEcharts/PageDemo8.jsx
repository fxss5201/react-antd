import { Button, Typography, theme } from "antd";
import { useState } from "react";
import EchartsModule from "../../components/EchartsModule";

const { Title } = Typography;
const { useToken } = theme;

const PageDemo = () => {
  const { token } = useToken();
  const { colorText, colorBgContainer, colorBorder } = token;
  const [isAddOn, setIsAddOn] = useState(false)
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
    setIsAddOn(true)
  }

  return (
    <div>
      <Title level={3}>8、通过 isAddOn 添加移除鼠标事件</Title>
      <div>
        <Button onClick={changeDate}>{ isAddOn ? '移除' : '添加' }</Button>
      </div>
      <div className="w-full h-80" style={{backgroundColor: colorBgContainer}}>
        <EchartsModule options={options} seriesData={seriesData} isAddOn={isAddOn}></EchartsModule>
      </div>
    </div>
  );
};

export default PageDemo;
