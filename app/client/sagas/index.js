import { all } from 'redux-saga/effects';

import { incSaga } from './fetchCount';

export default function* rootSaga() {
  yield all([incSaga]);
}
