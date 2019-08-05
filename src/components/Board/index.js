import React from 'react';

import List from '../List'
import { Container } from './style';

export default function Board({ data }) {
  return (
    <Container>
      {data.map(list => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
}
