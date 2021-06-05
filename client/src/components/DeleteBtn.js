// import React, { useState } from 'react';
// import { useMutation } from '@apollo/react-hooks';
// import { Button, Confirm, Icon } from 'semantic-ui-react';

// import { DELETE_COMMENT, DELETE_POST } from '../graphql/mutations';
// import { ALL_POSTS_QUERY } from '../graphql/queries';
// import MyPopup from '../utils/MyPopup';

// function DeleteBtn({ postId, commentId, callback }) {
//   const [confirmOpen, setConfirmOpen] = useState(false);

//   const mutation = commentId ? DELETE_COMMENT : DELETE_POST;

//   const [deletePostOrMutation] = useMutation(mutation, {
//     update(proxy) {
//       setConfirmOpen(false);
//       if (!commentId) {
//         const data = proxy.readQuery({
//           query: ALL_POSTS_QUERY, // CHECK THIS IS THE RIGHT QUERY TO RENDER ALL USERS POSTS
//         });
//         data.getPosts = data.getPosts.filter((p) => p.id !== postId);
//         proxy.writeQuery({ query: ALL_POSTS_QUERY, data });
//       }
//       if (callback) callback();
//     },
//     variables: {
//       postId,
//       commentId,
//     },
//   });
//   return (
//     <>
//       <MyPopup content={commentId ? 'Delete comment' : 'Delete post'}>
//         <Button
//           as='div'
//           color='red'
//           floated='right'
//           onClick={() => setConfirmOpen(true)}
//         >
//           <Icon name='trash' style={{ margin: 0 }} />
//         </Button>
//       </MyPopup>
//       <Confirm
//         open={confirmOpen}
//         onCancel={() => setConfirmOpen(false)}
//         onConfirm={deletePostOrMutation}
//       />
//     </>
//   );
// }

// export default DeleteBtn;
