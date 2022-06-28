import React, { Fragment } from "react";
import AddToArray from "./AddToArray";
import Squares from "./squares/derivedState/Squares";
import SquaresCentralizedState from "./squares/centralizedState/SquaresCentralizedState";
import SquaresCentralizedStateDeclarative from "./squares/centralizedStateDeclarative/SquaresCentralizedStateDeclarative"
import Joke from "./jokes/Joke";
import Form from "./Form";
import UseEffectFetch from "./useEffect/UseEffectFetch";
import UseEffectWindowWidth from "./useEffect/UseEffectWindowWidth"

export default function ReactSecssions() {
  return (
    <Fragment>
      <AddToArray />
      <Squares darkMode={true} />
      <SquaresCentralizedState />
      <SquaresCentralizedStateDeclarative />
      <Joke/>
      <Form />
      <UseEffectFetch />
      <UseEffectWindowWidth />
    </Fragment>
  );
}
