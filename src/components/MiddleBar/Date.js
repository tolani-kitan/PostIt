import React, { Component } from 'react';


export default class Today extends Component {
  state={
    curTime : new Date().toLocaleString(),
  }



  render() {
    return (
    // <p>{this.state.date}</p>
    <span>{this.state.curTime}</span>
    )
  }
}  