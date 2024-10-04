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

})