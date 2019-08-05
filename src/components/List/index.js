import React from 'react';

import Card from '../Card'
import { Container, Header } from './style';

import { MdAdd } from 'react-icons/md'

export default function List({ data }) {
  return (
    <Container>
      <Header>
        <h2>
          {data.title}
        </h2>

        {data.creatable && (<span>
          <MdAdd color="#fff" />
        </span>)}

      </Header>
      {data.cards.map(card => (<Card key={card.id} data={card} />))}
    </Container>
  );
}
