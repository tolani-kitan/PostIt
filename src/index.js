import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './core/store';
import { Provider } from 'react-redux';




ReactDOM.render(
 <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>
  </React.StrictMode>
, document.querySelector('#root'));
