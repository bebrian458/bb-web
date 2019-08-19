import React, { Component } from 'react';
import { Navlinks } from './Nav.css.js';
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export class Nav extends Component {
  state = {
    bg: 'none'
  };

  clearBackground = () => this.setState({ bg: 'none' });
  setBackground = () => this.setState({ bg: '#c0dbe6' });

  render() {
    const theme = {
      bg: this.state.bg,
      active: 'white'
    };

    return (
      <ThemeProvider theme={theme}>
        <Navlinks>
          <NavLink activeStyle={{ color: theme.active }} to="/" exact>
            <div onClick={this.clearBackground}>Home</div>
          </NavLink>
          <NavLink activeStyle={{ color: theme.active }} to="/about">
            <div onClick={this.setBackground}>About</div>
          </NavLink>
          <NavLink activeStyle={{ color: theme.active }} to="/portfolio">
            <div onClick={this.setBackground}>Portfolio</div>
          </NavLink>
          <NavLink activeStyle={{ color: theme.active }} to="/contact">
            <div onClick={this.setBackground}>Contact</div>
          </NavLink>
        </Navlinks>
      </ThemeProvider>
    );
  }
}

export default Nav;
