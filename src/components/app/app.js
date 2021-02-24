import React, { Component } from 'react';

import './app.css';

import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import AddNewItemForm from '../add-new-item-form';
 

export default class App extends Component {
  maxId = 100;
  
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Build React App'),
      this.createTodoItem('Call mom'),
      this.createTodoItem('Go to gym'),
    ],
    filter: {
      text: '',
      // 0 - all, 1 - active, 2 - done
      status: 0,
    },
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
      visible: true,
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
    this.onFilterChange();
  };

  onStatusChange = (status) => {
    this.setState({ filter: { ...this.state.filter, status: status } });
        
    this.onFilterChange();
  };

  onSearchChange = (text) => {
    this.setState({ filter: { ...this.state.filter, text: text } });
    
    this.onFilterChange();
  };

  // 0 - all, 1 - active, 2 - done
  filterByStatus = (item, status) => {
    if (status === 0) {
      return true;
    }
    return status === 1 ? !item.done : item.done
  };

  filterByText = (item, text) => {
    const labelText = item.label.toLowerCase();
    const searchString = text.toLowerCase();
    return labelText.includes(searchString);
  };

  onFilterChange = () => {
    this.setState(({ todoData, filter }) => {
      const { text, status } = filter;

      const newArray = todoData.map((item) => {
        item.visible = this.filterByStatus(item, status)
                     && this.filterByText(item, text);
      
        return item;
      });

      return { todoData: newArray };
    });
  }

  render() {
    const { todoData } = this.state;
    const filterStatus = this.state.filter.status;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    
    return (
      <div className="todo-app">
        <AppHeader  toDo={ todoCount } done={ doneCount }/>
        <div className="top-panel d-flex">
          <SearchPanel onChange={ this.onSearchChange } />
          <ItemStatusFilter status={ filterStatus } onStatusChange={ this.onStatusChange } />
        </div>
        <TodoList
          todoData={ todoData }
          onDeleted={ this.deleteItem }
          onToggleDone={ this.onToggleDone }
          onToggleImportant={ this.onToggleImportant }
        />
        <AddNewItemForm onItemAdded={ this.addItem } />
      </div>
    );
  };
};
