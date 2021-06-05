import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Register.css'
import Logo from '../Logo.png'
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


function Register() {
  // Record what the user is typing in to the inputs
  // Record those inputs in state
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [addUser, { error }] = useMutation(ADD_USER);


  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center' id='hdrtitle'>
          <Image src={Logo} /> Create your account
      </Header>
        <Form onSubmit={handleFormSubmit} size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              name='email'
              type='email'
              id='email'
              value={formState.email}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              name='username'
              type='username'
              id='username'
              value={formState.username}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              name='password'
              type='password'
              id='password'
              value={formState.password}
              onChange={handleChange}
            />

            <Button color='teal' fluid size='large' id='registerbtn'>
              Register
          </Button>
          </Segment>
        </Form>
        {error && <div>Sign up failed</div>}
        <Message>
          Already have an account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>

    </Grid>
  );
}

export default Register;
// {/* <Form.Input
//               fluid
//               icon='lock'
//               iconPosition='left'
//               placeholder='Confirm Password'
//               type='password'
//               value={user.confirmPassword}
//               onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//             /> */}