import React, { Component } from 'react';

class AddUse extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  render() {
    return (
      <div  style={{border:"1px solid red", height:"20rem", marginTop:"10px"}}>
        <div className='ui icon input' >
        <input type='text' placeholder='' /> <i className='search icon'></i>
        </div>
      </div>
    );
  }
}

export default AddUse;
