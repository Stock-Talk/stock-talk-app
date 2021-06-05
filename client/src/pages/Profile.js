import React from 'react';
import { Grid, Image, Message } from 'semantic-ui-react';
import { Redirect, useParams } from 'react-router-dom';
import Nav from '../components/UserNav';
////////*** NEED TO SET UP FILES AND INSTALL DEPENDENCIES TO IMPORT ********

import PostFeed from '../components/MyPostFeed';
import PostForm from '../components/PostForm';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { ADD_FRIEND } from '../utils/mutations';
// import Auth from '../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();

  // const [addFriend] = useMutation(ADD_FRIEND);
  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // const user = data?.me || data?.user || {};

  // // Redirect to profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Redirect to='/profile' />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }

  // const handleClick = async () => {
  //   try {
  //     await addFriend({
  //       variables: { id: user._id },
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div>
      <Nav />
      <Grid celled stackable centered>
        {/* Viewing {userParam ? `${user.username}'s` : 'your'} profile. */}
        <h2>Your Profile</h2>
        <Grid.Row>
          <Grid.Column className='top-left' width={3}>
            {/* <RecentActivity /> */}
            recent activity
          </Grid.Column>
          <Grid.Column className='center-top' width={3}>
            <PostForm />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className='bottom-left' width={3}></Grid.Column>
          <Grid.Column className='center-bottom' width={10}>
            {/* PostFeed for all my posts */}
            <PostFeed />
          </Grid.Column>
          <Grid.Column className='bottom-right' width={3}>
            {/* import friends list here - comment out while i work on component  */}
            {/* <FriendList /> */}
            Friends/Team members (what's the min?)
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Profile;
