import React, { Component } from 'react';
import { Navlinks } from './Nav.css.js';
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export class Nav extends Component {
  state = {
    bg: 'none',
    text: 'indigo'
  };

  clearBackground = () => this.setState({ bg: 'none', text: 'indigo' });
  setBackground = () => this.setState({ bg: 'black', text: '#555' });

  render() {
    const theme = {
      bg: this.state.bg,
      text: this.state.text,
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
