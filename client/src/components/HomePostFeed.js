import React from 'react';
import { Feed } from 'semantic-ui-react';
import PostCard from './PostCard';

//// TODO:
//    add logic pull all single user posts return userFeed

function PostFeed() {
  // const userFeed = userFeed;

  if (true) {
    return (
      <Feed align='center'>
        <Feed.Event>
          <Feed.Content>
            {/*  PostCard Component*/}
            <PostCard />
            <PostCard />
            <PostCard />
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default PostFeed;
