import React, { useState } from 'react';

const SortBar = ({ onSortByDate, onSortByUpvotes }) => {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortBy(selectedOption);

    if (selectedOption === 'date') {
      onSortByDate();
    } else if (selectedOption === 'upvotes') {
      onSortByUpvotes();
    }
  };

  return (
    <div className="SortBar">
      <h5>Sort By</h5>
      <div className="mt-3">
        <select value={sortBy} onChange={handleSortChange} className="form-control">
          <option value="">Select an option</option>
          <option value="date">Date</option>
          <option value="upvotes">Upvotes</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
