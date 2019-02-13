import React from 'react';
import withRoot from '~/styles';
import { withStyles } from '@material-ui/core';

const styles = theme => ({ ...theme });

const App = () => <h1>Edu</h1>;

export default withRoot(withStyles(styles)(App));
