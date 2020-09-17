import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './styles/login.scss';

function Login(props) {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(false);

  const loginUser = (event) =>{
    event.preventDefault();
    if(email && password){
      setError(false)
      props.history.push(`/home`, {user: {email,password}})
    }else{
      setError(true)
    }
  }

  return (<div id="login">
    <Form style={{width:'700px'}}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      {error && <p> Please enter credentials!!!</p>}
      <Button onClick={loginUser} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>);
}

export default Login;
