import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { Button } from 'reactstrap';
// import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import './Dashboard.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MiddleBar from '../components/MiddleBar/MiddleBar';
import { Navbar  } from 'react-bootstrap';




const Dashboard = () => {
  

  return (
    <div>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="headerbackground">
  <Navbar.Brand >
    <div className="header">
      <Header />
    </div>
    </Navbar.Brand> 
   
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="togglebutton" />
  <Navbar.Collapse id="responsive-navbar-nav">
     <div className="sidebar">
          <Sidebar />
        </div>
  </Navbar.Collapse>
</Navbar>
     

      

      
       
        <div className="middlebar"><MiddleBar /></div>


        <div className="middlefooter"><Footer /></div>

     
    </div>
  );
}


export default Dashboard;
