import React from 'react';
import './Main.css';

import MainImage from '../images/Mainpage.png';
import { Link } from 'react-router-dom';
import { Image, Reveal } from 'semantic-ui-react';
import RevealImage from '../images/fixedabout.png';

// const Main = () => <Image src={Aboutpng} as={Link} to='/about' />;

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
