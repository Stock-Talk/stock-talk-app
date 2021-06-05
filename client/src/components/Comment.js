import React from 'react';
import { Comment } from 'semantic-ui-react';

function DisplayComments() {
  const [open, setOpen] = React.useState(false);
  return (
    <Comment>
      <Comment.Avatar src='/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
}

export default DisplayComments;
