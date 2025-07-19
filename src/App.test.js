/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders hello heading', () => {
  render(<App />)
  const heading = screen.getByText(/hello/i)
  expect(heading).toBeInTheDocument()
})
