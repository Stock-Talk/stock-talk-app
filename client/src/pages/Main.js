import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Reveal } from 'semantic-ui-react';
import './Main.css';
import MainImage from '../images/Mainpage.png';
import RevealImage from '../images/fixedabout.png';

const Main = () => (
  <div>
    <Reveal animated='small fade'>
      <Reveal.Content visible>
        <Image src={MainImage} circular as={Link} to='/about' />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image src={RevealImage} circular as={Link} to='/about' />
      </Reveal.Content>
    </Reveal>
  </div>
);

export default Main;
