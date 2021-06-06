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

////////*** NEED TO SET UP FILES AND INSTALL DEPENDENCIES TO IMPORT ********
// import { useMutation } from '@apollo/react-hooks';
// import { LOGIN } from "../utils/mutations"
// import Auth from "../utils/auth";

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  //   const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //     try {
    //       const mutationResponse = await login({ variables: { username: formState.username, password: formState.password } })
    //       const token = mutationResponse.data.login.token;
    //       Auth.login(token);
    //     } catch (e) {
    //       console.log(e)
    //     }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
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
                placeholder='Username'
                name='username'
                type='text'
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                name='password'
                type='password'
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

          {/* {error ? (
          <Message className='error-message'>
            Please make sure username and password valid.
          </Message>
        ) : null} */}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Login;
