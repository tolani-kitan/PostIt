import React, { Component } from 'react'
// connect your component to your redux
import { connect } from 'react-redux'
// import the action itself 
import { addGroup } from '../actions/groupActions'
import { addUser } from '../actions/userAction'


class Check extends Component {
  componentDidMount() {
    this.props.getUsers()
  }



  render() {
    return (
      <div>

      </div>
    )
  }
}


// map state to proops
const mapStateToProps = (state) => ({
  groups: state.group.groups,
  users: state.user.users
})

export default connect(mapStateToProps, {
  addGroup,
  addUser
})(Check);