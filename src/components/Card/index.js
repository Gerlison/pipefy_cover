import React from 'react';

import { Container, Header, Status, Content, Autor } from './style';

export default function Card({ data }) {
  return (
    <Container>
      <Header>
        {data.labels.map(label => (<Status color={label} />))}
      </Header>
      <Content>
        <p>
          {data.content}
        </p>
      </Content>
      <Autor>
        {data.user && <img src={data.user} alt="" />}
      </Autor>
    </Container>
  );
}
