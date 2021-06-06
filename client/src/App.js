import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

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
    <Router>
      <Container>
        <Navigation />
        <Route exact path='/' component={Main} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/profile:username' component={Profile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/about' component={About} />
      </Container>
    </Router>
  );
}

export default App;
