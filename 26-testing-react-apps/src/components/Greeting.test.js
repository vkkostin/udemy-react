import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting component', () => {
  test('renders Hello World as text', () => {
    render(<Greeting />)
    const helloWorldElement = screen.getByText('Hello World!')
    expect(helloWorldElement).toBeInTheDocument()
  })

  test('renders good to see you if the button was not clicked', () => {
    render(<Greeting />)
    const pElement = screen.getByText('It\'s good to see you!')
    expect(pElement).toBeInTheDocument()
  })

  test('renders Changed if the button was clicked', () => {
    render(<Greeting />)

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    const pElement = screen.getByText('Changed!')
    expect(pElement).toBeInTheDocument()
  })

  test('does not render good to see you if the button was clicked', () => {
    render(<Greeting />)

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    const pElement = screen.queryByText('It\'s good to see you!')
    expect(pElement).toBeNull()
  })
})
