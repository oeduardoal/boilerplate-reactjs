import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';
import FavoriteActions from '~/store/ducks/favorites';

export function* addFavorites(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);
    const isDuplicated = yield select((state) => {
      const { favorites } = state;
      return favorites.data.find(favorite => favorite.id === data.id);
    });

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteFailure('Repositório duplicado'));
    } else {
      const repositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url
      };

      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoriteFailure('Repositório não encontrado!'));
  }
}
