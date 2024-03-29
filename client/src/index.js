import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./js/store/Store";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  rootElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
