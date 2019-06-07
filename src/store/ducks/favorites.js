import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addFavoriteRequest: null
});

export const FavoriteTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  loading: false,
  data: []
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_REQUEST]: state => state.merge({ loading: true })
});
