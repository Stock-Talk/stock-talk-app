import React from 'react';
import { Feed } from 'semantic-ui-react';
import Post from './SinglePost';

//// TODO:
//    for every post object fetch from back end render post card

//    if  profile page return all  post associated with my username
//    else return all posts from all users

function PostFeed() {
  return (
    <Feed align='center'>
      <Feed.Event>
        <Feed.Content>
          {/*  SinglePost Component*/}
          <Post />
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default PostFeed;
