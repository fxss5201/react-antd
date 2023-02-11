import { LinkOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import classNames from 'classnames';


const DocsLink = ({className}) => {
  return (
    <Popover placement="bottom" content='文档地址'>
      <a className={classNames(className, 'flex', 'a')} href='https://fxss5201.github.io/react-antd-docs' target='_blank' rel="noreferrer">
        <LinkOutlined />
        <span className='ml-1'>文档地址</span>
      </a>
    </Popover>
  )
}

export default DocsLink;
