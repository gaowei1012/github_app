'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducres';
import { middleware } from '../navigation/AppNavigation';
import {logger} from '../middleware/logger';

const middlewares = [
  middleware,
  thunk,
  logger
];

export default createStore(reducers, applyMiddleware(...middlewares));
