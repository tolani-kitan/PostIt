import React, { Component } from 'react';
import "./TextInput.css";
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addMessage } from '../../core/actions/msgActions';

class TextInput extends Component {
    // state = {
    //   messages: '',
    //   required: true
    // }

    // handleChange = (e) => {
    //   this.setState({
    //     [e.target.name]: e.target.value
    //   })
    // }

    // onButtonSubmit = (e) => {
    //   e.preventDefault();

    //   const newMesssage = {
    //     id: uuidv4(),
    //     messages: this.state.input
    //   }
    //   this.props.addMessage(newMesssage);
    //   this.setState({
    //     messages: ''
    //   })
    //   console.log(this.state.messages)
    // }

    render () {
     const { handleChange, onButtonSubmit } = this.props;
  return (
    <div>
      <div className="mt3">
        <form onSubmit={this.onButtonSubmit}>
        <input 
        onChange={this.handleChange} 
        className="pa2 input-reset ba bg-transparent w-two-thirds measure boxx" 
        name='messages'
        type="text" 
        placeholder="Type your message"
        required
        />
        <button  onClick={(e) => this.onButtonSubmit(e)} ><i className="fas fa-paper-plane"></i></button>
        </form>
      </div>
      
    </div>
  );
};
}

const mapStateToProps = (state) => ({
  messages: state.messages
})


export default connect(mapStateToProps, {addMessage })(TextInput);