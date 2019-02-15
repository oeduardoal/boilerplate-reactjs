import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '~/pages/Main';

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Router;
