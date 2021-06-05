import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';

// navigation for About page

function Nav() {
  // set page pathname
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substring(1);
  const [activeItem, setActiveItem] = useState(path);

  // set event to to change `name` of link to active
  const handleItemClick = (e, { name }) => setActiveItem(name);

  // If user is not logged in
  if (true) {
    return (
      <div className='container' style={{ marginTop: 30 }}>
        <Menu pointing secondary size='large' color='red'>
          <Menu.Item
            className='nav-link'
            name='back'
            active={activeItem === 'back'}
            onClick={handleItemClick}
            as={Link}
            to='/'
          ></Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              className='nav-link'
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
              as={Link}
              to='/login'
            />

            <Menu.Item
              className='nav-link'
              name='register'
              active={activeItem === 'register'}
              onClick={handleItemClick}
              as={Link}
              to='/register'
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Nav;
