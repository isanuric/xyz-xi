import React, { useEffect, useState } from "react";




export default function UseEffectFetch() {
    const [starWarsData, setStarWarsData] = useState({});
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch("https://swapi.dev/api/people/" + count )
        .then(response => response.json())
        .then(data => setStarWarsData(data))

        console.log("in useEffect")
    }, [count]);

   function handleCount() {
    setCount( ()  => count +1)
   }


  return (
    <div className="container squares use-effect-fetch">
      <div className="title">React VII</div>
      <div className="subtitle">
       useEffect to fetch data
      </div>
      <button className="button" onClick={handleCount}>Get Next Character</button>
      <div className="display">Character {count} </div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
