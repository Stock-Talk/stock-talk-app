import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Login.css';
import Logo from '../images/Logo.png';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from "../utils/mutations"
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
    
      Auth.login(data.login.token)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Grid
        textAlign='center'
        style={{ height: '70vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center' id='loginheader'>
            <Image src={Logo} /> Log-in to your account
          </Header>

          <Form size='large' onSubmit={handleFormSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Email'
                name='email'
                type='email'
                value={formState.email}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                name='password'
                type='password'
                value={formState.password}
                onChange={handleChange}
              />

              <Button color='teal' fluid size='large' id='loginbutton'>
                Login
              </Button>
            </Segment>
          </Form>

          <Message>
            New to us? <Link to='/register'>Sign Up</Link>
          </Message>
          {error && <div>Please enter valid username and password combination.</div>}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Login;
