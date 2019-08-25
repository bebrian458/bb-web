import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return <div className="grid-item">{this.props.name}</div>;
  }
}

export default Item;
