import React, { useState } from 'react';

export default function Arithmetic() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (isNaN(x) || isNaN(y)) {
      setResult('Enter valid numbers');
      return;
    }

    setResult({
      addition: x + y,
      subtraction: x - y,
      multiplication: x * y,
      division: y !== 0 ? x / y : 'Divide by 0',
      modulus: y !== 0 ? x % y : 'Mod by 0',
    });
  };

  return (
    <div>
      <h3>Arithmetic Operations</h3>
      <input value={a} onChange={(e) => setA(e.target.value)} placeholder="Number A" type="number" />
      <input value={b} onChange={(e) => setB(e.target.value)} placeholder="Number B" type="number" />
      <button onClick={calculate}>Calculate</button>

      {result && (
        <ul>
          <li>Addition: {result.addition}</li>
          <li>Subtraction: {result.subtraction}</li>
          <li>Multiplication: {result.multiplication}</li>
          <li>Division: {result.division}</li>
          <li>Modulus: {result.modulus}</li>
        </ul>
      )}
    </div>
  );
}