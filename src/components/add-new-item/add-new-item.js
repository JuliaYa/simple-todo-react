import React from 'react';

import './add-new-item.css';

const AddNewItem = (props) => {
  const { onItemAdded } = props;

  return (
    <div className="add-new-item">
      <span>New todo</span>
      <button type="button"
              className="btn btn-outline-secondary btn-sm float-right"
              onClick={() => onItemAdded('New todo') }>
        <i className="fa fa-plus" />
      </button>
    </div>
  );
}

export default AddNewItem;
