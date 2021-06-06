import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import './SinglePost.css';
import AddComment from './CaptureComment';


import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../utils/queries';


const PostCard = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);
  console.log(posts[0] + " line 20 of SinglePost")
  const PostList = ({ posts }) => {
    if (!posts.length) {
      return <h3>No Posts Yet</h3>;
    }
  }
  return (
    <div>
    {posts &&
      posts.map(post => (
        <Card.Group centered>
          <Card fluid>
            <Card.Content>
              <Card.Header>{post.username}</Card.Header>
              <Card.Meta>{post.createdAt}</Card.Meta>
              <Card.Description name='text'>{post.postText}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              {/* Capture Comment Component*/}
              <AddComment  
                key={post._id}
                username={post.username}
                createdAt = {post.createdAt}
                postText = {post.postText}
                comments = {post.comments}
                />

              {/* RETURN THESE IF USERNAME MATCHES USERNAME PROPERTY */}
              {/* EDIT Post Button prompt capture post and edit text */}
              <Button className='edit-btn' size='medium'>
                Edit
                {/* <Icon className='pencil' color='white' /> */}
              </Button>
              {/* DELETE Post Button */}
              <Button className='delete-btn' size='medium'>
                <Icon className='trash' color='white' />
              </Button>
            </Card.Content>
          </Card>
        </Card.Group>
      ))
    }
    </div>
  );
};

export default PostCard;
