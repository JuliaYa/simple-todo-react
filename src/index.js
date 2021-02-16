import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
import ItemStatusFilter from './components/item-status-filter';
 

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

ReactDom.render(<App />, document.getElementById('root'));