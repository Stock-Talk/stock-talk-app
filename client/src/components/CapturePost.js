import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../utils/queries';

import { Form, TextArea, Modal, Button } from 'semantic-ui-react';

// TODO
// This is the capture form that takes in the user input text to create a post. send user and post body to backend
// Text area value=''

// if username matches post username allow delete and update post

const PostForm = () => {
  const [open, setOpen] = React.useState(false);
  const [addPost, { error }] = useMutation(ADD_POST, {
      update(cache, { data: { addPost } }) {
        try {
          // could potentially not exist yet, so wrap in a try...catch
          const { posts } = cache.readQuery({ query: QUERY_POSTS });
          cache.writeQuery({
            query: QUERY_POSTS,
            data: { posts: [addPost, ...posts] }
          });
        } catch (e) {
          console.error(e);
        }
    
        // update me object's cache, appending new thought to the end of the array
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } }
        });
      }
  });

  const [postText, setPostText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = event => {
      if (event.target.value.length <= 1000) {
          setPostText(event.target.value);
          setCharacterCount(event.target.value.length);
      }
  };

  const handleFormSubmit = async event => {
      event.preventDefault();
    
      try {
        // add thought to database
        await addPost({
          variables: { postText }
        });
    
        // clear form value
        setPostText('');
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
        <Button className='post-btn' size='medium'>
          Create a Post!
        </Button>
      }
    >
      <Modal.Header>Create a Post</Modal.Header>
      <Modal.Content Form>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            {/* why can't you type in text area */}
            <TextArea
              placeholder='What do you want to share?'
              value={postText}
              onChange={handleChange}
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
