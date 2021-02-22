import React, { Component } from 'react';

import './todo-list-item.css';

// todo: can be refactored to function
export default class TodoListItem extends Component {

  render() {
    const { id, label, onDeleted,
            important, done,
            visible,
            onToggleDone,
            onToggleImportant } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    let liClassNames = 'list-group-item'
    if (!visible) {
      liClassNames += ' hidden';
    }
  
    return (
      <li key={ id } className={ liClassNames }>
        <span className={ classNames }>
          <span
            className="todo-list-item-label"
            onClick={ onToggleDone } >
            { label }
          </span>
    
          <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={ onToggleImportant }>
            <i className="fa fa-exclamation" />
          </button>
    
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={ onDeleted }>
            <i className="fa fa-trash-o" />
          </button>
        </span>
      </li>
    );
  }
}
