import React from "react";

function Button({ btnClick, n }) {
  const opacity = 1 - 0.08 * n;
  const display = opacity <= 0.05 ? "none" : "";

  const style = {
    opacity: opacity,
    display: display,
  };

  return (
    <button id="btn" onClick={btnClick} style={style}>
      გვეშველება რამე?
    </button>
  );
}

export default Button;
