import * as actions from '../utills/actions';
import { put, takeLatest, all } from 'redux-saga/effects';

function* countSaga(action) {
  yield put({
    type: action.type,
    payload: action.payload,
  });
}

function* saga() {
  yield takeLatest(actions.INCREMENT, countSaga);
}

export function* incSaga() {
  yield all([saga]);
}
