import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../utils/mutations';

import { Form, Header, Modal, Button, Icon, Comment } from 'semantic-ui-react';
import PostComment from './Comment';

// TODO
// Logic to submit a comment form that takes in the user input text to create a new COMMENT. send user and COMMENT body to backend
// Text area value=''

// if username matches comment username allow delete and update comment

const CommentForm = ({ postedId, key, username, createdAt, postText, comments }) => {
  const { currentComment } = comments;
  const [open, setOpen] = React.useState(false);
  const [commentBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT);


  const handleChange = event => {
    if (event.target.value.length <= 500) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    let postId = postedId;
    console.log(postId.postedId);
    console.log(postId);
    try {
      console.log(postId);
      console.log(commentBody);
      await addComment({
    
        variables: { commentBody, postId}
      });

      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className='comment-btn' size='medium'>
          View/Add Comment(s)
        </Button>
      }
    >
      <Modal.Header>Write your comment</Modal.Header>
      <Modal.Content Form>
        <Comment.Group>
          <Header as='h3' dividing>
            Comments
          </Header>
          {/* Display comments here */}
          <PostComment key={key}
            username={username}
            createdAt={createdAt}
            postText={postText}
            comments={comments}
          />

          {/* Capture Comment here */}
          <Form reply
            onSubmit={handleFormSubmit}
          >
            <Form.TextArea 
              value={commentBody}
              onChange={handleChange}
              placeholder="Leave your comment here..."
            />
            <Button
              className='reply-btn'
              content='Add Comment'
              labelPosition='left'
              icon='edit'
              type='submit'
            />
          </Form>
        </Comment.Group>
      </Modal.Content>
      <Modal.Actions>
        <Button className='close-btn' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CommentForm;
