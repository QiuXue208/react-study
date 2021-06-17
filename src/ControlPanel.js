import React from 'react'
import Counter from './Counter'

class ControlPanel extends React.Component {
  constructor(props) {
    super(props)
    this.initialValue = [0, 10, 20]
    this.state = {
      sum: this.initialValue.reduce((a, b) => a + b, 0)
    }
    console.log('parent constructor')
  }
  componentWillMount() {
    console.log('parent componentWillMount')
  }
  componentDidMount() {
    console.log('parent componentDidMount')
  }
  onCountUpdate = (newValue, previousValue) => {
    const changedValue = newValue - previousValue
    this.setState({
      sum: this.state.sum + changedValue
    })
  }
  render() {
    console.log('parent render')
    return (
      <>
      <div style={{ textAlign: 'center'}}>
        <Counter onUpdate={this.onCountUpdate} caption="First" />
        <Counter onUpdate={this.onCountUpdate} initialValue={this.initialValue[1]} caption="Second" />
        <Counter onUpdate={this.onCountUpdate} initialValue={this.initialValue[2]} caption="Third" />
        {/*  forceUpdate: 强制触发组件重新渲染，这将调用组件的render方法 */}
        <div>Total count: {this.state.sum}</div>
        <button onClick={() => this.forceUpdate()}>click me to repaint!</button>
      </div>
      </>
    )
  }
}

export default ControlPanel