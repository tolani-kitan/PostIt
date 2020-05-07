import React, { Component } from 'react';
import './MiddleBar.css';
import { connect } from 'react-redux';
import { addMessage } from '../../core/actions/msgActions';
import { v4 as uuidv4 } from 'uuid';
import Today  from './Date';

import Footer from '../Footer/Footer';

class MiddleBar extends Component {
  state = {
    messages: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onButtonSubmit = (e) => {
    e.preventDefault();

    const newMesssage = {
      id: uuidv4(),
      messages: this.state.messages,
    }

    if(this.state.messages === ''){
      return console.log('Type in the Textbox')
     } 
   
    this.props.addMessage(newMesssage);
    this.setState({
      messages: ''
    });
  }

  render() {
    const { messages } = this.props;
     
    return (
      <div className="main">
            
        {messages.map((message, ) => (
          
          <div className="media text-muted pt-3 msg" key={message.id}>
          <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" className="mr-2 rounded" width="32" height="32" />
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray" >
          <strong className="d-block text-gray-dark">@username</strong>
               {message.messages} 

               </p>
               <p> <Today /> </p>
               </div>
                )
                 )
              }
  
    <div className="middlefooter"><Footer onButtonSubmit={this.onButtonSubmit} handleChange={this.handleChange} /></div>
    </div>
    );
}
}

  const mapStateToProps = (state) => {
    return {
      messages: state.message.messages
    }
  }


export default connect( mapStateToProps, { addMessage})(MiddleBar);
