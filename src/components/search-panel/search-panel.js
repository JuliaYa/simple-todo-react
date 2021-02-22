import React from 'react';

import './search-panel.css';

const SearchPanel = ({ onChange }) => {
  return (
    <input type="text"
              className="form-control search-input"
              placeholder="Type to search" 
              onChange={ (e) => onChange(e.target.value) }/>
  );
};

export default SearchPanel;
