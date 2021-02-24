import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  // 0 - all, 1 - active, 2 - done
  onClick = (status) => {
    this.props.onStatusChange(status);
  }

  setBtnStyles(btnStatus) {
    const { status } = this.props;
    const btn = 'btn btn-outline-secondary';
    const activeBtn = 'btn btn-info';

    return btnStatus === status ? activeBtn : btn;
  }

  render() {
    return (
      <div className="btn-group">
        <button onClick={ () => this.onClick(0) }
                type="button"
                className={ this.setBtnStyles(0) }>All</button>
        <button onClick={ () => this.onClick(1) }
                type="button"
                className={ this.setBtnStyles(1) }>Active</button>
        <button onClick={ () => this.onClick(2) }
                type="button"
                className={ this.setBtnStyles(2) }>Done</button>
      </div>
    );
  };
};
