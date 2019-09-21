import React from "react";
import { Card } from "semantic-ui-react";

const CharacterCard = props => {
  return (
    <Card className="card">
      <Card.Content>
        <Card.Header>Name: {props.value.name}</Card.Header>
        <Card.Description>Gender: {props.value.gender}</Card.Description>
        <Card.Description>Status: {props.value.status}</Card.Description>
        <Card.Description>Species: {props.value.species}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
