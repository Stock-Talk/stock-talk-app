import React from 'react';
import { Feed } from 'semantic-ui-react';
import Card from './NewsCard';

//// TODO:
//    if my profile page return all my posts
//    else my home page return all posts

function NewsFeed() {
  // this returns the feed structure with the card component based on whether the user is in home page or profile page

  // Card filter logic in card component

  return (
    <Feed align='center'>
      <Feed.Event>
        <Feed.Content>
          {/*  PostCard Component*/}
          <Card />
          <Card />
          <Card />
          <Card />
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default NewsFeed;
