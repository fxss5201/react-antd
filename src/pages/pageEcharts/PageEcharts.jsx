import { Typography } from 'antd';
import CodeHighlighter from '../../components/CodeHighlighter';
import PageDemo1 from "./PageDemo1";
import PageDemo2 from "./PageDemo2";
import PageDemo3 from "./PageDemo3";
import PageDemo4 from "./PageDemo4";
import PageDemo5 from "./PageDemo5";
import PageDemo6 from "./PageDemo6";
import PageDemo7 from "./PageDemo7";
import PageDemo8 from "./PageDemo8";
import { EchartsModuleCode } from './Codes';

const { Title } = Typography;

const PageEcharts = () => {

  return (
    <div>
      <Title>echarts</Title>
      <Title level={2} style={{ marginTop: '0.5em' }}>安装：</Title>
      <CodeHighlighter lang='sh'>
        {'npm install echarts --save'}
      </CodeHighlighter>
      <Title level={2} style={{ marginTop: '0.5em' }}>例子：</Title>
      <div className='w-full flex'>
        <div className='w-1/2 px-3'>
          <PageDemo1></PageDemo1>
        </div>
        <div className='w-1/2 px-3'>
          <PageDemo2></PageDemo2>
        </div>
      </div>
      <div className='w-full flex'>
        <div className='w-1/2 px-3'>
          <PageDemo3></PageDemo3>
        </div>
        <div className='w-1/2 px-3'>
          <PageDemo4></PageDemo4>
        </div>
      </div>
      <div className='w-full flex'>
        <div className='w-1/2 px-3'>
          <PageDemo5></PageDemo5>
        </div>
        <div className='w-1/2 px-3'>
          <PageDemo6></PageDemo6>
        </div>
      </div>
      <div className='w-full flex'>
        <div className='w-1/2 px-3'>
          <PageDemo7></PageDemo7>
        </div>
        <div className='w-1/2 px-3'>
          <PageDemo8></PageDemo8>
        </div>
      </div>
      <Title level={2} style={{ marginTop: '0.5em' }}>echarts组件封装：</Title>
      <CodeHighlighter lang='jsx'>
        {EchartsModuleCode}
      </CodeHighlighter>
    </div>
  );
};

export default PageEcharts;
