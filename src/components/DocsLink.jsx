import { LinkOutlined } from '@ant-design/icons';
import classNames from 'classnames';


const DocsLink = ({className}) => {
  return (
    <a className={classNames(className, 'flex', 'a')} href='https://fxss5201.github.io/react-antd-docs' target='_blank' rel="noreferrer">
      <LinkOutlined />
      <span className='ml-1'>文档地址</span>
    </a>
  )
}

export default DocsLink;
