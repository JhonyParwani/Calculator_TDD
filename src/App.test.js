import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Calculator', () => {
  test('adds two numbers', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText(/enter two numbers/i), {
      target: { value: '2,3' },
    });
    fireEvent.click(screen.getByText(/add/i));
    expect(screen.getByText(/result/i)).toHaveTextContent('Result: 5');
  });
});
test('subtracts two numbers', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/enter two numbers/i), {
    target: { value: '5,3' },
  });
  fireEvent.click(screen.getByText(/subtract/i));
  expect(screen.getByText(/result/i)).toHaveTextContent('Result: 2');
});

test('multiplies two numbers', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/enter two numbers/i), {
    target: { value: '4,5' },
  });
  fireEvent.click(screen.getByText(/multiply/i));
  expect(screen.getByText(/result/i)).toHaveTextContent('Result: 20');
});
