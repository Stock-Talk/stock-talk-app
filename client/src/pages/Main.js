import React from 'react';
import './Main.css'
import Mainpage from '../images/Mainpage.png'
import { Image } from 'semantic-ui-react'

const Main = () => (
    <Image
        src={Mainpage}
        as='a'
        size='extra-large'
        href='/login'
        target='_blank'
    />
)


export default Main;