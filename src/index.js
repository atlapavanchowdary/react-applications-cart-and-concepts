import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CookiesProvider } from 'react-cookie';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import reportWebVitals from './reportWebVitals';
// import UseSortComponent from './Component expls/CustomHook/CustomHookDemo3';
import SentenceComponent from './Component expls/CustomHook/SentenceComponent4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <CookiesProvider>
        <UserLoginDemo />
      </CookiesProvider> */}
      <SentenceComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
