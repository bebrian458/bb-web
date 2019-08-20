import React, { Component } from 'react';
import {
  Container,
  Description,
  ProfilePic,
  ProfilePicContainer,
  Button
} from './About.css.js';
import resume from '../../images/resume/Brian-Resume-2.1.pdf';
import Intro from './intro/Intro.js';
import Skills from './skills/Skills.js';
import Hobbies from './hobbies/Hobbies.js';

export class About extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Skills />
        <Hobbies />
      </div>
    );
  }
}

export default About;
