import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Form,
  Input,
} from 'antd';
import { useCountDown, useUnmount } from 'ahooks';
import config from '../../../config';

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

const ForgetPasswordVerification = ({ onFinishVerification }) => {
  const [isValidate, setIsValidate] = useState(false);
  const [form] = Form.useForm();

  const { t, i18n } = useTranslation();
  i18n.on('languageChanged', (lng) => {
    if (isValidate) form.validateFields();
  })
  useUnmount(() => {
    i18n.off('languageChanged');
  })
  
  const [isGetVerificationLoading, setIsGetVerificationLoading] = useState(false);
  const [targetDate, setTargetDate] = useState();
  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      setIsGetVerificationLoading(false);
    },
  });
  const getVerification = () => {
    form.validateFields(['Phone']).then(() => {
      setTargetDate(Date.now() + 60 * 1000);
      setIsGetVerificationLoading(true);
    })
  };

  return (
    <Form
      form={form}
      {...formItemLayout}
      name="ForgetPassword"
      size="large"
      onFinish={onFinishVerification}
      scrollToFirstError
      style={{ width: '800px', marginTop: '100px' }}
    >
      <Form.Item
        name="Phone"
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
        name="Verification"
        label={ t('Verification') }
        rules={[
          {
            required: true,
            message: t('Please input your Verification!'),
          },
          {
            pattern: config.verificationPattern,
            message: t('Incorrect format of verification number!')
          },
        ]}
      >
        <Input placeholder={t('Verification')} addonAfter={
          isGetVerificationLoading ? `${Math.round(countdown / 1000)}s` : <div className='cursor-pointer' onClick={getVerification}>{t('Get verification code')}</div>
        } allowClear />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={() => setIsValidate(true)} className="w-full">
          { t('Next step') }
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgetPasswordVerification;
