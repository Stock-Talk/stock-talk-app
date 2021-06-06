import React from 'react';
import './Main.css';
import { Image } from 'semantic-ui-react';
import AboutImage from '../images/About.png';

const AboutPage = () => (
  <div>
    <Image src={AboutImage} alt='About the application'></Image>
  </div>
);
export default AboutPage;
