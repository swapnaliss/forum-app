import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const SortBar = ({ onSortByDate, onSortByUpvotes }) => {
    const [sortBy, setSortBy] = useState('');

    const handleSortByDate = () => {
        setSortBy('date');
        onSortByDate();
    };

    const handleSortByUpvotes = () => {
        setSortBy('upvotes');
        onSortByUpvotes();
    };

    return (
        <div className="SortBar">
            <h5>Sort By</h5>

            <div className="mt-3">
                <Button variant={sortBy === 'date' ? 'primary' : 'outline-primary'} onClick={handleSortByDate}>
                    Sort by Date
                </Button>
                <Button variant={sortBy === 'upvotes' ? 'primary' : 'outline-primary'} onClick={handleSortByUpvotes}>
                    Sort by Upvotes
                </Button>
            </div>
        </div>
    );
};

export default SortBar;
