import React from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Actions';
import store from '../Store';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getOwnState();
    console.log(`${props.caption} - constructor`);
  }

  getOwnState = () => {
    console.log(store);
    console.log(store.getState());
    return {
      value: store.getState()[this.props.caption],
    };
  };

  onChange = () => {
    this.setState(this.getOwnState());
  };

  componentWillMount() {
    console.log(`${this.props.caption} - componentWillMount`);
  }

  componentDidMount() {
    store.subscribe(this.onChange);
    console.log(`${this.props.caption} - componentDidMount`);
  }

  componentWillReceiveProps() {
    console.log(`${this.props.caption} - componentWillReceiveProps`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`${this.props.caption} - shouldComponentUpdate`);
    return (
      this.props.caption !== nextProps.caption ||
      this.state.value !== nextState.value
    );
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  handleIncrement = () => {
    // 派发action以改变store状态
    store.dispatch(Actions.increment(this.props.caption));
  };

  handleDecrement = () => {
    store.dispatch(Actions.decrement(this.props.caption));
  };

  render() {
    console.log(`${this.props.caption} - render`);
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {this.props.caption} count: {this.state.value}
        </span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initialValue: PropTypes.number,
  onUpdate: PropTypes.func,
};

Counter.defaultProps = {
  initialValue: 0,
  onUpdate: () => {},
};

export default Counter;
