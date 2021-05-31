import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';

import { useForm } from '../util/hooks';
import { USER_POSTS_QUERY } from '../utils/queries';
import { CREATE_POST } from '../utils/mutations';

function PostForm() {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: '',
  });

  const [createPost, { error }] = useMutation(CREATE_POST, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: USER_POSTS_QUERY, // CHECK THIS THE USERS POSTS AND NOT ALL POSTS FROM ALL USERS
      });
      data.getPosts = [result.data.createPost, ...data.getUserPosts];
      proxy.writeQuery({ query: USER_POSTS_QUERY, data });
      //
      values.body = ''; // CHECK THIS RENDERS OR CHANGE TO values.postText
    },
  });

  function createPostCallback() {
    createPost();
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <h2>Create a post:</h2>
        <Form.Field>
          <Form.Input
            placeholder='Hi World!'
            name='body'
            onChange={onChange}
            value={values.body}
            error={error ? true : false}
          />
          <Button type='submit' color='teal'>
            Submit
          </Button>
        </Form.Field>
      </Form>
      {error && (
        <div className='ui error message' style={{ marginBottom: 20 }}>
          <ul className='list'>
            <li>{error.graphQLErrors[0].message}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default PostForm;
