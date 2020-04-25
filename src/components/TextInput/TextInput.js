import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';


const TextInput = () => {
  return (
    <div>
      <input
        type="texst" placeholder="type something" style={{ width: "600px", borderRadius: "20px", margin: "30px auto", padding: '10px',  outline:"none"}}
      />
    </div>
  );
};

export default TextInput;