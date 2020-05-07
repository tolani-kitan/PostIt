import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import './Sidebar.css';
import { Link } from 'react-router-dom';
// import Stutern from '../Stutern/Stutern';
// import Groups from '../Groups/Groups';
// import Logout from '../Logout/Logout';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUser } from '../../core/actions/userAction';
import { addGroup } from '../../core/actions/groupActions';
import { addMessage } from '../../core/actions/msgActions';



// import {addUser} from '';
// import { combineReducers } from 'redux'




class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
      groupname: ''
    }
  }

  mySubmitHandler = (e) => {
    e.preventDefault()
    const { groups } = this.props
    let Details = {
      id: groups.length + 1,
      messages: '',
      groupMessage: [],
      groupId: '',
      groupName: this.state.groupname
    };
    console.log(Details)
    this.props.addGroup(Details)
    this.setState({
      show: false
    })
   // this.props.history.push('/dashboard')
  }

  handleModal() {
    this.setState({ show: !this.state.show })
  }

  // handleGroup() {
  //   this.setState()
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    const { groups } = this.props
    return (


      <div className="sidenav">
        <h4 className="firstdiv nonlink">Stuternly <i className="far fa-user-circle fa-lg"></i></h4>
        <h4 className="secdiv nonlink d-flex justify-content-between align-items-center ">Groups<i className="fas fa-plus-circle fa-lg" onClick={() => { this.handleModal() }}></i></h4>


      
        <ul>
          {
            groups.map((group) => (
              <li className='group-list' key={group.id}>
                {group.groupName}
              </li>
            ))
          }
        </ul>



        <div>
          <form onSubmit={this.mySubmitHandler}>
            <Modal show={this.state.show} onHide={() => this.handleModal()}>
              <Modal.Header closeButton >Create a group</Modal.Header>
              <Modal.Body>
                <input className="pa2 input-reset ba bg-transparent w-50 measure input-box"npm type="text" placeholder="Name of Group?" name="groupname" 
                
                onChange={this.handleChange} />
                <button  onClick={(e) => this.mySubmitHandler(e)} className="btn btn-outline-secondary" type="button">Create Group</button >

              </Modal.Body>
            </Modal>
          </form>
        </div>

        <Link to='/#' className="thirddiv nonlink">Logout</Link>
        <h4 className="forthdiv nonlink" > <i className="fas fa-paper-plane"></i>PostIt</h4>
      </div>


    );

  }


}


const mapStateToProps = (state) => ({
  groups: state.group.groups,
  users: state.user.users,
})

export default connect(mapStateToProps, { addGroup, addUser, addMessage })(Sidebar);