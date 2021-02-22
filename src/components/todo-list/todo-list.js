import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todoData, onDeleted,
                    onToggleDone,
                    onToggleImportant }) => {
  
  const elements = todoData.map((item) => {
    
    const { id, ...itemProps } = item;
    
    return (
        <TodoListItem 
          { ...itemProps }
          onDeleted={ () => onDeleted(id) }
          onToggleDone={ () => onToggleDone(id) }
          onToggleImportant={ () => onToggleImportant(id) } />
    );
  });
  
  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
