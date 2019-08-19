import React, { Component } from 'react';
import { Body, Name, CenterText, Line } from './Home.css.js';
import Typewriter from 'typewriter-effect';

export class Home extends Component {
  render() {
    return (
      <Body>
        <CenterText>
          <Name>Brian Be</Name>
          <Line />
          <Name>
            <Typewriter
              options={{
                strings: [
                  'Software Engineer',
                  'Bruin Graduate',
                  'Self-taught Musician',
                  'Sound Engineer',
                  'Youth Group Leader'
                ],
                autoStart: true,
                loop: true
              }}
            />
          </Name>
        </CenterText>
      </Body>
    );
  }
}

export default Home;
