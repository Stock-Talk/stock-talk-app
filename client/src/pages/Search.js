import React, { useState } from 'react';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../images/Logo.png';
import SideNav from '../components/Sidebar';
import SearchContent from '../components/SearchContent';

function sidebarReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible };
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed };
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false };
    default:
      throw new Error();
  }
}

function Search() {
  const [state, dispatch] = React.useReducer(sidebarReducer, {
    animation: 'overlay',
    direction: 'left',
    dimmed: true,
    visible: false,
  });

  const { animation, dimmed, direction, visible } = state;
  const vertical = direction === 'bottom' || direction === 'top';

  // set link pathname
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substring(1);
  const [activeItem, setActiveItem] = useState(path);

  // set event to to change `name` of link to active
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div className='container' style={{ marginTop: 30 }}>
      <Menu pointing secondary size='large' color='red'>
        {/* TEST PAGE.. WILL DELETE THIS MENU ITEM */}
        <Menu.Item
          className='sidebar-menu'
          name='Menu'
          onClick={() =>
            dispatch({ type: 'CHANGE_ANIMATION', animation: 'overlay' })
          }
        />
        <Menu.Menu position='right'>
          <Menu.Item
            className='nav-link'
            name='logout'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to='/home'
          >
            <img className='ui avatar image' src={Logo} alt='app-logo' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
        {!vertical && (
          <SideNav
            animation={animation}
            direction={direction}
            visible={visible}
          />
        )}

        <Sidebar.Pusher dimmed={dimmed && visible}>
          {/* ADD SearchContent HERE */}
          <SearchContent />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default Search;
