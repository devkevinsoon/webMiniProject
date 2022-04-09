import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './shared/App';
import store from "./redux/configureStore"
import { Provider } from 'react-redux';

//react-dom v18 이후 방식 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
