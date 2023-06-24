import React from 'react';
import { Card } from 'react-bootstrap';

const Comment = ({ comment }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{comment.username}</Card.Subtitle>
        <Card.Text>{comment.comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
