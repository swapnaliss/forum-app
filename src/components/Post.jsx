import React, { useState } from 'react';
import { Button, Badge, Card } from 'react-bootstrap';
import Comment from './Comment';

const Post = ({ post }) => {
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);
  const [showComments, setShowComments] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleCommentClick = () => {
    setShowComments(true);
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
        <Button variant="outline-secondary" onClick={handleCommentClick}>
          Comment
        </Button>
        <div>
          {showComments && (
            <div>
              {post.comments.map((comment) => (
                <Comment key={comment.commentId} comment={comment} />
              ))}
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
