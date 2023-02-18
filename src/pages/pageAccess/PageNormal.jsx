import { Typography } from 'antd';

const { Paragraph } = Typography;

const PageNormal = () => {
  return (
    <Paragraph className='h-96'>
      PageNormal: normal权限用户可以看到该页面
    </Paragraph>
  )
}

export default PageNormal;
