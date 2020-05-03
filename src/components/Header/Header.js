import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Caretdown from '../../../../tolani/PostIt/src/components/Caretdown/Caretdown';

// import {Link} from "react-router-dom";
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const Header = () => {
  return (
    <div>
      <div style={{ position: 'absolute', top: '0px', right: '30px' }}>
        <Dropdown style={{ marginRight: '80px' }}>
          <div
            className=''
            data-inverted=''
            data-tooltip='Group Options'
            data-position='left center'
          >
            <Dropdown.Toggle
              variant='success'
              id='dropdown-basic'
              style={{
                backgroundColor: 'white',
                color: 'black',
                outline: 'none',
                border: '0',
                fontSize: '25px',
                boxShadow: 'none',
              }} >
              </Dropdown.Toggle>
            <Caretdown/>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
