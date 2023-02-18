import { Button, Typography, theme } from "antd";
import { useState } from "react";
import EchartsModule from "../../components/EchartsModule";

const { Title } = Typography;
const { useToken } = theme;

const PageDemo = () => {
  const { token } = useToken();
  const { colorText, colorBgContainer, colorBorder } = token;
  const [isShow, setIsShow] = useState(false)
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
    xAxis: {},
    yAxis: {
      type: 'category',
      data: ['Latte', 'Tea', 'Cocoa', 'Brownie']
    },
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
  const [seriesData, setSeriesData] = useState([])
  function changeDate() {
    setIsShow(true)
    setSeriesData([
      {
        type: 'bar',
        name: '2015',
        data: [89.3, 92.1, 94.4, 85.4]
      },
      {
        type: 'bar',
        name: '2016',
        data: [95.8, 89.4, 91.2, 76.9]
      }
    ])
  }

  return (
    <div>
      <Title level={3}>2、默认不展示，展示的时候，设置 seriesData</Title>
      <div>
        <Button onClick={changeDate}>切换</Button>
      </div>
      <div className="w-full h-72" style={{backgroundColor: colorBgContainer}}>
        {isShow && <EchartsModule options={options} seriesData={seriesData}></EchartsModule>}
      </div>
    </div>
  );
};

export default PageDemo;
