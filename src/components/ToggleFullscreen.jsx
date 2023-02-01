import { useFullscreen } from 'ahooks';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';

const ToggleFullscreen = () => {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.documentElement);
  const classlist = 'text-20 text-gray-400 hover:text-white cursor-pointer';

  return (
    <span className='flex items-center'>
      {isFullscreen ? <FullscreenExitOutlined onClick={toggleFullscreen} className={classlist} /> : <FullscreenOutlined onClick={toggleFullscreen} className={classlist} />}
    </span>
  )
}

export default ToggleFullscreen;
