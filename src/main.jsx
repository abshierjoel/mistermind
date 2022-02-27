import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Elm } from './AppState.elm';

const appState = Elm.AppState.init({
  node: document.getElementById('elm-root'),
});

ReactDOM.render(
  <React.StrictMode>
    <App ports={appState.ports} />
  </React.StrictMode>,
  document.getElementById('root')
);
