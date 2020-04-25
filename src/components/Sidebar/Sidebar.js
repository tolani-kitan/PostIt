import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import './Sidebar.css';
import { Link } from 'react-router-dom';
// import Stutern from '../Stutern/Stutern';
// import Groups from '../Groups/Groups';
// import Logout from '../Logout/Logout';




const Sidebar = () => {


  return (


    <div className="sidenav">
      <h4 className="firstdiv nonlink">Stuternly $ image</h4>
      <h4 className="secdiv nonlink">Groups $ icon</h4>
      <Link to='/#' className="thirddiv nonlink">Logout</Link>
      <h4 className="forthdiv nonlink" > Icon$PostIt</h4>
    </div>


  );

}


export default Sidebar;
