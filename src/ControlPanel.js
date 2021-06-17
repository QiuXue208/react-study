import React from 'react'
import Counter from './Counter'

class ControlPanel extends React.Component {
  constructor(props) {
    super(props)
    console.log('parent constructor')
  }
  componentWillMount() {
    console.log('parent componentWillMount')
  }
  componentDidMount() {
    console.log('parent componentDidMount')
  }
  render() {
    console.log('parent render')
    return (
      <>
      <div style={{ textAlign: 'center'}}>
        <Counter caption="First" />
        <Counter initialValue={4} caption="Second" />
        <Counter initialValue={6} caption="Third" />
        {/*  forceUpdate: 强制触发组件重新渲染，这将调用组件的render方法 */}
        <button onClick={() => this.forceUpdate()}>click me to repaint!</button>
      </div>
      </>
    )
  }
}

export default ControlPanel