import React, { useEffect, useState } from "react";

import Button from "./components/Button";
import Answer from "./components/Answer";

function App() {
  const [loading, setLoading] = useState(false);
  const [n, setN] = useState(0);

  function loadingHandler(secs) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, secs * 1000);
  }

  useEffect(() => {
    loadingHandler(2);
  }, []);

  function btnClick() {
    setN((prev) => (prev += 1));
    loadingHandler(1);
  }

  return (
    <div className="container">
      <p id="q">გვეშველება რამე?</p>
      <Answer loading={loading} n={n} />
      <Button btnClick={btnClick} n={n} loading={loading} />
    </div>
  );
}

export default App;
