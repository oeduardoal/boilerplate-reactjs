import React from 'react';
import withRoot from '~/styles';
import { withStyles } from '@material-ui/core';

const styles = theme => ({ ...theme });

const Main = () => <h1>Main</h1>;

export default withRoot(withStyles(styles)(Main));
