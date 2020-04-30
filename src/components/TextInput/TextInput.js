import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
import "./TextInput.css";

const TextInput = () => {
  return (
    <div>
      
    
      <div className="mt3">
        <input className="pa2 input-reset ba bg-transparent w-two-thirds measure boxx" type="text" placeholder="Type your message"/>
        <button ><i className="fas fa-paper-plane"></i></button>
      </div>

 



       
      {/* <form className="text-input">
      <div className="">
    <label htmlFor="inputlg">Large input</label>
    <input className="form-control input-lg messages boxx" id="inputlg" type="text"/>
    <button ><i className="fas fa-paper-plane"></i></button>
    <i className="fas fa-paper-plane lg" style={{color:'black'}}></i>
   </div>
     
   <div className="buttonInside">
    <input placeholder="Type something" type="password"/>
    <button ><i className="fa fa-eye"></i></button>
  </div> */} */}

      {/* <input
        type="text" placeholder="type something" style={{ width: "600px", borderRadius: "20px", margin: "30px auto", padding: '10px',  outline:"none"}}
      />
        <i className="fas fa-paper-plane lg" style={{color:'black', marginLeft:"30px"}}></i>
      </form>
     

      {/* <Form> 
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
       </Form.Group>
      </Form> */}
      
    </div>
  );
};

export default TextInput;