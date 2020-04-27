import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import './Sidebar.css';
import { Link } from 'react-router-dom';
// import Stutern from '../Stutern/Stutern';
// import Groups from '../Groups/Groups';
// import Logout from '../Logout/Logout';
import {Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUser } from '../../core/actions/userAction';
import { addGroup } from '../../core/actions/groupActions';

// import {addUser} from '';
// import { combineReducers } from 'redux'




class Sidebar extends React.Component{
constructor(){
  super()
  this.state={
    show:false,
  }
}

// componentDidMount(){
//   console.log({groups})
	
// }

handleModal(){
  this.setState({show:!this.state.show})
}

handleGroup(){
  this.setState(console.log("working"))
}

render(){
  const {groups} = this.props
  return (


    <div className="sidenav">
      <h4 className="firstdiv nonlink">Stuternly $ image</h4>
      <h4 className="secdiv nonlink d-flex justify-content-between align-items-center ">Groups<i className="fas fa-plus-circle fa-lg" onClick={()=>{this.handleModal()}}></i></h4>
       
      {/* <ul>
          {
            colors.map((color) => (
              <li key={color.id}> </li>
          
      </ul>   */}
 
       <p>Pls select a color:</p>
        <ul>
          {
            groups.map((group) => (
              <li key={group.id}>
              </li>
            ))
          }
        </ul> 
     




      <Modal show={this.state.show} onHide={()=>this.handleModal()}>
       <Modal.Header closeButton >Create a group</Modal.Header>
       <Modal.Body>
         <input type="text" placeholder="Name of Group?" />
         <button className="btn btn-outline-secondary" type="button">Create Group</button>
       </Modal.Body>
      </Modal>

      
      <button onClick={()=>{this.handleGroup()}} >+</button>
      <Link to='/#' className="thirddiv nonlink">Logout</Link>
      <h4 className="forthdiv nonlink" > <i className="fas fa-paper-plane"></i>PostIt</h4>
    </div>


  );

}



}
  

const mapStateToProps = (state) => ({
  groups: state.group.groups,
  users: state.user.users
})

export default connect(mapStateToProps, {addGroup,addUser})(Sidebar);

