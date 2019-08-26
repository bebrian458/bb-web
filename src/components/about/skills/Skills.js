import React, { Component } from 'react';
import { Container, Test } from './Skills.css.js';

export class Skills extends Component {
  state = {
    checked: false
  };

  toggle = () => this.setState({ checked: !this.state.checked });

  render() {
    const type = this.state.checked ? 'primary' : undefined;
    return (
      <Container id="skills">
        <Test type={type}>This is the skills section</Test>
        <Test>This is the skills section</Test>
        <button onClick={this.toggle}>Click me</button>
      </Container>
    );
  }
}

export default Skills;
