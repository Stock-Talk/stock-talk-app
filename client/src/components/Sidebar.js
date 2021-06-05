import React, { useState } from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

//import SearchModal from './SearchModal'

const SideNav = ({ animation, direction, visible }) => {
  // set page pathname
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substring(1);
  const [activeItem, setActiveItem] = useState(path);

  // set event to to change `name` of link to active
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      icon='labeled'
      inverted
      vertical
      visible={visible}
      width='thin'
    >
      <Menu.Item
        className='nav-icon'
        name='profile'
        active={activeItem === 'profile'}
        onClick={handleItemClick}
        as={Link}
        to='/profile'
      >
        <Icon name='user' />
        Profile
      </Menu.Item>

      <Menu.Item
        className='nav-icon'
        name='news'
        active={activeItem === 'news'}
        onClick={handleItemClick}
        as={Link}
        to='/news'
      >
        <Icon name='chart line' />
        News Trends
      </Menu.Item>

      <Menu.Item
        className='nav-icon'
        name='search'
        active={activeItem === 'search'}
        // onClick={handleItemClick} ADD MODAL to search
        as={Link}
        to='/search'
      >
        <Icon name='search' />
        Search
      </Menu.Item>

      <Menu.Item
        className='nav-icon'
        name='calendar'
        active={activeItem === 'calendar'}
        onClick={handleItemClick}
        as={Link}
        to='/calendar'
      >
        <Icon name='calendar alternate outline' />
        Calendar
      </Menu.Item>

      <Menu.Item
        className='nav-icon'
        name='team'
        active={activeItem === 'team'}
        onClick={handleItemClick}
        as={Link}
        to='/team'
      >
        <Icon name='group' />
        Team
      </Menu.Item>

      <Menu.Item
        className='nav-icon'
        name='logout'
        active={activeItem === 'logout'}
        onClick={handleItemClick}
        as={Link}
        to='/'
      >
        <Icon name='sign-out alternate' />
        Logout
      </Menu.Item>
    </Sidebar>
  );
};

export default SideNav;
