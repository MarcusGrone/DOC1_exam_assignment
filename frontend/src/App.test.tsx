import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Stories heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Stories/i);
  expect(headingElement).toBeInTheDocument();
});
