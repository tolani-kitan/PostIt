import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Dashboard from "./AppFile/Dashboard";
// import {Modal} from "react-bootstrap";


function App() {
  return (
    <div>
   <Switch>
          <Route exact path="/" component ={Signin} />
          <Route path="/signup" component = {Signup} />
          <Route path="/dashboard" component = {Dashboard} /> 
  </Switch>
    </div>
  );
}

export default App;
