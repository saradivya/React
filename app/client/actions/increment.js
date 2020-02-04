import * as actions from '../utills/actions';
export const increment = count => ({
  payload: {
    count,
  },
  type: actions.INCREMENT,
});
export default increment;
