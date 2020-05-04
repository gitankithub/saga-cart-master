import { takeLatest, call, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as types from './constants';
import { getUserInfoSuccessAction, getUserInfoFailureAction } from './actions';

function* getUserInfoSaga(action) {
  console.log(action);
  const { userId } = action;
  const apiUrl = 'api/users/';
  console.log(action);
  try {
    const results = yield call(fetch, apiUrl);
    const resultsResolved = yield results.json();

    if (resultsResolved) {
      yield put(getUserInfoSuccessAction(resultsResolved));
    }
  } catch (error) {
    console.error('Error while getting user info', error);
    yield put(getUserInfoFailureAction(error));
  }
}
// Individual exports for testing
export default function* manageCartSaga() {
  yield takeLatest(types.GET_USERINFO, getUserInfoSaga);
}
