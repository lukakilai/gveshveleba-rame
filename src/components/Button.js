import React from "react";

function Button({ btnClick, n }) {
  const opacity = 1 - 0.08 * n;
  const visibility = opacity <= 0.05 ? "hidden" : "visible";

  const style = {
    opacity: opacity,
    visibility: visibility,
  };

  return (
    <button id="btn" onClick={btnClick} style={style}>
      გვეშველება რამე?
    </button>
  );
}

export default Button;
