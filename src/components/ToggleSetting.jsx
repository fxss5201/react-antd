import { Popover, Typography, Drawer, Radio, Divider, Button  } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { SketchPicker } from 'react-color';
import cloneDeep from 'lodash.clonedeep';
import { changeThemeShow, changeTheme } from '../store/themeInfo';
import { addPrefixName } from '../utils';
import config from '../config';

const { Text, Title } = Typography;

const ToggleSetting = ({className=''}) => {
  const classlist = 'text-20 cursor-pointer text-gray-300 hover:text-white';
  const themeInfo = useSelector(state => state.themeInfo.value);
  const themeInfoShow = useSelector(state => state.themeInfo.show);
  const themeAlgorithm = [
    {
      value: 'defaultAlgorithm',
      name: '默认算法',
    },
    {
      value: 'darkAlgorithm',
      name: '暗色算法',
    },
    {
      value: 'compactAlgorithm',
      name: '紧凑算法',
    },
  ];
  const dispatch = useDispatch();
  const toggleSettingShow = () => {
    dispatch(changeThemeShow(true));
  }
  const toggleSettingClose = () => {
    dispatch(changeThemeShow(false));
  }
  const onChangeAlgorithm = (e) => {
    dispatch(changeTheme({
      ...themeInfo,
      algorithm: e.target.value,
    }));
  }
  const onChangeColor = (color) => {
    dispatch(changeTheme({
      ...themeInfo,
      token: {
        ...themeInfo.token,
        colorPrimary: color,
      },
    }));
  }
  const saveThemeToLocal = () => {
    window.localStorage.setItem(addPrefixName('theme'), JSON.stringify(themeInfo));
    toggleSettingClose();
  }
  const resetThemeToLocal = () => {
    const configTheme = cloneDeep(config.theme)
    dispatch(changeTheme(configTheme));
    setTimeout(() => {
      window.localStorage.setItem(addPrefixName('theme'), JSON.stringify(configTheme));
      toggleSettingClose();
    }, 0)
  }

  return (
    <>
      <Popover placement="bottom" content='设置主题'>
        <div className={classNames(className, 'flex items-center')}>
          <Text onClick={toggleSettingShow} className={classNames('leading-none', classlist)}>
            <SettingOutlined />
          </Text>
        </div>
      </Popover>
      <Drawer
        title="设置主题"
        placement="right"
        open={themeInfoShow}
        onClose={toggleSettingClose}
        footer={
          <>
            <Button type="primary" onClick={saveThemeToLocal}>保存至本地</Button>
            <Button onClick={resetThemeToLocal} className='ml-2'>重置为默认主题</Button>
          </>
        }
      >
        <Title level={5}>主题算法</Title>
        <Radio.Group defaultValue={themeInfo.algorithm} value={themeInfo.algorithm} buttonStyle="solid" onChange={onChangeAlgorithm}>
          {themeAlgorithm.map(x => (<Radio.Button key={x.value} value={x.value}>{x.name}</Radio.Button>))}
        </Radio.Group>
        <Divider />
        <Title level={5}>主题色值</Title>
        <SketchPicker color={themeInfo.token.colorPrimary} onChange={(color) => onChangeColor(color.hex)} />
      </Drawer>
    </>
  )
}

export default ToggleSetting;