import React from 'react';

import { Route } from 'react-router-dom';

import { Header } from '../components/index';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import { Login, Signup, Main, Detail } from '../pages/index';
import Test from '../pages/Test';


function App() {

  return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/test" exact component={Test} />
          <Route path="/detail" exact component={Detail} />
        </ConnectedRouter>
      </React.Fragment>
  );
}

export default App;
