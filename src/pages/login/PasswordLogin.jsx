import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorageState, useMount, useUnmount } from 'ahooks';
import { addPrefixName, encryptFn, decryptFn } from './../../utils/index';
import Cookies from 'js-cookie';

const PasswordLogin = ({ activeKey }) => {
  const [isValidate, setIsValidate] = useState(false);
  const [localLoginInfo, setLocalLoginInfo] = useLocalStorageState(addPrefixName('loginInfo'));

  const [form] = Form.useForm()
  useMount(() => {
    if (localLoginInfo) {
      form.setFieldsValue({
        username: localLoginInfo.username,
        password: decryptFn(localLoginInfo.password),
        remember: localLoginInfo.remember
      })
    }
  })
  // useEffect(() => {
  //   form.resetFields()
  // }, [form, activeKey])

  const { t, i18n } = useTranslation();
  i18n.on('languageChanged', (lng) => {
    if (isValidate) form.validateFields();
  })
  useUnmount(() => {
    i18n.off('languageChanged');
  })

  const navigate = useNavigate();
  const onFinish = (values) => {
    setLocalLoginInfo({
      username: values.username,
      password: encryptFn(values.password),
      remember: values.remember,
    })
    Cookies.set(addPrefixName('accessToken'), 'accessToken123', { expires: 7 })
    message.success(t('登陆成功'));
    navigate('/');
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      initialValues={{
        remember: true,
      }}
      form={form}
      onFinish={onFinish}
      size="large"
      name="login"
      className="w-80"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: t('Please input your Username!'),
          },
        ]}
      >
        <Input prefix={<UserOutlined className="text-gray-400" />} placeholder={t('Username')} allowClear />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: t('Please input your Password!'),
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder={t('Password')} allowClear />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{t('Remember me')}</Checkbox>
        </Form.Item>

        <Link className="float-right a" to="/login/password">{t('Forgot password')}</Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full" onClick={() => setIsValidate(true)}>{t('Log in')}</Button>
        <div className='mt-3'>{t('Or')} <Link to="/login/register" className="a">{t('register now!')}</Link></div>
      </Form.Item>
    </Form>
  );
}

export default PasswordLogin;
