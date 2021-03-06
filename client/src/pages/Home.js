import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../utils/queries';

import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Feed from '../components/AllPostFeed';
import CreatePost from '../components/CapturePost';
import PostCard from '../components/SinglePost';
import './Home.css';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);
  return (
    <div>
      <Grid celled='internally' stackable>
        <Grid.Row className='section-header'>
          <Grid.Column floated='right' className='recent-activity' width={16}>
            <Header className='page-title' textAlign='center'>
              Recent Activity
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className='section-content'>
          <Grid.Column floated='right' className='feed home-feed' width={16}>
            {/* Button to create post in PostForm component */}
            <CreatePost />

            {/* Feed component */}
            <Feed />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};


export default Home;

//  <div>
//       <Grid celled='internally' stackable>
//         <Grid.Row className='section-header'>
//           <Grid.Column floated='right' className='recent-activity' width={16}>
//             <Header className='page-title' textAlign='center'>
//               Recent Activity
//             </Header>
//           </Grid.Column>
//         </Grid.Row>

//         <Grid.Row className='section-content'>
//           <Grid.Column floated='right' className='feed home-feed' width={16}>
//             {/* Button to create post in PostForm component */}
//             <CreatePost />

//             {/* Feed component */}
//             <Feed />
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </div>


// {/* <main>
//       <div className='flex-row justify-space-between'>
//         <div className='col-12 mb-3'>
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <PostCard posts={posts} title="Recent Post(s)..." />
//           )}
//         </div>
//       </div>
//     </main> */}