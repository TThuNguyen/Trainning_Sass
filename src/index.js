import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import MessengerCustomerChat from 'react-messenger-customer-chat';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MessengerCustomerChat
      pageId="102076778813927"
      appId="1891428137685135"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();