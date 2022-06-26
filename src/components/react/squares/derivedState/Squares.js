import React, { useState } from "react";

import boxes from "../Data";
import Box from "./Box";

export default function Squares(props) {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on}></Box>
  ));

  return (
    <div className="container squares">
      <div className="title">React II</div>
      <div className="subtitle">useState (Derived State): Click the boxes to change their color</div>
      <div className="display">{squareElements} </div>
    </div>
  );
}
