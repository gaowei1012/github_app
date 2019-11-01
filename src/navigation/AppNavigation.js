'use strict';

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import HomePage from '../pages/home';
import WelcomPage from '../pages/weclom';
import DetailPage from '../pages/detail';
import {connect} from 'react-redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';

export const rootCom = 'Init'; // 根路由

const InitNavigator = createStackNavigator({
  WelcomPage: {
    screen: WelcomPage,
    navigationOptions: {
      header: null,
    },
  },
});

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      header: null,
    },
  },
});

export const RootNavigation = createAppContainer(
  createSwitchNavigator(
    {
      Init: InitNavigator,
      Main: MainNavigator,
    },
    {
      navigationOptions: {
        header: null,
      },
    },
  ),
);

/// create middleware
export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
    'root',
);

const AppWithNavigationState = createReduxContainer(RootNavigation, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
