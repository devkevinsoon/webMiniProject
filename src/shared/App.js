import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import { Route } from 'react-router-dom';
import { Login, Signup } from '../pages/index';

function App() {

  return (
      <React.Fragment>
        
        <ConnectedRouter history={history}>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          
        </ConnectedRouter>
        
      </React.Fragment>
  );
}

export default App;
