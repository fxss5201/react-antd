import { useFullscreen } from 'ahooks';
import { Popover, Typography } from 'antd';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import classNames from 'classnames';

const { Text } = Typography;

const ToggleFullscreen = ({className=''}) => {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.documentElement);
  const classlist = 'text-20 cursor-pointer text-gray-300 hover:text-white';

  return (
    <Popover placement="bottom" content={isFullscreen ? '退出全屏' : '设置全屏'}>
      <div className={classNames(className, 'flex items-center')}>
        <Text onClick={toggleFullscreen} className={classNames('leading-none', classlist)}>
          {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        </Text>
      </div>
    </Popover>
  )
}

export default ToggleFullscreen;
