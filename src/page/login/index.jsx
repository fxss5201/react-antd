import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useLocalStorageState, useMount } from 'ahooks';
import { addPrefixName } from './../../utils/index';

const LoginIndex = () => {
  const [isValidate, setIsValidate] = useState(false)
  const [localLoginInfo, setLocalLoginInfo] = useLocalStorageState(addPrefixName('loginInfo'));

  const [form] = Form.useForm()
  useMount(() => {
    if (localLoginInfo && localLoginInfo.remember) {
      form.setFieldsValue({
        username: localLoginInfo.username,
        password: localLoginInfo.password,
        remember: localLoginInfo.remember
      })
    } else {
      form.setFieldsValue({
        remember: localLoginInfo.remember
      })
    }
  })

  const { t, i18n } = useTranslation();
  i18n.on('languageChanged', (lng) => {
    if (isValidate) form.validateFields();
  })

  const onFinish = (values) => {
    setLocalLoginInfo({
      username: values.username,
      password: values.password,
      remember: values.remember,
    })
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
        <Input prefix={<UserOutlined className="text-gray-400" />} placeholder={t('Username')} />
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
        <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder={t('Password')} />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{t('Remember me')}</Checkbox>
        </Form.Item>

        <Link className="float-right" to="/login/password">{t('Forgot password')}</Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full" onClick={() => setIsValidate(true)}>{t('Log in')}</Button>
        <div className='mt-3'>{t('Or')} <Link to="/login/register">{t('register now!')}</Link></div>
      </Form.Item>
    </Form>
  );
}

export default LoginIndex;
