import { Typography, Button } from 'antd';
import { useState } from 'react';
import KeepAlive from 'react-activation';
import KeepAliveDemo from "./components/KeepAliveDemo";

const { Title } = Typography;

const PageKeepAliveComponent = () => {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  return <>
    <Title level={3}>使用缓存</Title>
    <Button onClick={() => setShow1(!show1)}>Toggle</Button>
    {show1 && <KeepAlive id='KeepAliveDemo'><KeepAliveDemo name='one' /></KeepAlive>}

    <Title level={3}>未使用缓存</Title>
    <Button onClick={() => setShow2(!show2)}>Toggle</Button>
    {show2 && <KeepAliveDemo name='two' />}
  </>
}

export default PageKeepAliveComponent;
