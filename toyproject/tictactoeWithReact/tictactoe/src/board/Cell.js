import React, { useState } from "react";
import styled from "styled-components";

const CellItem = styled.button`
  width: 5rem;
  height: 5rem;
  border: 2px solid white;
  background-color: white;
`;
const Cell = ({ idx, player }) => {
  const [value, setValue] = useState(0);
  const onClick = (e) => {
    if (value === 0) {
      setValue(player);
    }
  };
  return <CellItem onClick={onClick}>{value}</CellItem>;
};

export default Cell;
