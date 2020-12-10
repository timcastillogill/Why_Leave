import { render, screen } from '@testing-library/react';
import Country from './country.js'

let spyOn

test('renders a country name onto the page', () => {
  render(<Country />);
  const element = screen.getByText(/Syria/);
  expect(element).toBeInTheDocument();
});
