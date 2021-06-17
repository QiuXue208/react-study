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
        <Counter caption="First" />
        <Counter initialValue={4} caption="Second" />
        <Counter initialValue={6} caption="Third" />
      </>
    )
  }
}

export default ControlPanel