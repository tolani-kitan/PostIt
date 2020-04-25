import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

  import 'bootstrap/dist/css/bootstrap.min.css';
import App from './AppFile/App';


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.querySelector('#root'));
