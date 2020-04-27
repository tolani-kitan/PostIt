import React  from 'react';
import "./Footer.css"
import PriorityBox from '../PriorityBox/PriorityBox';
// import { Navbar, NavbarBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';
import TextInput from '../TextInput/TextInput';



const Footer = () => {

  return (
    <div className='footer'>
     
     <div  className="priobox"><PriorityBox/></div>
     <div className="text"><TextInput/></div>
        
      </div>
            
    
  );
}

export default Footer;
