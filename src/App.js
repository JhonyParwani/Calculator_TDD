import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const calculate = (operation) => {
    const [num1, num2] = input.split(',').map(Number);
    const operations = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
    };
    setResult(operations[operation](num1, num2));
  };
  return (
    <div>
      <h1>Simple Calculator</h1>
      <input type="text" value={input} onChange={handleInputChange} placeholder="Enter two numbers separated by a comma" />
      <button onClick={() => calculate('add')}>Add</button>
      <button onClick={() => calculate('subtract')}>Subtract</button>
      <button onClick={() => calculate('multiply')}>Multiply</button>
      <div>Result: {result !== null ? result : 'N/A'}</div>
    </div>
  );
};

export default App;
