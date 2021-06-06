import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
/* import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http'; */

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Main from './pages/Main';
import Search from './pages/Search';
import Navigation from './components/Navigation';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: 'http://localhost:3001/graphql'
});

/* const httpLink = createHttpLink({ uri: 'http://localhost:3001' });

const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() }); */

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Main from './pages/Main';
import Search from './pages/Search';
import Navigation from './components/Navigation';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <Navigation />
          <Route exact path='/' component={Main} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/about' component={About} />
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;