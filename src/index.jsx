// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// internal modules
import CarsIndex from './containers/cars_index';

// state and reducers
import carsReducer from './reducers/cars_reducer';

import '../assets/stylesheets/application.scss';

const initialState = {
  garage: "Gary's gruesome garage",
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
      // <Route path="/cars/new" component={CarsNew} />
