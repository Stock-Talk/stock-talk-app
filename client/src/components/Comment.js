import React from 'react';
import { Comment } from 'semantic-ui-react';
// this displays the a comment based the input sent to the db

const DisplayComments = ({ key, username, createdAt, postText, comments }) => {


  return (
    <div>
      {comments &&
        comments.map(comment => (
          <Comment>
            <Comment.Content>
              <Comment.Author as='a'>{comment.username}</Comment.Author>
              <Comment.Metadata>
                <div>{comment.createdAt}</div>
              </Comment.Metadata>
              <Comment.Text>{comment.commentBody}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        ))
      }
    </div>
  );
};

export default DisplayComments;
