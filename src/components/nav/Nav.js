import React, { Component } from 'react';
import { Navlinks } from './Nav.css.js';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <Navlinks>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </Navlinks>
    );
  }
}

export default Nav;
