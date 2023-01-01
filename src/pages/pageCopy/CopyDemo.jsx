import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { message, Button, Input, Tooltip } from 'antd';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';

const CopyDemo = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [inputStr, setInputStr] = useState('demo');
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

  return (
    <div>
      {contextHolder}
      <Input.Group compact>
        <Input
          style={{
            width: 'calc(100% - 32px)',
          }}
          defaultValue={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
        />
        <Tooltip title="复制">
          <CopyToClipboard text={inputStr} onCopy={onCopy}>
            <Button className='opacity-80' icon={copied ? <CheckOutlined /> : <CopyOutlined /> }  />
          </CopyToClipboard>
        </Tooltip>
      </Input.Group>
    </div>
  );
};

export default CopyDemo;
