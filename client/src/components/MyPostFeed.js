import React from 'react';
import { Feed } from 'semantic-ui-react';
import PostCard from './PostCard';

//// TODO:

//    add logic to pull all my posts return myFeed

function PostFeed() {
  // const myFeed = myFeed;

  if (true) {
    return (
      <Feed align='center'>
        <Feed.Event>
          <Feed.Content>
            {/*  PostCard Component*/}
            <PostCard />
            <PostCard />
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default PostFeed;
