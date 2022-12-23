import React from 'react';
import { Navigate } from "react-router-dom";
import { addPrefixName } from './utils';
import Cookies from 'js-cookie';

const withAuth = (Component) => ()=>{
  const accessToken = Cookies.get(addPrefixName('accessToken'))

  console.log(accessToken)

  if (accessToken) {
    return <Component />;
  } else{
    return <Navigate to="/login" />;
  }
}

export default withAuth;
