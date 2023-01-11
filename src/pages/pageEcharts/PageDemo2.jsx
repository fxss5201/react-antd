import { Button, Typography } from "antd";
import { useState } from "react";
import EchartsModule from "../../components/EchartsModule";

const { Title } = Typography;

const PageDemo = () => {
  const [isShow, setIsShow] = useState(false)
  const options = {
    legend: {},
    xAxis: {},
    yAxis: {
      type: 'category',
      data: ['Latte', 'Tea', 'Cocoa', 'Brownie']
    },
    tooltip: {
      trigger: 'axis',
      className: 'echart-tooltip-zIndex',
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
      <div className="w-full h-80">
        {isShow && <EchartsModule options={options} seriesData={seriesData}></EchartsModule>}
      </div>
    </div>
  );
};

export default PageDemo;
