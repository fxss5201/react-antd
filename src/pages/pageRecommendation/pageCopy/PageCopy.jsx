import React from 'react';
import CodeHighlighter from '../../../components/CodeHighlighter';
import { Typography } from 'antd';
import CopyDemo from './CopyDemo';
import { copyDemoCode } from './Codes';

const { Title } = Typography;

const PageCopy = () => {
  return (
    <div>
      <Title><a href="https://github.com/nkbt/react-copy-to-clipboard" target="_blank" rel="noreferrer">react-copy-to-clipboard</a></Title>
      <Title level={2} style={{ marginTop: '0.5em' }}>安装：</Title>
      <CodeHighlighter lang='sh'>
        {'npm install --save react-copy-to-clipboard'}
      </CodeHighlighter>
      <Title level={2} style={{ marginTop: '0.5em' }}>例子：</Title>
      <CopyDemo></CopyDemo>
      <Title level={2} style={{ marginTop: '0.5em' }}>例子代码：</Title>
      <CodeHighlighter lang='jsx'>
        {copyDemoCode}
      </CodeHighlighter>
    </div>
  )
};
export default PageCopy;
