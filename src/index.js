import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
 

const App = () => {

  const todoData = [
    { id: 1, label: 'Drink Coffee', important: false },
    { id: 2, label: 'Build React App', important: true },
    { id: 3, label: 'Call mom', important: false },
    { id: 4, label: 'Go to gym', important: true },
  ];

  return (
    <>
      <AppHeader />
      <SearchPanel />
      <TodoList todoData={ todoData }/>
    </>
  );
};

ReactDom.render(<App />, document.getElementById('root'));