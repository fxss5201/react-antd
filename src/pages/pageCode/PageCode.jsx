import React from 'react';
import CodeHighlighter from '../../components/CodeHighlighter';
import { Typography } from 'antd';
import CodeDemo from './CodeDemo';
import { Codes } from './Codes';

const { Title } = Typography;


const PageCode = () => {
  return (
    <div>
      <Title>react-syntax-highlighter</Title>
      <Title level={2} style={{ marginTop: '0.5em' }}>安装：</Title>
      <CodeHighlighter lang='sh'>
        {'npm install react-syntax-highlighter --save'}
      </CodeHighlighter>
      <Title level={2} style={{ marginTop: '0.5em' }}>例子：</Title>
      <CodeDemo></CodeDemo>
      <Title level={2} style={{ marginTop: '0.5em' }}>代码渲染封装组件：</Title>
      <CodeHighlighter>
        {Codes}
      </CodeHighlighter>
    </div>
  )
};
export default PageCode;