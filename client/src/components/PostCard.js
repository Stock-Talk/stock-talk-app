import React from 'react';
import { Card, Image, Button, Icon, Label } from 'semantic-ui-react';
// import PostType from './PostType';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../utils/queries';

//// TODO:
//    add logic to pull date post is created
//    add logic to pull username & post body
//    add logic to pull user avatar (Later feature)

function PostCard() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);
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
                <Image
                  floated='right'
                  size='mini'
                  src='https://listimg.pinclipart.com/picdir/s/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png'
                />
                <Card.Header>{post.username}</Card.Header>

                <Card.Meta>{post.createdAt}</Card.Meta>
                {/*  PostType goes here from Component*/}
                <Card.Description name='text'>
                  {post.postText}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                {/* DONT HAVE THIS FEATURE YET */}
                {/* <Button as='div' labelPosition='right'>
              <Button color='orange'>
                <Icon className='thumbs up' />
              </Button>
              <Label as='a' basic color='orange' pointing='left'>
                48 display likeCount
              </Label>
            </Button> */}
                <Button as='div' labelPosition='right'>
                  <Button basic color='blue'>
                    <Icon className='comments' />
                  </Button>
                  <Label as='a' basic color='blue' pointing='left'>
                    {post.commentCount} Comments
              </Label>
                </Button>
              </Card.Content>
            </Card>
          </Card.Group>
        ))}
      
    </div>
  );
}

export default PostCard;
// {/* <Card.Group centered>
//       <Card fluid>
//         <Card.Content>
//           <Image
//             floated='right'
//             size='mini'
//             src='https://listimg.pinclipart.com/picdir/s/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png'
//           />
//           <Card.Header>username here</Card.Header>

//           <Card.Meta>createdAt</Card.Meta>
//           {/*  PostType goes here from Component*/}
//           <Card.Description name='text'>
//             POST TEXT HERE Maxime mollitia, molestiae quas vel sint commodi
//             repudiandae consequuntur voluptatum laborum numquam blanditiis harum
//             quisquam eius sed odit fugiat.
//             </Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//           {/* DONT HAVE THIS FEATURE YET */}
//           {/* <Button as='div' labelPosition='right'>
//               <Button color='orange'>
//                 <Icon className='thumbs up' />
//               </Button>
//               <Label as='a' basic color='orange' pointing='left'>
//                 48 display likeCount
//               </Label>
//             </Button> */}
//           <Button as='div' labelPosition='right'>
//             <Button basic color='blue'>
//               <Icon className='comments' />
//             </Button>
//             <Label as='a' basic color='blue' pointing='left'>
//               25 diplay commentCount
//               </Label>
//           </Button>
//         </Card.Content>
//       </Card>
//     </Card.Group> */}