import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h2>Counter Component</h2>

      <button onClick={() => setCount(count - 1)}>-</button>

      <span>{count}</span>

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
