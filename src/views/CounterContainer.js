import React from 'react';
import store from '../Store';
import Counter from './Counter';
import * as Actions from '../Actions';

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getOwnState();
  }

  getOwnState = () => {
    return {
      value: store.getState()[this.props.caption],
    };
  };
  onChange = () => {
    this.setState(this.getOwnState());
  };
  componentDidMount() {
    store.subscribe(this.onChange);
  }
  componentWillUnmount() {}

  handleIncrement = () => {
    store.dispatch(Actions.increment(this.props.caption));
  };
  handleDecrement = () => {
    store.dispatch(Actions.decrement(this.props.caption));
  };

  render() {
    return (
      <Counter
        caption={this.props.caption}
        {...this.state}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
      />
    );
  }
}

export default CounterContainer;
