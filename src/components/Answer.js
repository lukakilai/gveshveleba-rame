import React, { Fragment } from "react";
import _ from "lodash";

const shevgondi = [
  "ვერც ახლა",
  "ვერა",
  "ვერა მეთქი",
  "ოეეეეე",
  "რამე სხვა მკითხე",
];

function Answer({ loading, n }) {
  return (
    <Fragment>
      {loading && <p id="a">მმმმმმ...</p>}
      {!loading && n < 2 && <p id="a">ჯერ ვერა</p>}
      {!loading && n >= 2 && <p id="a">{_.sample(shevgondi)}</p>}
    </Fragment>
  );
}

export default Answer;
