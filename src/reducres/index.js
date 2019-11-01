/*
 * @Author: your name
 * @Date: 2019-10-31 22:00:23
 * @LastEditTime: 2019-10-31 22:13:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github_app/src/reducres/index.js
 */
'use strict';

import {combineReducers} from 'redux';
import theme from './theme';
import { rootCom, RootNavigation } from '../navigation/AppNavigation';

const navState = RootNavigation.router.getStateForAction(RootNavigation.router.getActionForPathAndParams(rootCom));

const navReducer = (state = navState, action) => {
  const nextState = RootNavigation.router.getStateForAction(action, state);
  return nextState || state;
};

const index = combineReducers({
  nav: navReducer,
  theme: theme
});

export default index;
