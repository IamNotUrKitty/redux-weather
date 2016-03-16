import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import * as city from './reducers/city';
import promiseMiddleware from './utils/promiseMiddleware';
import Container from './components/container';
import persistState from 'redux-localstorage';

const reducer = combineReducers(city);
const createPersistentStore = compose(persistState())(createStore);
const store = applyMiddleware(promiseMiddleware)(createPersistentStore)(reducer);

require('../css/styl.styl');

class APP extends Component {
  render() {
    return (<Provider store={store}>
      <Container />
    </Provider>);
  }
}

ReactDOM.render(<APP />, document.getElementById('app'));
