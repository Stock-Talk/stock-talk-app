import React from 'react';
import { Form, Header, Modal, Button, Comment } from 'semantic-ui-react';
import PostComment from './Comment';

// TODO
// Logic to submit a comment form that takes in the user input text to create a new COMMENT. send user and COMMENT body to backend
// Text area value=''

// if username matches comment username allow delete and update comment

const CommentForm = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className='comment-btn' size='medium'>
          Comment
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
          <PostComment />
          {/* Capture Comment here */}
          <Form reply>
            <Form.TextArea />
            <Button
              className='reply-btn'
              onClick='submit function'
              content='Add Reply'
              labelPosition='left'
              icon='edit'
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
