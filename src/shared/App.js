import React from 'react';

import { Route } from 'react-router-dom';

import { Header } from '../components/index';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import Main from '../pages/Main';

function App() {

  return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Main} />
        </ConnectedRouter>
      </React.Fragment>
  );
}

export default App;
