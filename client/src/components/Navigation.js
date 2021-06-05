import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Navigation.css';

// if window is main page return mainNav
// if window is login or register return Nav
// if user is logged in return userNav

const Navigation = () => {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substring(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  if (path === '/home') {
    // if user is logged in return userNav
    return (
      <div className='container' style={{ marginTop: 30 }}>
        <Menu pointing secondary size='large' color='red'>
          <Menu.Item
            className='nav-link'
            name='Home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to='/home'
          >
            {/* <Icon name='home' /> */}
          </Menu.Item>

          <Menu.Item
            className='nav-link'
            name='profile'
            active={activeItem === 'profile'}
            onClick={handleItemClick}
            as={Link}
            to='/profile'
          >
            {/* <Icon name='user outline' /> */}
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              className='nav-link'
              name='search'
              active={activeItem === 'search'}
              onClick={handleItemClick}
              as={Link}
              to='/search'
            >
              <Icon name='search' />
            </Menu.Item>

            <Menu.Item
              className='nav-link'
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
              as={Link}
              to='/'
            >
              {/* <Icon name='sign-out' /> */}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  } else if (path === '/') {
    return (
      // if window is main page return mainNav
      <div className='container' style={{ marginTop: 30 }}>
        <Menu pointing secondary size='large' color='red'>
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
  } else {
    // if window is login or register return Nav
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
};

export default Navigation;
