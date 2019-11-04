import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/index';
import Register from '../pages/Register/index';
import Profile from '../pages/Profile/index';
import Income from '../pages/Income/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/income" component={Income} />
      </Switch>
    </BrowserRouter>
  );
}
