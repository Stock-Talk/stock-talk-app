import React, { useState } from "react";
import { Card, Image, Button, Icon, Label } from "semantic-ui-react";
import PostType from "../PostType";
import { useMutation } from "@apollo/react-hooks";
import { ADD_THOUGHT } from "../../utils/mutations";
import { QUERY_THOUGHTS, QUERY_ME } from "../../utils/queries";

const ThoughtForm = () => {
  const [thoughtText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addThought({
        variables: { thoughtText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card.Group centered>
      <Card fluid>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://listimg.pinclipart.com/picdir/s/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png"
          />
          <Card.Header>username here</Card.Header>
          <Card.Meta>createdAt</Card.Meta>
          {/*  insert PostType here... see component for details */}
          <PostType />
        </Card.Content>
        <Card.Content extra>
          <Button as="div" labelPosition="right">
            <Button color="orange">
              <Icon className="thumbs up" />
            </Button>
            <Label as="a" basic color="orange" pointing="left">
              48 display likeCount
            </Label>
          </Button>
          <Button as="div" labelPosition="right">
            <Button basic color="blue">
              <Icon className="comments" />
            </Button>
            <Label as="a" basic color="blue" pointing="left">
              25 diplay commentCount
            </Label>
          </Button>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default ThoughtForm;
