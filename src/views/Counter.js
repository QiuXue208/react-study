import React from 'react'
import PropTypes from 'prop-types'
import CounterStore from '../stores/CounterStore'
import * as Actions from '../Actions'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    }
    console.log(`${props.caption} - constructor`)
  }

  componentWillMount() {
    console.log(`${this.props.caption} - componentWillMount`)
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onchange)
    console.log(`${this.props.caption} - componentDidMount`)
  }

  componentWillReceiveProps() {
    console.log(`${this.props.caption} - componentWillReceiveProps`)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`${this.props.caption} - shouldComponentUpdate`)
    return this.props.caption !== nextProps.caption || this.state.count !== nextState.count
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onchange)
  }

  handleIncrement = () => {
    Actions.increment(this.props.caption)
  }

  handleDecrement = () => {
    Actions.decrement(this.props.caption)
  }

  onchange = () => {
    const newValue = CounterStore.getCounterValues()[this.props.caption]
    this.setState({
      count: newValue
    })
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
  initialValue: PropTypes.number,
  onUpdate: PropTypes.func
}

Counter.defaultProps = {
  initialValue: 0,
  onUpdate: () => {}
}

export default Counter