import {  takeLatest } from 'redux-saga/effects';
import * as actions from '../utills/actions';
import countSaga from './fetchCount';

export default function* rootSaga() {
  yield takeLatest(actions.INCREMENT, countSaga);
}
