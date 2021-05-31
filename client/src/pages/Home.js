import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
// import { POSTS_QUERY } from '../utils/queries';
// import { ADD_FRIEND } from '../utils/mutations';
import PostCard from '../components/PostCard.js';

function Home() {
  return (
    <Grid columns={1}>
      <GridRow className='page-title'>
        <h2>Recent Posts</h2>
      </GridRow>
      <GridRow>
        <GridColumn style={{ marginBottom: 20 }}>
          <PostCard />
        </GridColumn>
      </GridRow>
    </Grid>
  );
}

// function Home() {
//   const {
//     loading,
//     data: { posts },
//   } = useQuery(POSTS_QUERY);
//   posts ? console.log(posts) : console.log('no data found');
//   return (
//     <Grid columns={1}>
//       <GridRow className='page-title'>
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

export default Home;
