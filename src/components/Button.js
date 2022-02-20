import React from "react";

function Button({ btnClick, n, loading }) {
  const style = {
    opacity: (100 - n * 7.5) / 100,
  };

  return (
    <button id="btn" onClick={btnClick} style={style} disabled={loading}>
      ახლა?
    </button>
  );
}

export default Button;
