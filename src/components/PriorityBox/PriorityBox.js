import React from 'react';
// import { Row } from 'react-bootstrap';
// import { Navbar,NavbarBrand, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./PriorityBox.css";

const PriorityBox = () => {
  return (
    <div className='messgprio'>

      
        <Row>
          <Col>
            <Button className="priority-box"variant="disabled" style={{cursor:"none"}}>Send Message priority:  </Button>
            <Button variant="outline-success" style={{padding:" 0 10px"}} >Normal</Button>
            <Button variant="outline-warning" style={{padding:"0 10px"}}>Urgent</Button>
            <Button variant="outline-danger" style={{padding:"0 10px"}}>Critical</Button> 
          </Col>
        </Row>
      
    </div>
  );
};

export default PriorityBox;
