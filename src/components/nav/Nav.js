import React, { Component } from 'react';
import { Navlinks } from './Nav.css.js';
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <Navlinks>
        <NavLink activeStyle={{ color: 'white' }} to="/" exact>
          Home
        </NavLink>
        <NavLink activeStyle={{ color: 'white' }} to="/about">
          About
        </NavLink>
        <NavLink activeStyle={{ color: 'white' }} to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink activeStyle={{ color: 'white' }} to="/contact">
          Contact
        </NavLink>
      </Navlinks>
    );
  }
}

export default Nav;
