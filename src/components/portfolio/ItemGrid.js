import React, { Component } from 'react';

// Container for isotope grid
class ItemGrid extends Component {
  render() {
    return <div className="item-grid">{this.props.children}</div>;
  }
}

export default ItemGrid;
