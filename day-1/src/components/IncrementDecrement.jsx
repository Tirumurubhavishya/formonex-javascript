import React, { useState } from 'react';

export default function IncrementDecrement() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h3>Increment & Decrement</h3>
      <p>Value: {num}</p>
      <button onClick={() => setNum(num + 1)}>++</button>
      <button onClick={() => setNum(num - 1)}>--</button>
    </div>
  );
}