import MyIcon from '../components/MyIcon';
import { useSelector, useDispatch } from 'react-redux';
import { useLocalStorageState } from 'ahooks';
import { Popover, theme, Typography } from 'antd';
import classNames from 'classnames';
import { changeLocale } from '../store/locale';
import { addPrefixName } from './../utils/index';

const { Text } = Typography;
const { useToken } = theme;

const ToggleLang = ({className='', textClassName=''}) => {
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
      <div className={classNames(`flex items-center cursor-pointer`, className)} onClick={() => changeLocaleEvent(locale === 'zhCN' ? 'enGb' : 'zhCN')}>
        <MyIcon type={locale === 'zhCN' ? 'icon-zhongyingwenqiehuan-zhongwen' : 'icon-zhongyingwenqiehuan-yingwen' } className='text-24' style={{color: colorPrimary}} />
        <Text className={classNames('ml-1', textClassName)}>{locale === 'zhCN' ? '中文' : 'English' }</Text>
      </div>
    </Popover>
  )
}

export default ToggleLang;
