import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";

import App from "./App";

import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import rootReducer from "./store/index";
import Thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import Base from './components/Common/Base';

const hist = createBrowserHistory();
const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(Thunk),
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      {/* <Base history={hist}/> */}
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);