import React  from 'react';
import "./Footer.css";
import PriorityBox from '../PriorityBox/PriorityBox';
// import { Navbar, NavbarBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';
// import TextInput from '../TextInput/TextInput';



const Footer = ({ handleChange, onButtonSubmit}) => {
  

  return (
    <div className='footer'>
     
     <div  className="priobox"><PriorityBox/></div>

     <div className="text">
       {/* <TextInput  /> */}
       <div className="mt3">
        <form onSubmit={onButtonSubmit} >
        <input 
        onChange={handleChange}
        className="pa2 input-reset ba bg-transparent w-two-thirds measure boxx" 
        name='messages'
        type="text" 
        placeholder="Type your message"
        required='required'
        />
        <button onClick={onButtonSubmit} className='btn' ><i className="fas fa-paper-plane"></i></button>
        </form>
      </div>
       </div>
        
      </div>
            
    
  );
}

export default Footer;
