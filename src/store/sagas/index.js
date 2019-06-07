import { all, takeLatest } from 'redux-saga/effects';
import { FavoriteTypes } from '~/store/ducks/favorites';
import { addFavorites } from './favorites';

export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_FAVORITE_REQUEST, addFavorites)]);
}
