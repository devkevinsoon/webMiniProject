import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

function App() {

  return (
      <React.Fragment>
        
        <ConnectedRouter history={history}>
          
        </ConnectedRouter>
        
      </React.Fragment>
  );
}

export default App;
