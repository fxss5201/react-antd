import MyIcon from '../components/MyIcon';
import { useSelector, useDispatch } from 'react-redux';
import { useLocalStorageState } from 'ahooks';
import { Popover, theme } from 'antd';
import { changeLocale } from '../store/locale';
import { addPrefixName } from './../utils/index';

const { useToken } = theme;

const ToggleLang = ({addClass}) => {
  const { token } = useToken();
  const { colorPrimary } = token;
  const [, setLocaleStorage] = useLocalStorageState(addPrefixName('locale'));
	const locale = useSelector(state => state.locale.value);
	const dispatch = useDispatch();
	const changeLocaleEvent = (val) =>  {
		dispatch(changeLocale(val));
		setLocaleStorage(val);
	};

  return (
    <Popover placement="bottom" content={locale === 'zhCN' ? '中文/English' : 'English/中文'}>
      <div className={`flex items-center cursor-pointer ${addClass}`} onClick={() => changeLocaleEvent(locale === 'zhCN' ? 'enGb' : 'zhCN')}>
        <MyIcon type={locale === 'zhCN' ? 'icon-zhongyingwenqiehuan-zhongwen' : 'icon-zhongyingwenqiehuan-yingwen' } className='text-24' style={{color: colorPrimary}} />
        <span className='ml-1'>{locale === 'zhCN' ? '中文' : 'English' }</span>
      </div>
    </Popover>
  )
}

export default ToggleLang;
