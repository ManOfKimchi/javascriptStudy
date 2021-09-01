import React from "react";
import styled from "styled-components";
import GameBoard from "../board/GameBoard";

const ContainerStyle = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const Container = () => {
  return (
    <ContainerStyle>
      <GameBoard></GameBoard>
    </ContainerStyle>
  );
};

export default Container;
