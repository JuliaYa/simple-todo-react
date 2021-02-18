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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Build React App'),
      this.createTodoItem('Call mom'),
      this.createTodoItem('Go to gym'),
    ]
  };

  getIndexById(id) {
    return this.state.todoData.findIndex((el) => el.id === id);
  };

  toggleProperty(array, propName, id) {
      const index = this.getIndexById(id);
      const oldItem = array[index];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };

      return [
          ...array.slice(0, index),
          newItem,
          ...array.slice(index + 1)
      ];
  };

  createTodoItem(text) {
    return {
      label: text,
      important: false,
      done: false,
      id: this.maxId++
    };
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = this.getIndexById(id);

      return {
        todoData: [
          ...todoData.slice(0, index),
          ...todoData.slice(index + 1)
        ],
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {   
      return {
        todoData: [
          ...todoData,
          newItem
        ]
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
     return {
       todoData: this.toggleProperty(todoData, 'important', id)
     }
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, 'done', id)
      }
     });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    
    return (
      <div className="todo-app">
        <AppHeader  toDo={ todoCount } done={ doneCount }/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todoData={ todoData }
          onDeleted={ this.deleteItem }
          onToggleDone={ this.onToggleDone }
          onToggleImportant={ this.onToggleImportant }
        />
        <AddNewItem onItemAdded={ this.addItem } />
      </div>
    );
  };
};
