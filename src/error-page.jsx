import { useRouteError, useNavigate } from "react-router-dom";
import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  const { t } = useTranslation();
  let subTitle = ''
  switch (error.status) {
    case 404:
      subTitle = t('404subTitle')
      break;

    case 403:
      subTitle = t('403subTitle')
      break;
  
    default:
      subTitle = t('500subTitle')
      break;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Result
        status={error.status}
        title={error.status}
        subTitle={subTitle}
        extra={<Button type="primary" onClick={() => navigate('/')}>{t('Back Home')}</Button>}
      />
    </div>
  );
}
