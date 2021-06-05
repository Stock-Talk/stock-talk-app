import React from 'react';
import { Card } from 'semantic-ui-react';

/////// IGNORE THIS FOR NOW, DONT NEED FOR PRESENTATION
/////// TODO:
//      if post type is text return Card.Descrition with name=text !this is okay for now
//      if post type is link return Card.Descrition with name=link
//      if post type is image return Card.Descrition with name=image
//      if post type is upload return Card.Descrition with name=upload *** Future Development

function PostType() {
  if (true) {
    return (
      <Card.Description name='text'>
        POST TEXT HERE Maxime mollitia, molestiae quas vel sint commodi
        repudiandae consequuntur voluptatum laborum numquam blanditiis harum
        quisquam eius sed odit fugiat.
      </Card.Description>
    );
  } else {
    return (
      <Card.Description name='link'>
        <a href='https://www.google.com/finance/'>
          https://www.google.com/finance/
        </a>
      </Card.Description>
    );
  }
}

export default PostType;
