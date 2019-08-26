import React, { Component } from 'react';
import { Container, Header } from './Portfolio.css.js';
import ItemGrid from './ItemGrid';
import Item from './Item';
import GridFilter from './GridFilter.js';

export class Portfolio extends Component {
  render() {
    const data = [
      {
        id: 1,
        name: 'test',
        imageUrl: '#',
        type: 'tech'
      },
      {
        id: 2,
        name: 'test2',
        imageUrl: '#',
        type: 'personal'
      },
      {
        id: 3,
        name: 'test3',
        imageUrl: '#',
        type: 'tech'
      }
    ];
    return (
      <Container>
        <Header>
          <h1>My Portfolio</h1>
          <p>
            I focus mainly on producing web apps, but I have also contributed in
            other types of projects. These include mobile apps and 2D/3D games.
          </p>
        </Header>

        <GridFilter />

        <ItemGrid>
          {data.map(object => {
            return (
              <Item
                key={object._id}
                name={object.name}
                imageUrl={object.imageUrl}
                type={object.type}
              />
            );
          })}
        </ItemGrid>
      </Container>
    );
  }
}

export default Portfolio;
