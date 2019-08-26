import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import styles from './styles.css';
import classNames from 'classnames';

class GridFilter extends Component {
  state = {
    isClickedAll: true,
    isClickedTech: false,
    isClickedPersonal: false
  };

  handleClickAll = e => {
    this.setState({
      isClickedAll: true,
      isClickedTech: false,
      isClickedPersonal: false
    });
    if (this.iso === undefined)
      this.iso = new Isotope('.item-grid', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
    this.iso.arrange({ filter: '*' });
  };

  handleClickTech = e => {
    this.setState({
      isClickedAll: false,
      isClickedTech: true,
      isClickedPersonal: false
    });
    if (this.iso === undefined)
      this.iso = new Isotope('.item-grid', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
    this.iso.arrange({ filter: '.tech' });
  };

  handleClickPersonal = e => {
    this.setState({
      isClickedAll: false,
      isClickedTech: false,
      isClickedPersonal: true
    });
    if (this.iso === undefined)
      this.iso = new Isotope('.item-grid', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
    this.iso.arrange({ filter: '.personal' });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleClickAll}
          className={
            this.state.isClickedAll
              ? classNames(styles.filtersButton, styles.isChecked)
              : styles.filtersButton
          }
        >
          All
        </button>
        <button
          onClick={this.handleClickTech}
          className={
            this.state.isClickedTech
              ? classNames(styles.filtersButton, styles.isChecked)
              : styles.filtersButton
          }
        >
          Tech
        </button>
        <button
          onClick={this.handleClickPersonal}
          className={
            this.state.isClickedPersonal
              ? classNames(styles.filtersButton, styles.isChecked)
              : styles.filtersButton
          }
        >
          Personal
        </button>
      </div>
    );
  }
}

export default GridFilter;
