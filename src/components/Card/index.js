import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Container, Header, Status, Content, Autor } from "./style";

export default function Card({ card, index }) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Header>
            {card.labels.map((label) => (
              <Status key={label} color={label} />
            ))}
          </Header>
          <Content>
            <p>{card.content}</p>
          </Content>
          <Autor>{card.user && <img src={card.user} alt="" />}</Autor>
        </Container>
      )}
    </Draggable>
  );
}
