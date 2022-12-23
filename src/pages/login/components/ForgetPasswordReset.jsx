import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Form,
  Input
} from 'antd';
import { useUnmount } from 'ahooks';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

const ForgetPasswordReset = ({ onFinishReset }) => {
  const [isValidate, setIsValidate] = useState(false);
  const [form] = Form.useForm();

  const { t, i18n } = useTranslation();
  i18n.on('languageChanged', (lng) => {
    if (isValidate) form.validateFields();
  })
  useUnmount(() => {
    i18n.off('languageChanged');
  })

  return (
    <Form
      form={form}
      {...formItemLayout}
      name="ForgetPassword"
      size="large"
      onFinish={onFinishReset}
      scrollToFirstError
      style={{ width: '800px', marginTop: '100px' }}
    >
      <Form.Item
        name="password"
        label={ t('Password') }
        rules={[
          {
            required: true,
            message: t('Please input your Password!'),
          },
        ]}
      >
        <Input.Password placeholder={t('Please input your Password!')} allowClear />
      </Form.Item>

      <Form.Item
        name="confirm"
        label={ t('Confirm Password') }
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: t('Please confirm your password!'),
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(t('The two passwords that you entered do not match!')));
            },
          }),
        ]}
      >
        <Input.Password placeholder={t('Please confirm your password!')} allowClear />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={() => setIsValidate(true)} className="w-full">
          { t('Reset password') }
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgetPasswordReset;
