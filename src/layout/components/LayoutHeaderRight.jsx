import { Dropdown, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setUserInfo } from '../../store/userInfo';
import { addPrefixName } from '../../utils/index';
import config from '../../config/index';
import ToggleLang from '../../components/ToggleLang';
import ToggleFullscreen from '../../components/ToggleFullscreen';
import DocsLink from '../../components/DocsLink';

const LayoutHeaderRight = ({userInfo}) => {
  const topMenuItems = [
		{
			key: 'logout',
			label: '退出登录',
		}
	];
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const onTopMenuItemsEvent = ({ key }) => {
		if (key === 'logout') {
			Cookies.remove(addPrefixName('accessToken'));
			window.localStorage.removeItem(addPrefixName('tabs'));
			dispatch(setUserInfo({
				name: '',
				Header: '',
				access: []
			}))
			navigate('/login');
		}
	}

  return <>
    {config.isShowToggleLang && <ToggleLang className="text-gray-400 hover:text-white" />}
		{userInfo.name && <Dropdown arrow placement="bottom" menu={{
      theme: 'dark',
      items: topMenuItems,
      onClick: onTopMenuItemsEvent,
    }}>
      <div className='ml-4 text-gray-400 hover:text-white cursor-pointer flex items-center'>
        <Avatar src={userInfo.header} size={24} />
        <span className='ml-1'>{userInfo.name}</span>
      </div>
    </Dropdown>}
    <ToggleFullscreen className='ml-4' />
    <DocsLink className='ml-4' />
  </>
}

export default LayoutHeaderRight;
