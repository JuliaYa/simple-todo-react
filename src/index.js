import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
 

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Build React App', important: true },
    { label: 'Call mom', important: false },
    { label: 'Go to gym', important: true },
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