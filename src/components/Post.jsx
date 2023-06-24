import React, { useState } from 'react';
import { Button, Badge, Card } from 'react-bootstrap';
import Comment from './Comment';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { Image } from 'react-bootstrap';
import moment from 'moment';

const Post = ({ post }) => {
    const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);
    const [showComments, setShowComments] = useState(false);
    const [upvotes, setUpvotes] = useState(post.upvotes);
    const [downvotes, setDownvotes] = useState(post.downvotes);

    const handleBookmarkClick = () => {
        setIsBookmarked(!isBookmarked);
    };

    const handleCommentClick = () => {
        setShowComments(!showComments);
    };

    const handleUpvoteClick = () => {
        setUpvotes(upvotes + 1);
    };

    const handleDownvoteClick = () => {
        setDownvotes(downvotes + 1);
    };


    const voteCount = downvotes > upvotes ? -1 * (downvotes - upvotes) : upvotes - downvotes;

    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex align-items-center">
                    <Image src={post.picUrl} roundedCircle height={32} width={32} className="mr-2" />
                    <div>
                        <h6 className="mb-0">{post.name}</h6>
                        <p className="text-muted mb-0">@{post.username} - {moment(post.createdAt).fromNow()}</p>
                    </div>
                </div>

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
                <div className="mt-3">
                    <Button variant="link" onClick={handleUpvoteClick}>
                        <BsArrowUp size={20} color="green" />
                    </Button>
                    <span className="mr-2">{voteCount}</span>
                    <Button variant="link" onClick={handleDownvoteClick}>
                        <BsArrowDown size={20} color="red" />
                    </Button>
                </div>
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
