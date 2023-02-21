import { Button, Typography, theme } from "antd";
import { useState } from "react";
import EchartsModule from "../../components/EchartsModule";

const { Title } = Typography;
const { useToken } = theme;

const PageDemo = () => {
  const { token } = useToken();
  const { colorText, colorBgContainer, colorBorder } = token;
  const [autoPlay, setAutoPlay] = useState(true)
  const options = {
    textStyle: {
      color: colorText,
    },
    title: {
      text: '饼图程序调用高亮示例',
      left: 'center',
      textStyle: {
        color: colorText,
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      confine: true,
      className: 'echart-tooltip-zIndex',
      backgroundColor: colorBgContainer,
      borderColor: colorBorder,
      textStyle: {
        color: colorText,
      },
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      textStyle: {
        color: colorText,
      },
    }
  }

  const seriesData = [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      lable: {
        textStyle: {
          color: colorText,
        },
      },
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
        }
      }
    }
  ]
  const changeDate = () => {
    setAutoPlay(!autoPlay)
  }

  return (
    <div>
      <Title level={3}>5、改变 autoPlay 开始结束动画，使用 autoPlay 改变的好处是可以从上次暂停动画项处继续动画</Title>
      <div>
        <Button onClick={changeDate}>{ autoPlay ? '结束' : '开始' }动画</Button>
      </div>
      <div className="w-full h-80">
        <EchartsModule options={options} seriesData={seriesData} autoPlay={autoPlay}></EchartsModule>
      </div>
    </div>
  );
};

export default PageDemo;
