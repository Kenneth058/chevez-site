import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '../index'

test('Should render index page', () => {
  render(<Index />)
  expect(screen.getByText('Hola mundo a mi canal')).toBeInTheDocument()
})
