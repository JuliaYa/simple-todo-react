import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build React App</li>
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My ToDo List</h1>
  );
};

const SearchPanel = () => {
  return (
    <input placeholder='Search' />
  );
};

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