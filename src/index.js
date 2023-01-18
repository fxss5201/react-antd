import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/tailwind.css';
import 'antd/dist/reset.css';
import './style/index.css';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';
import { addPrefixName } from './utils';
import Cookies from 'js-cookie';
import { setUserInfo } from './store/userInfo';
import './i18n';
// import reportWebVitals from './reportWebVitals';

const accessToken = Cookies.get(addPrefixName('accessToken'));

let access = ['normal'];
if (accessToken === 'middle') {
  access = ['middle'];
} else if (accessToken === 'admin') {
  access = ['normal', 'middle', 'admin'];
}

if (accessToken) {
  store.dispatch(setUserInfo({
    name: 'fxss',
    access
  }));
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
