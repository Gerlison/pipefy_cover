import React, { useState, useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import cloneDeep from "lodash/cloneDeep";

import List from "../List";
import { Container } from "./style";

export default function Board({ data }) {
  const [boardData, setBoardData] = useState(data);

  const handleDragEnd = useCallback(
    ({ source, destination }) => {
      if (
        !destination ||
        (destination.droppableId === source.droppableId &&
          destination.index === source.index)
      )
        return;

      const newData = cloneDeep(boardData);

      // Removes the card from source location
      const sourceCards = newData.find(
        (column) => column.id === source.droppableId
      ).cards;
      const [card] = sourceCards.splice(source.index, 1);

      // Adds the card to it's new location
      const destinationCards = newData.find(
        (column) => column.id === destination.droppableId
      ).cards;
      destinationCards.splice(destination.index, 0, card);

      setBoardData(newData);
    },
    [boardData]
  );

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        {boardData.map((list) => (
          <List key={list.title} column={list} />
        ))}
      </DragDropContext>
    </Container>
  );
}
