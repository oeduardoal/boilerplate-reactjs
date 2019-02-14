import React from 'react';
import { Provider } from 'react-redux';
import './config/reactotron';
import store from '~/store';
import withRoot from '~/styles';
import { withStyles } from '@material-ui/core';
import Routes from '~/routes';

const styles = theme => ({ ...theme });

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default withRoot(withStyles(styles)(App));
