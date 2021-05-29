import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

import PostCard from '../components/PostCard.js';

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      username
      createdAt
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        body
        username
        createdAt
      }
    }
  }
`;

function Home() {
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);
  posts ? console.log(posts) : console.log('no data found');

  return (
    <Grid columns={1}>
      <GridRow className='page-title'>
        <h2>Recent Posts</h2>
      </GridRow>
      <GridRow>
        {loading ? (
          <h2>Loading posts... </h2>
        ) : (
          posts &&
          posts.map((post) => (
            <GridColumn key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </GridColumn>
          ))
        )}
      </GridRow>
    </Grid>
  );
}

export default Home;
