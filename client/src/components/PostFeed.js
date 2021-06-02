import React from 'react';
import { Feed } from 'semantic-ui-react';
import PostCard from './PostCard';

//// TODO:
//    add logic pull all single user posts return userFeed
//    add logic to pull all my posts return myFeed

function PostFeed() {
  // const userFeed = userFeed;
  // const myFeed = myFeed;

  if (true) {
    return (
      <Feed align='center'>
        <Feed.Event>
          <Feed.Content>
            <PostCard />
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  } else {
    return (
      <Feed align='center'>
        <Feed.Event>
          <Feed.Content>
            <PostCard />
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default PostFeed;
