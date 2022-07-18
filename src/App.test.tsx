import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders gratitude', () => {
  render(<App />);
  const linkElement = screen.getByText(/gratitude/i);
  expect(linkElement).toBeInTheDocument();
});
