import { createStore, compose, applyMiddleware } from 'redux';

import reduces from './reducers';

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(reduces, compose(applyMiddleware(...[])));

export default store;
