import React, { Component } from 'react';

class Member extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <div className='ui raised segment'>
         <i className='user icon'></i><h5>Pellentesque</h5> 
        </div>
        <div className='ui raised segment'>
        <i className='user icon'></i><h5>habitant</h5>    
        </div>
        <div className='ui raised segment'>
        <i className='user icon'></i><h5>turpis</h5>
        </div>
      </div>
    );
  }
}

export default Member;
