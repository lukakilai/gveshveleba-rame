import React from "react";
import _ from "lodash";

import { links } from "../../data/data";

function Epilogue() {
  return (
    <p className="answer" id="ketdeba">
      არაფერი გეშველებათ, მაგრამ
      <br />
      <a href={_.sample(links)} target="_blank" rel="noopener noreferrer">
        რაღაცა ხო კეთდება?!
      </a>
    </p>
  );
}

export default Epilogue;
