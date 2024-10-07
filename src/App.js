import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError(''); // Clear error on new input
  };

  const calculate = (operation) => {
    const numbers = input.split(',').map(Number);

    // Check if there are exactly two numbers
    if (numbers.length !== 2) {
      setError('Please enter exactly two numbers separated by a comma.');
      setInput(''); // Clear the input box
      setResult(null);
      return;
    }

    // Check if both values are valid numbers
    const [num1, num2] = numbers;
    if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers.');
      setInput(''); // Clear the input box
      setResult(null);
      return;
    }

    const operations = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
    };

    // Perform the operation
    setResult(operations[operation](num1, num2));
    setInput(''); // Clear the input box after successful calculation
  };

  const resetCalculator = () => {
    setInput('');
    setResult(null);
    setError('');
  };

  return (
    <div className="calculator-container">
      <h1>Simple Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter two numbers separated by a comma"
      />
      <div className="button-container">
        <button onClick={() => calculate('add')}>Add</button>
        <button onClick={() => calculate('subtract')}>Subtract</button>
        <button onClick={() => calculate('multiply')}>Multiply</button>
      </div>
      {error && <div className="error">{error}</div>}
      <div className="result">Result: {result !== null ? result : 'N/A'}</div>
      <button onClick={resetCalculator}>Reset</button>
    </div>
  );
};

export default App;
