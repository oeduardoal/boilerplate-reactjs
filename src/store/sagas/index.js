import { all, takeLatest } from 'redux-saga/effects';
import { Types as FavoriteTypes } from '~/store/ducks/favorites';
import { addFavorites } from './favorites';

export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorites)]);
}
