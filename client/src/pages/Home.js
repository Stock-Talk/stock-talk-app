// import React from 'react';
// import PostCard from '../components/PostCard.js';
// import { Grid, Transition } from 'semantic-ui-react';

// function Home() {
//   return (
//     <Grid columns={3}>
//       <Grid.Row className='page-title'>
//         <h1>Recent Posts</h1>
//       </Grid.Row>
//       <Grid.Row>
//         <Transition.Group>
//           <Grid.Column key='{post.id}' style={{ marginBottom: 20 }}>
//             <PostCard post='{post}' />
//           </Grid.Column>
//         </Transition.Group>
//       </Grid.Row>
//     </Grid>
//   );
// }

// import React from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import PostCard from '../components/PostCard.js';
// import { Grid, Transition } from 'semantic-ui-react';
// import { ALL_POSTS_QUERY } from '../graphql/queries';
// import PostCard from '../components/PostCard.js';

// function Home() {
//   const { user } = useContext(AuthContext);
//   const {
//     loading,
//     data: { getPosts: posts },
//   } = useQuery(ALL_POSTS_QUERY);

//   return (
//     <Grid columns={3}>
//       <Grid.Row className='page-title'>
//         <h1>Recent Posts</h1>
//       </Grid.Row>
//       <Grid.Row>
//         {user}
//         {loading ? (
//           <h1>Loading posts..</h1>
//         ) : (
//           <Transition.Group>
//             {posts &&
//               posts.map((post) => (
//                 <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
//                   <PostCard post={post} />
//                 </Grid.Column>
//               ))}
//           </Transition.Group>
//         )}
//       </Grid.Row>
//     </Grid>
//   );
// }

export default Home;
