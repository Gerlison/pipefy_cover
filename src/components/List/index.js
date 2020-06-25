import React from "react";

import Card from "../Card";
import { Container, Header } from "./style";
import { Droppable } from "react-beautiful-dnd";

export default function List({ column }) {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <Container div ref={provided.innerRef} {...provided.droppableProps}>
          <Header>
            <h2>{column.title}</h2>
          </Header>

          {column.cards.map((card, index) => (
            <Card index={index} key={card.id} card={card} />
          ))}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}
