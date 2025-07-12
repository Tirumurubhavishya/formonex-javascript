 import React from 'react';
import Arithmetic from './components/Arithmetic';
import Comparison from './components/Comparison';
import Logical from './components/Logical';
import Assignment from './components/Assignment';
import Unary from './components/Unary';
import Ternary from './components/Ternary';
import StringOperator from './components/StringOperator';
import TypeOperator from './components/TypeOperator';
import IncrementDecrement from './components/IncrementDecrement';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>All JavaScript Operators with Input</h1>
      <Arithmetic />
      <hr />
      <Comparison />
      <hr />
      <Logical />
      <hr />
      <Assignment />
      <hr />
      <Unary />
      <hr />
      <Ternary />
      <hr />
      <StringOperator />
      <hr />
      <TypeOperator />
      <hr />
      <IncrementDecrement />
    </div>
  );
}

export default App;