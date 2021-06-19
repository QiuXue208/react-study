import React from 'react';
import store from '../Store';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getOwnState();
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  onChange = () => {
    this.setState(this.getOwnState());
  };

  getOwnState = () => {
    const state = store.getState();
    let sum = 0;
    for (let key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return { sum: sum };
  };

  render() {
    return <div>Total Count: {this.state.sum}</div>;
  }
}

export default Summary;
