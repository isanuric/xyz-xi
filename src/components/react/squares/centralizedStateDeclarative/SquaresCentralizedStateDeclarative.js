import React, { useState } from "react";

import boxes from "../Data";
import Box from "./Box";

export default function SquaresCentralizedStateDeclarative() {
  const [squares, setSquares] = useState(boxes);

  

  /* Declarative Version */
  function toggle(id) {
    setSquares((prevSquers) => {
      return prevSquers.map(square => {
        return square.id === id ? {...square, on: !square.on} : square;
      })
    });
  }

  /* Version 1 */
  // const squareElements = squares.map((square) => (
  //   <Box  key={square.id} id={square.id} on={square.on} toggle={toggle}></Box>
  // ));

  const squareElements = squares.map((square) => (
    <Box  key={square.id} on={square.on} toggle={() => toggle(square.id)}></Box>
  ));

  return (
    <div className="container squares squares-centralized-state">
      <div className="title">React IV</div>
      <div className="subtitle">
        useState (Centrelized State - Declarative Version): Click the boxes to change their color
      </div>
      <div className="display">{squareElements} </div>
    </div>
  );
}
