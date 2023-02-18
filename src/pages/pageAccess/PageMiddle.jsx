import { Typography } from 'antd';

const { Paragraph } = Typography;

const PageMiddle = () => {
  return (
    <Paragraph className='h-96'>
      PageMiddle: middle权限用户可以看到该页面
    </Paragraph>
  )
}

export default PageMiddle;
