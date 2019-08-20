import React, { Component } from 'react';
import {
  Container,
  Description,
  ProfilePic,
  ProfilePicContainer,
  Button
} from './About.css.js';
import resume from '../../images/resume/Brian-Resume-2.1.pdf';

export class About extends Component {
  render() {
    return (
      <Container>
        <Description>
          <h1>I am Brian Be.</h1>
          <p>
            I am a software engineer specializing in web and mobile development.
            Though I am experienced in full-stack developemnt, I have a heavier
            emphasis in frontend development.
          </p>
          <p>
            I am a software engineer specializing in web and mobile development.
            Though I am experienced in full-stack developemnt, I have a heavier
            emphasis in frontend development.
          </p>
          <br />
          <Button>
            <a href={resume} target="_blank">
              View Resume{' '}
            </a>
          </Button>
        </Description>
        <ProfilePicContainer>
          <ProfilePic />
        </ProfilePicContainer>
      </Container>
    );
  }
}

export default About;
