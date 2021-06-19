import * as ActionTypes from './ActionTypes';

const reducer = (state, action) => {
  const { counterCaption, type } = action;
  if (type === ActionTypes.INCREMENT) {
    return { ...state, [counterCaption]: state[counterCaption] + 1 };
  } else if (type === ActionTypes.DECREMENT) {
    return { ...state, [counterCaption]: state[counterCaption] - 1 };
  } else {
    return state;
  }
};

export default reducer;
