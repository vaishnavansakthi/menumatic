/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders creative construction heading', () => {
  render(<App />)
  const heading = screen.getByText(/under construction/i)
  expect(heading).toBeInTheDocument()
})
