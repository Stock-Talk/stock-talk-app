import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../utils/authContext';

function NavMenu() {
  // when user is loggedin
  const { user, profile, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  // home as default path
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  // when follow path of setactiveitems
  const [activeItem, setActiveItem] = useState(path);
  // click handler
  const handleItemClick = (e, { name }) => setActiveItem(name);

  // if user is logged in show userhome, profile, and logout
  const navBar = user ? (
    <Menu pointing secondary size='massive' color='black'>
      <Menu.Item name={user.username} active as={Link} to='/' />
      <Menu.Item name={user.username} active as={Link} to={profile} />

      <Menu.Menu position='right'>
        <Menu.Item name='logout' onClick={logout} />
      </Menu.Menu>
    </Menu>
  ) : (
    // if user is logged out show home, login, and register
    <Menu pointing secondary size='massive' color='black'>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to='/'
      />

      <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to='/login'
        />
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to='/register'
        />
      </Menu.Menu>
    </Menu>
  );

  return navBar;
}

export default NavMenu;
