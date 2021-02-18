import React, { Component } from 'react';

import './add-new-item-form.css';

export default class AddNewItemForm extends Component {
  state = {
    label: ''
  };
  
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="add-new-item-form d-flex"
            onSubmit={ this.onSubmit }>
        <input type="text"
              className="form-control"
              onChange={ this.onLabelChange }
              placeholder="Thing you need to do"
              value={ this.state.label }/>
        <button type="button"
                className="btn btn-outline-secondary btn-sm float-right"
                onClick={ this.onSubmit }>
          <i className="fa fa-plus" />
        </button>
      </form>
    );
  };
}
