import React, { Component } from 'react';
import { Container, Header } from './Portfolio.css.js';

export class Portfolio extends Component {
  render() {
    return (
      <Container>
        <Header>
          <h1>My Portfolio</h1>
          <p>
            I focus mainly on producing web apps, but I have also contributed in
            other types of projects. These include mobile apps and 2D/3D games.
          </p>
        </Header>
      </Container>
    );
  }
}

export default Portfolio;
