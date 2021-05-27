import React from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

function TestPostCardII() {
  return (
    <Card fluid>
      <Card.Content>
        <Image
          flaoted='right'
          size='mini'
          src='https://semantic-ui.com/images/avatar/large/jenny.jpg'
        ></Image>
        <Card.Header> Jenny Hess </Card.Header>
        <Card.Meta> MM/DD/YYYY</Card.Meta>
        <Card.Description>This is the post body</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right'>
          <Button color='pink'>
            <Icon name='thumbs up outline icon' />
          </Button>
        </Button>
        <Label basic color='red' pointing='left'>
          42
        </Label>
      </Card.Content>
    </Card>
  );
}

export default TestPostCardII;
