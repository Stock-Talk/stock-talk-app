// import React from 'react';
// import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import { Popup } from 'semantic-ui-react';

// function PostCard() {
//   return (
//     <Card fluid>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           src='https://react.semantic-ui.com/images/avatar/large/molly.png'
//         />
//         <Card.Header>username</Card.Header>
//         <Card.Meta as='createdAt'></Card.Meta>
//         <Card.Description>postText</Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <Button user='{user}' post='{{ id, friendCount }}' />
//         <Popup content='Comment on post'>
//           <Button labelPosition='right' as={Link}>
//             <Button color='blue' basic>
//               <Icon name='comments' />
//             </Button>
//             <Label basic color='blue' pointing='left'>
//               commentCount
//             </Label>
//           </Button>
//         </Popup>
//       </Card.Content>
//     </Card>
//   );
// }
// export default PostCard;

// // import React from 'react';
// // import React, { useContext } from 'react';
// // import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
// // import { Link } from 'react-router-dom';

// // import { AuthContext } from '../utils/authContext';
// // import AddButton from './AddBtn'; replaces <Button>
// // import DeleteButton from './DeleteBtn';
// // import MyPopup from '../utils/MyPopup';

// // function PostCard({
// //   post: { body, createdAt, id, username, postText, comments, commentCount },
// // }) {
// //   const { user } = useContext(AuthContext);

// //   return (
// //     <Card fluid>
// //       <Card.Content>
// //         <Image
// //           floated='right'
// //           size='mini'
// //           src='https://react.semantic-ui.com/images/avatar/large/molly.png'
// //         />
// //         <Card.Header>{username}</Card.Header>
// //         <Card.Meta as={Link} to={`/posts/${id}`}>
// //           {moment(createdAt).fromNow(true)}
// //         </Card.Meta>
// //         <Card.Description>{postText}</Card.Description>
// //       </Card.Content>
// //       <Card.Content extra>
// //         <AddButton user='{user}' post={{ id, friendCount }} />
// //         <MyPopup content='Comment on post'>
// //           <Button labelPosition='right' as={Link} to={`/posts/${id}`}>
// //             <Button color='blue' basic>
// //               <Icon name='comments' />
// //             </Button>
// //             <Label basic color='blue' pointing='left'>
// //               {commentCount}
// //             </Label>
// //           </Button>
// //         </MyPopup>
// //         {user && user.username === username && <DeleteButton postId={id} />}
// //       </Card.Content>
// //     </Card>
// //   );
// // }

// // export default PostCard;
