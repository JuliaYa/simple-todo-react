import React from 'react';
import ReactDom from 'react-dom';

const element = (
  <>
    <h1>My ToDo List</h1>
    <input placeholder='Search' />
    <ul>
      <li>Learn React</li>
      <li>Build React App</li>
    </ul>
  </>
  );

ReactDom.render(element, document.getElementById('root'));