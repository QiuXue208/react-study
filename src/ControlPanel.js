import React from 'react'
import Counter from './Counter'

class ControlPanel extends React.Component {
  render() {
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