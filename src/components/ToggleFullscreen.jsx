import { useFullscreen } from 'ahooks';
import { Popover } from 'antd';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';

const ToggleFullscreen = () => {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.documentElement);
  const classlist = 'text-20 text-gray-400 hover:text-white cursor-pointer';

  return (
    <Popover placement="bottom" content={isFullscreen ? '退出全屏' : '设置全屏'}>
      <div className='flex items-center' style={{height: '64px'}}>
        {isFullscreen ? <FullscreenExitOutlined onClick={toggleFullscreen} className={classlist} /> : <FullscreenOutlined onClick={toggleFullscreen} className={classlist} />}
      </div>
    </Popover>
  )
}

export default ToggleFullscreen;
