import React from 'react';
import { Navigate } from "react-router-dom";
import { useCookieState } from 'ahooks';
import { addPrefixName } from './utils';

const withAuth = (Component) => ()=>{
  const [accessToken,] = useCookieState(addPrefixName('accessToken', {
    defaultValue: '',
    expires: (() => new Date(+new Date() + 10 * 1000))(),
  }));

  console.log(accessToken)

  if (accessToken) {
    return <Component />;
  } else{
    return <Navigate to="/login" />;
  }
}

export default withAuth;
