import React from 'react';
import './Main.css';
import MainNav from '../components/MainNav';
import Mainpage from '../images/';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

const Main = () => (
  <div>
    <MainNav />
    <Image
      src={Mainpage}
      as={Link}
      to='./about'
      size='extra-large'
      atl='about navigation'
    />
  </div>
);

export default Main;
