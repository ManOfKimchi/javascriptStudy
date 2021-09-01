import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const Board = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 16rem;
  height: 16rem;
  background-color: gray;
  padding: 2px;
`;

const GameBoard = ({ data }) => {
  return (
    <Board>
      {Array.from({ length: 9 }, (_, i) => {
        return <Cell key={i} idx={i} player={1}></Cell>;
      })}
    </Board>
  );
};

export default GameBoard;
