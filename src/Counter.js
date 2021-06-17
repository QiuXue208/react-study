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

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`${this.props.caption} - shouldComponentUpdate`)
    return this.props.caption !== nextProps.caption || this.state.count !== nextState.count
  }

  handleIncrement = () => {
    this.updateContent(true)
  }

  handleDecrement = () => {
    this.updateContent(false)
  }

  updateContent = (flg = false) => {
    const previousCount = this.state.count
    const currentCount = flg ? previousCount + 1 : previousCount - 1
    this.setState({
      count: currentCount
    })
    this.props.onUpdate(currentCount, previousCount)
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