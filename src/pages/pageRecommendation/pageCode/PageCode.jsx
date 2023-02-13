import React from 'react';
import CodeHighlighter from '../../../components/CodeHighlighter';
import { Typography } from 'antd';
import CodeDemo from './CodeDemo';
import { Codes } from './Codes';
import { getColorPrimary } from '../../../utils';

const { Title, Text, Link  } = Typography;


const PageCode = () => {
  const colorPrimary = getColorPrimary();
  return (
    <div>
      <Title><a href="https://github.com/react-syntax-highlighter/react-syntax-highlighter" target="_blank" rel="noreferrer">react-syntax-highlighter</a></Title>
      <Text>
        <Link href="https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/" target="_blank" style={{color: colorPrimary}}>官方实例</Link>
      </Text>
      <Title level={2} style={{ marginTop: '0.5em' }}>安装：</Title>
      <CodeHighlighter lang='sh'>
        {'npm install react-syntax-highlighter --save'}
      </CodeHighlighter>
      <Title level={2} style={{ marginTop: '0.5em' }}>例子：</Title>
      <CodeDemo></CodeDemo>
      <Title level={2} style={{ marginTop: '0.5em' }}>代码渲染封装组件：</Title>
      <CodeHighlighter lang='jsx'>
        {Codes}
      </CodeHighlighter>
    </div>
  )
};
export default PageCode;