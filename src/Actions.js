import * as ActionTypes from './ActionTypes';

export const increment = (counterCaption) => ({
  type: ActionTypes.INCREMENT,
  counterCaption,
});

export const decrement = (counterCaption) => ({
  type: ActionTypes.DECREMENT,
  counterCaption,
});
