import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, message, Tooltip } from 'antd';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';

const CodeHighlighter = ({ lang = 'javascript', children = '' }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [copied, setCopied] = useState(false);
  const onCopy = (text, result) => {
    if (result) {
      setCopied(true);
      messageApi.success({
        content: '复制成功！',
        duration: 2,
        onClose: () => {
          setCopied(false);
        }
      });
    } else {
      setCopied(false);
      messageApi.success({
        content: '复制失败！',
        duration: 2,
      });
    }
  };

  const customStyle = {
    borderRadius: '6px',
    fontSize: '14px',
    paddingTop: '22px',
    margin: 0,
  }

  return (
    <div className='relative'>
      {contextHolder}
      <div className='absolute right-1 top-1 flex items-center'>
        <span className='text-zinc-400 mr-3'>{lang}</span>
        <Tooltip title="复制代码">
          <CopyToClipboard text={children} onCopy={onCopy}>
            <Button size="small" className='opacity-80' icon={copied ? <CheckOutlined /> : <CopyOutlined /> }  />
          </CopyToClipboard>
        </Tooltip>
      </div>
      <SyntaxHighlighter language={lang} wrapLongLines showLineNumbers style={vscDarkPlus} customStyle={customStyle}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
