import { LinkOutlined } from '@ant-design/icons';
import { Popover, theme } from 'antd';
import classNames from 'classnames';

const { useToken } = theme;

const DocsLink = ({className}) => {
  const { token } = useToken();
  const { colorPrimary } = token;
  return (
    <Popover placement="bottom" content='文档地址'>
      <a className={classNames(className, 'flex', 'a')} href='https://fxss5201.github.io/react-antd-docs' target='_blank' rel="noreferrer" style={{color: colorPrimary}}>
        <LinkOutlined />
        <span className='ml-1'>文档地址</span>
      </a>
    </Popover>
  )
}

export default DocsLink;
