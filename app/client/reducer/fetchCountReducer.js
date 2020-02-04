import * as actions from '../utills/actions';

const defaultState = {
  count: 0,
};

const fetchCountReducer = (state = defaultState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case actions.INCREMENT:
      return Object.assign({}, state, {
        count: payload.count + 1,
      });
    default:
      return state;
  }
};

export default fetchCountReducer;
