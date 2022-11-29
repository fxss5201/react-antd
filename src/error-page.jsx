import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from 'antd';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div className="w-full flex items-center justify-center">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>
          <Button type="link" onClick={() => navigate('/')}>go home</Button>
        </p>
      </div>
    </div>
  );
}
