import React from 'react';
import { Card, Image, Button, Icon, Label } from 'semantic-ui-react';
import './SinglePost.css';
import AddComment from './CaptureComment';
import Comments from './Comment';

//// TODO:
//    add logic to pull date post is created
//    add logic to pull username & post body
//    add logic to pull user avatar (Later feature)

//    for each post object in request to backend generate a card

function PostCard() {
  const [open, setOpen] = React.useState(false);
  return (
    <Card.Group centered>
      <Card fluid>
        <Card.Content>
          <Card.Header>username here</Card.Header>
          <Card.Meta>createdAt</Card.Meta>
          <Card.Description name='text'>POST TEXT BODY</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* Capture Comment */}
          <AddComment />

          {/* RETURN THESE IF USERNAME MATCHES USERNAME PROPERTY */}
          {/* EDIT Post Button prompt capture post and edit text */}
          <Button className='edit-btn' size='medium'>
            Edit
            {/* <Icon className='pencil' color='white' /> */}
          </Button>
          {/* DELETE Post Button */}
          <Button className='delete-btn' size='medium'>
            <Icon className='trash' color='white' />
          </Button>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}

export default PostCard;
