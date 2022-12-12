import React, { useEffect, useState } from 'react';
import { SafetyCertificateOutlined, MobileOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useCountDown } from 'ahooks';

const VerificationLogin = ({ activeKey }) => {
  const [isValidate, setIsValidate] = useState(false)

  const [form] = Form.useForm()
  useEffect(() => {
    form.resetFields();
    setTargetDate(undefined);
    setIsGetVerificationLoading(false);
  }, [form, activeKey])

  const { t, i18n } = useTranslation();
  i18n.on('languageChanged', (lng) => {
    if (isValidate) form.validateFields();
  })

  const [isGetVerificationLoading, setIsGetVerificationLoading] = useState(false);
  const [targetDate, setTargetDate] = useState();
  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      setIsGetVerificationLoading(false);
    },
  });

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const getVerification = () => {
    form.validateFields(['Phone']).then(() => {
      setTargetDate(Date.now() + 60 * 1000);
      setIsGetVerificationLoading(true);
    })
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
        name="Phone"
        rules={[
          {
            required: true,
            message: t('Please input your Phone!'),
          },
        ]}
      >
        <Input prefix={<MobileOutlined className="text-gray-400" />} placeholder={t('Phone')} />
      </Form.Item>
      <Form.Item className='mb-0'>
        <div className='flex items-center justify-center'>
          <Form.Item
            name="Verification"
            rules={[
              {
                required: true,
                message: t('Please input your Verification!'),
              },
            ]}
            className='flex-auto'
          >
            <Input prefix={<SafetyCertificateOutlined className="text-gray-400" />} placeholder={t('Verification')} />
          </Form.Item>
          <Form.Item className='flex-auto ml-3 flex-grow-0'>
            <Button disabled={isGetVerificationLoading} onClick={getVerification}>{isGetVerificationLoading ? `${Math.round(countdown / 1000)}s` : t('Get verification code')}</Button>
          </Form.Item>
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full" onClick={() => setIsValidate(true)}>{t('Log in')}</Button>
        <div className='mt-3 clear-both'>
          <Link className="float-left" to="/login/register">{t('register now!')}</Link>
          <Link className="float-right" to="/login/password">{t('Forgot password')}</Link>
        </div>
      </Form.Item>
    </Form>
  );
}

export default VerificationLogin;
