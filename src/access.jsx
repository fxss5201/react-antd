import React from 'react';
import { Navigate } from "react-router-dom";
import { addPrefixName } from './utils';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUserInfo } from './store/userInfo';

const withAuth = (Component) => ()=>{
  const accessToken = Cookies.get(addPrefixName('accessToken'));
  const dispatch = useDispatch();

  console.log(accessToken)

  if (accessToken) {
    dispatch(setUserInfo({
      name: 'fxss'
    }));
    return <Component />;
  } else{
    return <Navigate to="/login" />;
  }
}

export default withAuth;
