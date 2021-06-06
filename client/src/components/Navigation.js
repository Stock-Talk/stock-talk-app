import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Auth from '../utils/auth';

const Navigation = () => {
  const logout = (event) => {
    event.preventDefault();

    Auth.logout();
  };

  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substring(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  // if user is logged in return profile, search, logout
  return (
    <div className='container' style={{ marginTop: 30 }}>
      <Menu pointing secondary size='large' color='red'>
        {Auth.loggedIn() ? (
          <>
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
              {/*<Icon name='user outline' />*/}
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
                {/* <Icon name='search' /> */}
              </Menu.Item>

              <Menu.Item
                className='nav-link'
                name='logout'
                active={activeItem === 'logout'}
                onClick={(handleItemClick, logout)}
                as={Link}
                to='/'
              >
                {/* <Icon name='sign-out' /> */}
              </Menu.Item>
            </Menu.Menu>
          </>
        ) : (
          // if user not logged in display home, login, register
          <>
            <Menu.Item
              className='nav-link'
              name='home'
              active={activeItem === 'home'}
              onClick={handleItemClick}
              as={Link}
              to='/'
            >
              {/* <Icon name='home' /> */}
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item
                className='nav-link'
                name='login'
                active={activeItem === 'login'}
                onClick={handleItemClick}
                as={Link}
                to='/login'
              >
                {/* <Icon name='sign-in' /> */}
              </Menu.Item>

              <Menu.Item
                className='nav-link'
                name='register'
                active={activeItem === 'register'}
                onClick={handleItemClick}
                as={Link}
                to='/register'
              />
            </Menu.Menu>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Navigation;
