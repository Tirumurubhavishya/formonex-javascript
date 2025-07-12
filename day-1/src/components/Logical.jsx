import React, { useState } from 'react';

export default function Logical() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [result, setResult] = useState(null);

  const evaluate = () => {
    const x = a === 'true' || a === true;
    const y = b === 'true' || b === true;

    setResult({
      and: x && y,
      or: x || y,
      notA: !x,
    });
  };

  return (
    <div>
      <h3>Logical Operations</h3>
      <select onChange={(e) => setA(e.target.value)} value={a}>
        <option value="false">False (A)</option>
        <option value="true">True (A)</option>
      </select>

      <select onChange={(e) => setB(e.target.value)} value={b}>
        <option value="false">False (B)</option>
        <option value="true">True (B)</option>
      </select>

      <button onClick={evaluate}>Evaluate</button>

      {result && (
        <ul>
          <li>A && B: {String(result.and)}</li>
          <li>A || B: {String(result.or)}</li>
          <li>!A: {String(result.notA)}</li>
        </ul>
      )}
    </div>
  );
}