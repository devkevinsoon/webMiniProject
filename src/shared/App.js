import React from 'react';

import { Route } from 'react-router-dom';

import { Header } from '../components/index';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Main from '../pages/Main';

import { Route } from 'react-router-dom';
import { Login, Signup } from '../pages/index';

function App() {

  return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </ConnectedRouter>
      </React.Fragment>
  );
}

export default App;
