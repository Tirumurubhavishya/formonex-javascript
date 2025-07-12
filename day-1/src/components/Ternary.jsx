import React, { useState } from 'react';

export default function Ternary() {
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  const check = () => {
    const msg = age >= 18 ? "Eligible to vote" : "Not eligible";
    setResult(msg);
  };

  return (
    <div>
      <h3>Ternary Operator</h3>
      <input value={age} type="number" onChange={(e) => setAge(e.target.value)} />
      <button onClick={check}>Check</button>
      <p>{result}</p>
    </div>
  );
}