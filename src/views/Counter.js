import React from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Actions';
import { connect } from 'react-redux';
class Counter extends React.Component {
  render() {
    const { handleIncrement, handleDecrement, value, caption } = this.props;
    return (
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <span>
          {caption} count: {value}
        </span>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption],
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    handleDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    },
  };
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  initialValue: 0,
  value: 0,
  handleDecrement: () => {},
  handleIncrement: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
