import React from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../utils/queries';

import PostCard from '../components/PostCard';
// import TestPostCardII from '../components/TestPostCard2.js';
// import TestPostCardIII from '../components/TestPostCard3.js';
// import TestPostCardIV from '../components/TestPostCard4';

// function Home() {
//   const {
//     loading,
//     data: { getPosts: posts },
//   } = useQuery(FETCH_POSTS_QUERY);

//   data ? console.log(data) : console.log('no data found');

//   return (
//     <Grid columns={2}>
//       <GridRow>
//         <h2>Recent Posts</h2>
//       </GridRow>
//       <GridRow>
//         {loading ? (
//           <h2>Loading posts... </h2>
//         ) : (
//           posts &&
//           posts.map((post) => (
//             <GridColumn key={post.id} style={{ marginBottom: 20 }}>
//               <PostCard post={post} />
//             </GridColumn>
//           ))
//         )}
//       </GridRow>
//     </Grid>
//   );
// }

// const FETCH_POSTS_QUERY = gql`
//   {
//     id
//     body
//     createdAt
//     username
//     likeCount
//     likes [
//       username]
//     commentCount
//     comments {
//       id
//       body
//       username
//       createdAt
//       likeCount
//     }
//   }
// `;


function Home() {
  const { loading, data } = useQuery(QUERY_POSTS);
const posts = data?.posts || [];
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostCard posts={posts} title="Recent Post(s)..." />
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
{/* <Grid columns={2}>
      <GridRow>
        <h2>Recent Posts</h2>
      </GridRow>
      <GridRow>
        <h2>Loading posts... </h2>
        <GridColumn key='1' style={{ marginBottom: 20 }}>
          <PostCard />
          
        </GridColumn>
      </GridRow>
    </Grid> */}