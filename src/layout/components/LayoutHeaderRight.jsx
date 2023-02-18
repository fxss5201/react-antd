import { Dropdown, Avatar, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setUserInfo } from '../../store/userInfo';
import { addPrefixName } from '../../utils/index';
import config from '../../config/index';
import ToggleLang from '../../components/ToggleLang';
import ToggleFullscreen from '../../components/ToggleFullscreen';
import DocsLink from '../../components/DocsLink';

const { Text } = Typography;

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
    {config.isShowToggleLang && <ToggleLang textClassName="text-gray-300 hover:text-white" />}
		{userInfo.name && <Dropdown arrow placement="bottom" menu={{
      theme: 'dark',
      items: topMenuItems,
      onClick: onTopMenuItemsEvent,
    }}>
      <div className='ml-4 cursor-pointer flex items-center'>
        <Avatar src={userInfo.header} size={24} />
        <Text className='ml-1 text-gray-300 hover:text-white'>{userInfo.name}</Text>
      </div>
    </Dropdown>}
    <ToggleFullscreen className='ml-4' />
    <DocsLink className='ml-4' />
  </>
}

export default LayoutHeaderRight;
