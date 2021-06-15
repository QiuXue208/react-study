import React from 'react';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  clickButton = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
      <button onClick={this.clickButton}>Click Me</button>
      <div>click count: {this.state.count}</div>
      </>
    )
  }
}

export default ClickCounter;