import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Button, Label, Icon } from 'semantic-ui-react';

import { ADD_FRIEND } from '../utils/mutations';
import MyPopup from '../utils/MyPopup';

function AddButton({ user, username: { id, friendCount, friends } }) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (user && friends.find((friend) => friend.username === user.username)) {
      setAdded(true);
    } else setAdded(false);
  }, [user, friends]);

  const [addFriend] = useMutation(ADD_FRIEND, {
    variables: { friendId: id },
  });

  const addButton = user ? (
    added ? (
      <Button color='teal'>
        <Icon name='plus' />
      </Button>
    ) : (
      <Button color='teal' basic>
        <Icon name='plus' />
      </Button>
    )
  ) : (
    <Button as={Link} to='/login' color='teal' basic>
      <Icon name='plus' />
    </Button>
  );

  return (
    <Button as='div' labelPosition='right' onClick={addFriend}>
      <MyPopup content={added ? 'Remove' : 'Add'}>{addButton}</MyPopup>
      <Label basic color='teal' pointing='left'>
        {friendCount}
      </Label>
    </Button>
  );
}

export default AddButton;
