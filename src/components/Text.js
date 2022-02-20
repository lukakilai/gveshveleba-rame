import React, { Fragment } from "react";
import _ from "lodash";

import { Loading, Answer, Epilogue } from "./text-components/export";
function Text({ loading, n }) {
  return (
    <Fragment>
      {loading && <Loading />}
      {!loading && n < 12 && <Answer n={n} />}
      {!loading && n >= 12 && <Epilogue />}
    </Fragment>
  );
}

export default Text;
