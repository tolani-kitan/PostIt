import React, { Component } from 'react';
import { Dropdown, Button } from 'react-bootstrap';

import AddUse from './AddUse';
import Member from './Member';




class Caretdown extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideAddUse: false,
      showHideMember: false
     
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideAddUse":
        this.setState({ showHideAddUse: !this.state.showHideAddUse });
        break;
      case "showHideMember":
        this.setState({ showHideMember: !this.state.showHideMember });
        break;
      default:
    }
  }



  render() {
    const { showHideAddUse, showHideMember } = this.state;
    return (
      
      <div>
         {showHideAddUse && <AddUse />}
        {showHideMember && <Member />}
        
        <Dropdown.Menu >

          <Dropdown.Item >
            <Button onClick={() => this.hideComponent("showHideAddUse")} style={{backgroundColor:"white", color:"black", border:"none",fontSize: '15px', margin: '10px 0'}}> <i className="plus square icon"></i>Add Users </Button>
          </Dropdown.Item>

          <Dropdown.Item >
          <Button onClick={() => this.hideComponent("showHideMember")}  style={{backgroundColor:"white", color:"black", border:"none",fontSize: '15px', margin: '10px 0'}}>  <i className='users icon'></i>Member List </Button>
          </Dropdown.Item>

        </Dropdown.Menu>
       
      </div>
    );
  }
}

export default Caretdown;
