import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initialValue
    }
    console.log(`${props.caption} - constructor`)
  }

  componentWillMount() {
    console.log(`${this.props.caption} - componentWillMount`)
  }

  componentDidMount() {
    console.log(`${this.props.caption} - componentDidMount`)
  }

  componentWillReceiveProps() {
    console.log(`${this.props.caption} - componentWillReceiveProps`)
  }

  handleIncrement = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  handleDecrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }))
  }

  render() {
    console.log(`${this.props.caption} - render`)
    return (
      <div>
      <button onClick={this.handleIncrement}>+</button>
      <button onClick={this.handleDecrement}>-</button>
      <span>{this.props.caption} count: {this.state.count}</span>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initialValue: PropTypes.number
}

Counter.defaultProps = {
  initialValue: 0
}

export default Counter