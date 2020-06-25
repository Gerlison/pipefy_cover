import React from "react";

import Card from "../Card";
import { Container, Header } from "./style";

export default function List({ data }) {
  return (
    <Container>
      <Header>
        <h2>{data.title}</h2>
      </Header>
      {data.cards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </Container>
  );
}
