import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <label>{count}</label>
      <input
        type="button"
        onClick={() => setCount((value) => value + 1)}
        value="increase"
      />
    </div>
  );
};
