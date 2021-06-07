import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Feed from '../components/AllPostFeed';
import CreatePost from '../components/CapturePost';

function Profile() {
  return (
    <div>
      <Header className='page-title' textAlign='center'>
        My Activity
      </Header>

      <Grid celled='internally' stackable>
        <Grid.Row className='section-header'>
          {/* <Grid.Column
            floated='left'
            className='home-feed'
            width={3}
          ></Grid.Column> */}

          <Grid.Column className='home-feed' width={13}>
            <CreatePost />
            {/* Feed component */}
            <Feed />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Profile;

// button and feed
// return (
//   <Grid celled='internally'>
//     <Grid.Row className='section-header'>
//       <Grid.Column floated='right' className='friend' width={3}>
//         <Header textAlign='center'>friends</Header>
//       </Grid.Column>

//       <Grid.Column floated='right' className='recent-activity' width={13}>
//         <Header textAlign='center'>Recent Activity</Header>
//       </Grid.Column>
//     </Grid.Row>

//     <Grid.Row className='section-content'>
//       <Grid.Column floated='right' className='friend-list' width={3}>
//         {/* friends list here */}
//       </Grid.Column>

//       <Grid.Column floated='right' className='home-feed' width={13}>
//         {/* feed here */}
//         <Feed />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// );
