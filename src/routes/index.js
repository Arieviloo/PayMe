import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import Login from '../pages/Login/index';
import Register from '../pages/Register/index';
import Profile from '../pages/Profile/index';
import Income from '../pages/Income/index';
import firebase from '../services/firebase';
import '../style.css';

export default function Routes() {
  // const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  // useEffect(() => {
  //   firebase.isInitialized().then(val => {
  //     setFirebaseInitialized(val);
  //   });
  // });
  // return firebaseInitialized !== false ? (
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
  // ) : (
  //   <div className="loader">
  //     <CircularProgress />
  //   </div>
  // );
}
