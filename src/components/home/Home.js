import React, { Component } from 'react';
import { Body, Name, CenterText, Line } from './Home.css.js';

export class Home extends Component {
  render() {
    return (
      <Body>
        <CenterText>
          <Name>Brian Be</Name>
          <Line />
          <Name>Software Developer</Name>
        </CenterText>
      </Body>
    );
  }
}

export default Home;
