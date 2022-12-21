import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Checkbox,
  Form,
  Input
} from 'antd';
import config from '../../config';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
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
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const [isValidate, setIsValidate] = useState(false)
  const [form] = Form.useForm();

  const { t, i18n } = useTranslation();
  i18n.on('languageChanged', (lng) => {
    if (isValidate) form.validateFields();
  })

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      {...formItemLayout}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      style={{ width: '500px' }}
    >
      <Form.Item
        name="email"
        label={ t('E-mail') }
        rules={[
          {
            type: 'email',
            message: t('The input is not valid E-mail!'),
          },
          {
            required: true,
            message: t('Please input your E-mail!'),
          },
        ]}
      >
        <Input placeholder={t('Please input your E-mail!')} allowClear />
      </Form.Item>

      <Form.Item
        name="phone"
        label={ t('Phone') }
        rules={[
          {
            required: true,
            message: t('Please input your Phone!'),
          },
          {
            pattern: config.phonePattern,
            message: t('Incorrect phone number format!'),
          },
        ]}
      >
        <Input placeholder={t('Please input your Phone!')} allowClear />
      </Form.Item>

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

      <Form.Item
        name="agreement"
        valuePropName="checked"
        {...tailFormItemLayout}
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error(t('Should accept agreement'))),
          },
        ]}
      >
        <Checkbox>
          { t('I have read the') } <Link to="">{ t('agreement') }</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={() => setIsValidate(true)} className="w-full">
          { t('Register') }
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
