import React, { useState } from 'react';

export default function Comparison() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const compare = () => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (isNaN(x) || isNaN(y)) {
      setResult('Enter valid numbers');
      return;
    }

    setResult({
      equal: x == y,
      strictEqual: x === y,
      notEqual: x != y,
      greater: x > y,
      lesser: x < y,
    });
  };

  return (
    <div>
      <h3>Comparison Operations</h3>
      <input value={a} onChange={(e) => setA(e.target.value)} placeholder="Number A" type="number" />
      <input value={b} onChange={(e) => setB(e.target.value)} placeholder="Number B" type="number" />
      <button onClick={compare}>Compare</button>

      {result && (
        <ul>
          <li>Equal (==): {String(result.equal)}</li>
          <li>Strict Equal (===): {String(result.strictEqual)}</li>
          <li>Not Equal (!=): {String(result.notEqual)}</li>
          <li>Greater Than: {String(result.greater)}</li>
          <li>Less Than: {String(result.lesser)}</li>
        </ul>
      )}
    </div>
  );
}