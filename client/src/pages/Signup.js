import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../Logo.png";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center" id="hdrtitle">
          <Image src={Logo} /> Create your account
        </Header>
        <Form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="******"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
          <Button color="teal" fluid size="large" id="registerbtn">
            Register
          </Button>
        </Form>
        <Message>
          Already have an account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Signup;
