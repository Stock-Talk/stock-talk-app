import React from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

function TestPostCardIV() {
  return (
    <Card fluid>
      <Card.Content>
        <Image
          flaoted='right'
          size='mini'
          src='https://semantic-ui.com/images/avatar/large/jenny.jpg'
        ></Image>
        <Card.Header> Lola Garza </Card.Header>
        <Card.Meta> MM/DD/YYYY</Card.Meta>
        <Card.Description>Hi every, I am Lola</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right'>
          <Button color='pink'>
            <Icon name='thumbs up outline icon' />
          </Button>
        </Button>
        <Label basic color='red' pointing='left'>
          3
        </Label>
      </Card.Content>
    </Card>
  );
}

export default TestPostCardIV;
