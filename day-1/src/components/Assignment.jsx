import React, { useState } from 'react';

export default function Assignment() {
  const [value, setValue] = useState(10);
  const [result, setResult] = useState('');

  const assignOps = () => {
    let x = value;
    let log = [];
    log.push(`Initial: ${x}`);
    x += 5; log.push(`x += 5: ${x}`);
    x -= 2; log.push(`x -= 2: ${x}`);
    x *= 2; log.push(`x *= 2: ${x}`);
    x /= 3; log.push(`x /= 3: ${x}`);
    setResult(log.join('\n'));
  };

  return (
    <div>
      <h3>Assignment Operators</h3>
      <input type="number" value={value} onChange={(e) => setValue(+e.target.value)} />
      <button onClick={assignOps}>Show</button>
      <pre>{result}</pre>
    </div>
  );
}