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
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// import { AuthContext } from '../../../utils/check-auth';
// import { useForm } from '../util/hooks';

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

function Register(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // const [registerUser, { loading }] = useMutation(REGISTER_USER, {
  //   update(_, { data: { register: userData } }) {
  //     context.login(userData);
  //     props.history.push('/');
  //   },
  //   onError(err) {
  //     setErrors(err.graphQLErrors[0].extensions.exceptions.errors);
  //   },
  //   variables: values,
  // });

  registerUser();

  return (
    <Grid centered style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form
          size='large'
          onSubmit={onSubmit}
          noValidate
          className={loading ? 'loading' : ''}
        >
          <Header className='form-title' style={{ marginBottom: 10 }}>
            <h1>
              <Image src='/logo.png' /> Create your account
            </h1>
          </Header>

          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              name='username'
              type='text'
              value={values.username}
              error={errors.username ? true : false}
              onChange={onChange}
            />
            <Form.Input
              fluid
              icon='envelope'
              iconPosition='left'
              placeholder='Email'
              name='email'
              type='email'
              value={values.email}
              error={errors.email ? true : false}
              onChange={onChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              name='password'
              type='password'
              value={values.password}
              error={errors.password ? true : false}
              onChange={onChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              name='confirmPassword'
              type='password'
              value={values.confirmPassword}
              error={errors.confirmPassword ? true : false}
              onChange={onChange}
            />

            <Button className='btn-submit' type='submit' fluid size='large'>
              Register
            </Button>
          </Segment>
        </Form>
        <Message className='message'>
          Already have an account?
          <Link className='hotLink' to='/login'>
            {' '}
            Login
          </Link>
        </Message>

        {Object.keys(errors).length > 0 && (
          <div className='ui error message'>
            <ul className='list'>
              {Object.values(errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </Grid.Column>
    </Grid>
  );
}

export default Register;
