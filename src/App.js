import React from 'react';
import { Provider } from 'react-redux';
import './config/reactotron';
import store from '~/store';
import withRoot from '~/styles';
import { withStyles } from '@material-ui/core';
import TodoList from './TodoList';

const styles = theme => ({ ...theme });

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default withRoot(withStyles(styles)(App));
