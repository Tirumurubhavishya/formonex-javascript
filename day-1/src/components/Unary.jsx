import React, { useState } from 'react';

export default function Unary() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleUnary = () => {
    let log = [];
    log.push(`typeof: ${typeof value}`);
    log.push(`Unary - : ${-value}`);
    log.push(`Unary + : ${+value}`);
    setResult(log.join('\n'));
  };

  return (
    <div>
      <h3>Unary Operators</h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter a value" />
      <button onClick={handleUnary}>Evaluate</button>
      <pre>{result}</pre>
    </div>
  );
}