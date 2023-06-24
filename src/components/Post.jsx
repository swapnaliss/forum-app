import React, { useState } from 'react';
import { Button, Badge, Card } from 'react-bootstrap';

const Post = ({ post }) => {
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{post.post}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{post.postDescription}</Card.Subtitle>
        <Card.Text>
          {post.tags.map((tag) => (
            <Badge key={tag} className="mr-1" variant="secondary">
              {tag}
            </Badge>
          ))}
        </Card.Text>
        <Button variant={isBookmarked ? 'primary' : 'outline-primary'} onClick={handleBookmarkClick}>
          Bookmark
        </Button>{' '}
      </Card.Body>
    </Card>
  );
};

export default Post;
