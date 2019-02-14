import { all, takeLatest } from 'redux-saga/effects';
import { addFavorites } from './favorites';

export default function* rootSaga() {
  yield all([takeLatest('ADD_FAVORITE_REQUEST', addFavorites)]);
}
