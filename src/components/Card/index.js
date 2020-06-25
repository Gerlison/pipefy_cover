import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";

import { Container, Header, Status, Content, Autor } from "./style";

export default memo(function Card({ card, index }) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
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
});
