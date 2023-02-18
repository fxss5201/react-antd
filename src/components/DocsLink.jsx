import { LinkOutlined } from '@ant-design/icons';
import { Popover, theme, Typography } from 'antd';
import classNames from 'classnames';

const { useToken } = theme;
const { Text } = Typography;

const DocsLink = ({className=''}) => {
  const { token } = useToken();
  const { colorPrimary } = token;
  return (
    <Popover placement="bottom" content='文档地址'>
      <Text className={classNames(className, 'leading-6')}>
        <a className='flex a' href='https://fxss5201.github.io/react-antd-docs' target='_blank' rel="noreferrer" style={{color: colorPrimary}}>
          <LinkOutlined />
          <span className='ml-1'>文档地址</span>
        </a>
      </Text>
    </Popover>
  )
}

export default DocsLink;
