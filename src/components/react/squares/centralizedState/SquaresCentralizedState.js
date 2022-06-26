import React, { useState } from "react";

import boxes from "../Data";
import Box from "./Box";

export default function SquaresCentralizedState() {
  const [squares, setSquares] = useState(boxes);

  /* Imperative Version */
  function toggle(id) {
    setSquares((prevSquers) => {
      const newSquares = [];
      for (let i = 0; i < prevSquers.length; i++) {
        const square = prevSquers[i];
        if (square.id === id) {
          const updatedSqure = {
            ...square,
            on: !square.on,
          };

          newSquares.push(updatedSqure);
        } else {
          newSquares.push(square);
        }
      }

      return newSquares;
    });
  }

  const squareElements = squares.map((square) => (
    <Box  key={square.id} id={square.id} on={square.on} toggle={toggle}></Box>
  ));

  return (
    <div className="container squares squares-centralized-state">
      <div className="title">React III</div>
      <div className="subtitle">
        useState (Centrelized State - Imparative Version): Click the boxes to change their color
      </div>
      <div className="display">{squareElements} </div>
    </div>
  );
}
