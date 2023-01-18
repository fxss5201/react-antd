import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Result } from 'antd';

const PageResult = ({
  status = '',
  title = '',
  subTitle = ''
}) => {
  const navigate = useNavigate();
  return (
    <Result
      status={status}
      title={title}
      subTitle={subTitle}
      extra={<Button type="primary" onClick={() => {navigate('/')}}>首页</Button>}
    />
  )
}

export default PageResult;
