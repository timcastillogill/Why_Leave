import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders a Read more link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Read more/i);
  expect(linkElement).toBeInTheDocument();
});
