import React from 'react';

import './app.css';

import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
 

const App = () => {

  const todoData = [
    { id: 1, label: 'Drink Coffee', important: false },
    { id: 2, label: 'Build React App', important: true },
    { id: 3, label: 'Call mom', important: false },
    { id: 4, label: 'Go to gym', important: true },
  ];

  return (
    <div className="todo-app">
      <AppHeader  toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todoData={ todoData }/>
    </div>
  );
};

export default App;