import * as actions from '../../client/utills/actions';
import increment from '../../client/actions/increment';

describe('Increment action', function() {
  it('should return INCREMENT', function() {
    expect(increment(0)).toEqual({
      payload: {
        count: 0,
      },
      type: actions.INCREMENT,
    });
  });
});
