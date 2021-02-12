import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';


const App = () => {
  return (
    <>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </>
  );
};

ReactDom.render(<App />, document.getElementById('root'));