import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Introducing title', () => {
  render(<App />);
  const titleElement = screen.getByText(/introducing/i);
  expect(titleElement).toBeInTheDocument();
});
