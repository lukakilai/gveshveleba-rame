import React, { Fragment } from "react";

import answers from "../data/data";

function Answer({ loading, n }) {
  return (
    <Fragment>
      {loading && <p id="loader">მიმდინარეობს მოკვლევა</p>}
      {!loading && <p id="a">{answers[n]}</p>}
    </Fragment>
  );
}

export default Answer;
