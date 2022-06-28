import React, { useEffect, useState } from "react";

export default function UseEffectFetch() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth)
    });
  }, []);

  return (
    <div className="container window-width">
      <div className="title">React VIII</div>
      <div className="subtitle">Display Window Width</div>
      <div className="display">{windowWidth} </div>
    </div>
  );
}
