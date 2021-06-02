import React from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
<<<<<<< HEAD
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

=======
// import { Link } from 'react-router-dom';
// import moment from 'moment';

// function PostCard({
//   post: { id, body, createdAt, username, likeCount, likes, commentCount },
// }) {
//   return (
//     <Card fluid>
//       <Card.Content>
//         <Image
//           flaoted='right'
//           size='mini'
//           src='https://semantic-ui.com/images/avatar/large/elliot.jpg'
//         ></Image>
//         <Card.Header>{username} Ellio Fu</Card.Header>
//         <Card.Meta as={Link} to={`/posts/${id}`}>
//           {moment(createdAt).fromNow(true)} Metadata
//         </Card.Meta>
//         <Card.Description>{body} post body here</Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <Button as='div' labelPosition='right'>
//           <Button color='pink'>
//             <Icon name='thumbs up outline icon' />
//           </Button>
//         </Button>
//         <Label basic color='red' pointing='left'>
//           {likeCount}2,003
//         </Label>
//       </Card.Content>
//     </Card>
//   );
// }

function PostCard() {
>>>>>>> c581d674a331e262ab029dc0553939c2855ccb9e
  return (
    <Card fluid>
      <Card.Content>
        <Image
          flaoted='right'
          size='mini'
          src='https://semantic-ui.com/images/avatar/large/elliot.jpg'
<<<<<<< HEAD
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
=======
        ></Image>
        <Card.Header> Elliot Fu</Card.Header>
        <Card.Meta> MM/DD/YYYY</Card.Meta>
        <Card.Description>post body here</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right'>
          <Button color='pink'>
            <Icon name='thumbs up outline icon' />
          </Button>
        </Button>
        <Label basic color='red' pointing='left'>
          15
        </Label>
>>>>>>> c581d674a331e262ab029dc0553939c2855ccb9e
      </Card.Content>
    </Card>
  );
}

export default PostCard;
