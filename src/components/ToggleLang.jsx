import MyIcon from '../components/MyIcon';
import { useSelector, useDispatch } from 'react-redux';
import { useLocalStorageState } from 'ahooks';
import { changeLocale } from '../store/locale';
import { addPrefixName, getColorPrimary } from './../utils/index';

const ToggleLang = ({addClass}) => {
  const colorPrimary = getColorPrimary();
  const [, setLocaleStorage] = useLocalStorageState(addPrefixName('locale'));
	const locale = useSelector(state => state.locale.value);
	const dispatch = useDispatch();
	const changeLocaleEvent = (val) =>  {
		dispatch(changeLocale(val));
		setLocaleStorage(val);
	};

  return (
    <div className={`flex items-center cursor-pointer ${addClass}`} onClick={() => changeLocaleEvent(locale === 'zhCN' ? 'enGb' : 'zhCN')}>
      <MyIcon type={locale === 'zhCN' ? 'icon-zhongyingwenqiehuan-zhongwen' : 'icon-zhongyingwenqiehuan-yingwen' } className='text-24' style={{color: colorPrimary}} />
      <span className='ml-1'>{locale === 'zhCN' ? '中文' : 'English' }</span>
    </div>
  )
}

export default ToggleLang;
