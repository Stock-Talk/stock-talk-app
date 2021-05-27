import React from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

function TestPostCardIII() {
  return (
    <Card fluid>
      <Card.Content>
        <Image
          flaoted='right'
          size='mini'
          src='https://semantic-ui.com/images/avatar2/large/matthew.png'
        ></Image>
        <Card.Header>Matthew Coy</Card.Header>
        <Card.Meta> MM/DD/YYYY</Card.Meta>
        <Card.Description>Hi, I am Matt!</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right'>
          <Button color='pink'>
            <Icon name='thumbs up outline icon' />
          </Button>
        </Button>
        <Label basic color='red' pointing='left'>
          1
        </Label>
      </Card.Content>
    </Card>
  );
}

export default TestPostCardIII;
