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
import { Link, useHistory } from 'react-router-dom';
import './Register.css';
import Logo from '../images/Logo.png';

import { useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

const Register = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // code to send user to home page after submiting register form
  let history = useHistory();
  function handleClick() {
    history.push('/home');
  }

  return (
    <div>
      <Grid
        textAlign='center'
        style={{ height: '70vh' }}
        verticalAlign='middle'
      >
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
                name='username'
                placeholder='Username'
                value={formState.username}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                name='email'
                placeholder='E-mail address'
                value={formState.email}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='password'
                placeholder='Password'
                type='password'
                value={formState.password}
                onChange={handleChange}
              />

              <Button
                color='teal'
                fluid
                size='large'
                id='registerbtn'
                onClick={handleClick}
              >
                Register
              </Button>
            </Segment>
          </Form>
          {error && <div>Sign up failed</div>}
          <Message>
            Already have an account? <Link to='/login'>Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Register;
