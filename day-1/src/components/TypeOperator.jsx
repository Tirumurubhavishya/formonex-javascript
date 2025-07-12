import React, { useState } from 'react';

export default function TypeOperator() {
  const [input, setInput] = useState('');
  const [typeInfo, setTypeInfo] = useState('');

  const detectType = () => {
    let value;
    let type = '';
    let instance = '';

    try {
      
      value = JSON.parse(input);
    } catch {
      value = input; 
    }


    type = typeof value;

    
    if (Array.isArray(value)) {
      instance = 'Array';
    } else if (value === null) {
      instance = 'null';
    } else if (value instanceof Object) {
      instance = 'Object';
    } else {
      instance = 'Primitive';
    }

    setTypeInfo(`typeof: ${type}\ninstanceof: ${instance}`);
  };

  return (
    <div>
      <h3>Type Operators</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Try: 123, "hello", true, null, [], {}'
      />
      <button onClick={detectType}>Detect</button>
      <pre>{typeInfo}</pre>
    </div>
  );
}