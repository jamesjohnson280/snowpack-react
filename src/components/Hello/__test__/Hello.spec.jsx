import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from '../Hello';

test('Hello component is rendered', () => {
  render(<Hello />);
  expect(screen.getByText('Hello Snowpack!')).toBeTruthy();
});