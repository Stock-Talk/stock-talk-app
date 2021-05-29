import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Register.css'
import Logo from '../Logo.png'
function Register() {
  // Record what the user is typing in to the inputs
  // Record those inputs in state
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const register = (e) => {
    e.preventDefault();
    console.log('submitting form..', user);
    // We want to make an HTTP request to the backend to register this user
    // TODO: What route do we need to hit in order to register a user?
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center' id='hdrtitle'>
          <Image src={Logo} /> Create your account
      </Header>
        <Form onSubmit={register} size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
            />

            <Button color='teal' fluid size='large' id='registerbtn'>
              Register
          </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>

    </Grid>
  );
}

export default Register;
