import React from 'react';
import PropTypes from 'prop-types';
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

export default Counter;
