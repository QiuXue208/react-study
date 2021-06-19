import React from 'react';
import { connect } from 'react-redux';

class Summary extends React.Component {
  render() {
    return <div>Total Count: {this.props.sum}</div>;
  }
}

function mapStateToProps(state, props) {
  let sum = 0;
  for (let key in state) {
    if (state.hasOwnProperty(key)) {
      sum += state[key];
    }
  }
  return {
    sum: sum,
  };
}

export default connect(mapStateToProps)(Summary);
