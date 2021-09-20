import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Index from '../index'

test('Should render index page', () => {
  render(<Index />)
  expect(screen.getByTestId('test-1')).toBeInTheDocument()
})

test('Should matches snapshot', () => {
  const tree = renderer.create(<Index />)
  expect(tree).toMatchSnapshot()
})
