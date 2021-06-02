import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Login.css'
import Logo from '../Logo.png'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center' id='loginheader'>
        <Image src={Logo} /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large' id='loginbutton'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to="/register">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm
