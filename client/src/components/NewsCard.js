import React from 'react';
import { Card, Image, Button, Icon, Label } from 'semantic-ui-react';
import './PostCard.css';
import CommentForm from './CommentForm';
import Comments from './Comments';
import './PostCard.css';
//// TODO:
//    add logic to pull date post is created
//    add logic to pull username & post body
//    add logic to pull user avatar (Later feature)

//    for each post object in request to backend generate a card

function NewsCard() {
  const [open, setOpen] = React.useState(false);
  return (
    <Card.Group centered>
      <Card fluid>
        <Card.Content>
          {/* dont have backend logic for avatar Yet */}
          {/* <Image
            floated='right'
            size='mini'
            src='https://listimg.pinclipart.com/picdir/s/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png'
          /> */}
          <Card.Header>Article Title</Card.Header>
          <Card.Meta>articleDate</Card.Meta>
          <Card.Description name='text'>
            Maxime mollitia, molestiae quas vel.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>Link</Card.Content>
      </Card>
    </Card.Group>
  );
}

export default NewsCard;
