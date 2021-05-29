import React from 'react';
import { Button, Card, Icon, Label, Image, Comment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({
  post: { id, body, createdAt, username, likeCount, likes, commentCount },
}) {
  function likePost() {
    console.log('Post liked!');
  }
  function addCommenttoPost() {
    console.log('Comment on post!');
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          flaoted='right'
          size='mini'
          src='https://semantic-ui.com/images/avatar/large/elliot.jpg'
          style={{ marginBottom: 10 }}
        ></Image>
        <Card.Header>{username} </Card.Header>
        {/* set date to send to post */}
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body} </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* like button */}
        <Button as='div' labelPosition='right' onClick={likePost}>
          <Button color='blue'>
            <Icon name='thumbs up outline icon' />
          </Button>
          <Label basic color='blue' pointing='left'>
            {likeCount}
          </Label>
        </Button>

        {/* comment button */}
        <Button as='div' labelPosition='right' onClick={addCommenttoPost}>
          <Button color='teal'>
            <Icon name='comment alternate outline icon' />
          </Button>
          <Label basic color='green' pointing='left'>
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
