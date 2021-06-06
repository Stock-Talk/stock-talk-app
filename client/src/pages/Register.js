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
import './Register.css';
import Logo from '../images/Logo.png';

////////*** NEED TO SET UP FILES AND INSTALL DEPENDENCIES TO IMPORT ********
// import { useMutation } from '@apollo/react-hooks';
// import Auth from "../utils/auth";
// import { ADD_USER } from "../utils/mutations";

function Register(props) {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  // const [addUser] = useMutation(ADD_USER);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   const mutationResponse = await addUser({
  //     variables: {
  //       username: user.username,
  //       email: user.email,
  //       password: user.password,
  //       confirmPassword: user.confirmPassword,
  //     },
  //   });
  //   const token = mutationResponse.data.addUser.token;
  //   Auth.login(token);
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
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
          <Header as='h2' color='teal' textAlign='center' id='hdrtitle'>
            <Image src={Logo} /> Create your account
          </Header>
          {/* unquote {register} */}
          <Form onSubmit='{register}' size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                name='username'
                placeholder='Username'
                value={user.username}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                name='email'
                placeholder='E-mail address'
                value={user.email}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='password'
                placeholder='Password'
                type='password'
                value={user.password}
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='confirmpassword'
                placeholder='Confirm Password'
                type='password'
                value={user.confirmPassword}
                onChange={handleChange}
              />

              <Button color='teal' fluid size='large' id='registerbtn'>
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to='/login'>Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Register;
