import React from 'react';
import { Form, TextArea, Modal, Button } from 'semantic-ui-react';

// TODO
// This is the capture form that takes in the user input text to create a post. send user and post body to backend
// Text area value=''

// if username matches post username allow delete and update post

const PostForm = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button className='post-btn' size='medium'>
          Create a Post!
        </Button>
      }
    >
      <Modal.Header>Create a Post</Modal.Header>
      <Modal.Content Form>
        <Form onSubmit='undefined'>
          <Form.Group>
            {/* why can't you type in text area */}
            <TextArea
              placeholder='What do you want to share?'
              name='postText'
              onChange='undefined'
              style={{ minHeight: 100 }}
            />
            <Button className='submit-btn' content='submit' />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          className='close-btn'
          color='gray'
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PostForm;
