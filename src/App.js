import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const calculate = (operation) => {
    const [num1, num2] = input.split(',').map(Number);
    let res;
    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      default:
        return;
    }
    setResult(res);
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input type="text" value={input} onChange={handleInputChange} placeholder="Enter two numbers separated by a comma" />
      <button onClick={() => calculate('add')}>Add</button>
      <button onClick={() => calculate('subtract')}>Subtract</button>
      <div>Result: {result !== null ? result : 'N/A'}</div>
    </div>
  );
};

export default App;
