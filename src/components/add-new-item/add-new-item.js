import React from 'react';

import './add-new-item.css';

const AddNewItem = (props) => {
  const { addItem } = props;

  const fakeItem = {
    label: 'New todo',
    important: false,
    done: false
  };

  return (
    <div className="add-new-item">
      <span>New todo</span>
      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={() => addItem(fakeItem) }>
        <i className="fa fa-plus" />
      </button>
    </div>
  );
}

export default AddNewItem;
