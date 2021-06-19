import React from 'react';

class Summary extends React.Component {
  render() {
    return <div>Total Count: {this.props.sum}</div>;
  }
}

export default Summary;
