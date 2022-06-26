import React, { Fragment } from "react";
import AddToArray from "./AddToArray";
import Squares from "./squares/derivedState/Squares";
import SquaresCentralizedState from "./squares/centralizedState/SquaresCentralizedState";
import SquaresCentralizedStateDeclarative from "./squares/centralizedStateDeclarative/SquaresCentralizedStateDeclarative"

export default function ReactSecssions() {
  return (
    <Fragment>
      <AddToArray />
      <Squares darkMode={true} />
      <SquaresCentralizedState />
      <SquaresCentralizedStateDeclarative />
    </Fragment>
  );
}
