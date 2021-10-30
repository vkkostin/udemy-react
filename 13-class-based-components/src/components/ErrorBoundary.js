import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = { errorMessage: '' }
  }

  componentDidCatch(error) {
    this.setState({ errorMessage: error.message })
  }

  render() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>
    }
    return this.props.children
  }
}

export default ErrorBoundary