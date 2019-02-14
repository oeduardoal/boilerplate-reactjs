import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';
import { addFavoriteSuccess, addFavoriteFailure } from '~/store/actions/favorites';

export function* addFavorites(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);
    const isDuplicated = yield select(state => state.favorites.data.find(favorite => favorite.id === data.id));

    if (isDuplicated) {
      yield put(addFavoriteFailure('Repositório duplicado'));
    } else {
      const repositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      };

      yield put(addFavoriteSuccess(repositoryData));
    }
  } catch (err) {
    yield put(addFavoriteFailure('Repositório não encontrado!'));
  }
}
