import React, { useState } from 'react';

export default function StringOperator() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState('');

  const concat = () => {
    setResult(first + second);
  };

  return (
    <div>
      <h3>String Concatenation</h3>
      <input placeholder="First" value={first} onChange={(e) => setFirst(e.target.value)} />
      <input placeholder="Second" value={second} onChange={(e) => setSecond(e.target.value)} />
      <button onClick={concat}>Join</button>
      <p>Result: {result}</p>
    </div>
  );
}