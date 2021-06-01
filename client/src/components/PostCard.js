import React from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
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
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://semantic-ui.com/images/avatar/large/elliot.jpg"
        ></Image>
        <Card.Header> Elliot Fu</Card.Header>
        <Card.Meta> MM/DD/YYYY</Card.Meta>
        <Card.Description>post body here</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right">
          <Button color="pink">
            <Icon name="thumbs up outline icon" />
          </Button>
        </Button>
        <Label basic color="red" pointing="left">
          15
        </Label>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
