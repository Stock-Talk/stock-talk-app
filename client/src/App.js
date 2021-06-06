import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Main from './pages/Main';
import Search from './pages/Search';
import Navigation from './components/Navigation';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: 'http://localhost:3001/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Container>
        <Navigation />
        <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/about' component={About} />

        <Route component={NoMatch} />
        </Switch>
      </Container>
    </Router>
    </ApolloProvider>
  );
}

export default App;
