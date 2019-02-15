import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '~/pages/main';
import Footer from '~/components/Footer';

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Router;
