import { call, put, takeLatest, all } from 'redux-saga/effects';
import callFetchApi from '../../services/api';

export default  function* countSaga() {
  const api = '/api/posts';
  const response = yield call(callFetchApi, api, {}, 'GET');
  console.log(response);
}

// function* saga() {
//   console.log('counting');
//   console.log('data');
//
//
// }

// export function* incSaga() {
//   console.log('initial');
//   yield all([saga]);
// }
