import React, { Component } from 'react';

import './app.css';

import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import AddNewItem from '../add-new-item';
 

export default class App extends Component {
  maxId = 100;
  
  state = {
    todoData: [
      { id: 1, label: 'Drink Coffee', important: false },
      { id: 2, label: 'Build React App', important: true },
      { id: 3, label: 'Call mom', important: false },
      { id: 4, label: 'Go to gym', important: true },
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      return {
        todoData: [
          ...todoData.slice(0, index),
          ...todoData.slice(index + 1)
        ],
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      done: false,
      id: this.maxId++
    }
    
    this.setState(({ todoData }) => {   
      return {
        todoData: [
          ...todoData,
          newItem
        ]
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader  toDo={ 1 } done={ 3 }/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todoData={ this.state.todoData }
          onDeleted={ this.deleteItem }
        />
        <AddNewItem onItemAdded={ this.addItem } />
      </div>
    );
  };
};
