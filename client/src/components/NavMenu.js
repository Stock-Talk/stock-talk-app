import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  // loggedIn Menu
  return (
    <div>
      <div className='ui secondary pointing menu'>
        <Link className='ui item' to='/home'>
          Home
        </Link>
        <Link className='ui item' to='/profile'>
          Profile
        </Link>
        <div className='right menu'>
          <Link className='right item' to='/'>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

// const NavMenu = () => {
//   if (Auth.loggedIn) {
//     return (
//       <div>
//         <div class='ui secondary pointing menu'>
//           <Link class='ui item' to='/myhome'>
//             Home
//           </Link>
//   <Link class='ui item' to='/profile'>
//    Profile
//  </Link>
//           <div class='right menu'>
//

//             <Link class='right item' to='/'>
//               Logout
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <div class='ui secondary pointing menu'>
//           <Link class='ui item' to='/'>
//             Home
//           </Link>
//           <div class='right menu'>
//             <Link class='ui item' to='/login'>
//               Login
//             </Link>
//             <Link class='right item' to='/register'>
//               Register
//             </Link>
//           </div>
//         </div>
//         <div class='ui segment'>
//           <image>Image here</image>
//         </div>
//       </div>
//     );
//   }
// };

export default NavMenu;
