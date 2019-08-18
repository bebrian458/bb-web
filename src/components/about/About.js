import React, { Component } from 'react';

export class About extends Component {
  render() {
    console.log(this.props.match);
    return <div>This is the about page</div>;
  }
}

export default About;
