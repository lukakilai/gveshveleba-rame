import React from "react";

import { answers } from "../../data/data";

function Answer({ n }) {
  return (
    <p className="answer" id="a">
      {answers[n]}
    </p>
  );
}

export default Answer;
