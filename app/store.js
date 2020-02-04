import { createStore, applyMiddleware } from 'redux';
import reducer from './client/reducer';
import  { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import  createSagaMiddleware  from 'redux-saga';
import rootSaga from './client/sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, logger)));
  sagaMiddleware.run(rootSaga);
  return store;
}
