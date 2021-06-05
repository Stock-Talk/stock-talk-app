import React from 'react';
import { List, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostFeed from './PostFeed';

function RecentActivity() {
  //// TODO: logic to provide username and time of most recent activity
  //// if they person has not posted set deafult to person `has not posted recently`

  return (
    <Grid stackable>
      <List className='friend-list'>
        {/* ****** set list to recent 5 *****  */}
        <List.Header as='h3'>Recent Contributors</List.Header>
        <List.Item className='list-item'>
          <Image
            avatar
            src='https://react.semantic-ui.com/images/avatar/small/lindsay.png'
          />
          <List.Content>
            <List.Header as='a'>Rachel</List.Header>
            <List.Description>Posted 12 hours ago.</List.Description>
          </List.Content>
        </List.Item>

        <List.Item className='list-item'>
          <Image
            avatar
            src='https://react.semantic-ui.com/images/avatar/small/rachel.png'
          />
          <List.Content>
            <List.Header as='a'>Lindsay</List.Header>
            <List.Description>Posted 10 hours ago.</List.Description>
          </List.Content>
        </List.Item>

        <List.Item className='list-item'>
          <Image
            avatar
            src='https://react.semantic-ui.com/images/avatar/small/matthew.png'
          />
          <List.Content>
            <List.Header as='a'>Matthew</List.Header>
            <List.Description>Posted 20 hours ago.</List.Description>
          </List.Content>
        </List.Item>

        <List.Item className='list-item'>
          <Image
            avatar
            src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'
          />
          <List.Content>
            <List.Header as='a'>Jenny Hess</List.Header>
            <List.Description>Posted 2 hours ago.</List.Description>
          </List.Content>
        </List.Item>

        <List.Item className='list-item'>
          <Image
            avatar
            src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg'
          />
          <List.Content>
            <List.Header as='a'>Veronika Ossi</List.Header>
            <List.Description>Has not posted recently</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Grid>
  );
}

export default RecentActivity;
