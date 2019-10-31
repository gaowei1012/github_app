/*
 * @Author: your name
 * @Date: 2019-10-31 13:07:59
 * @LastEditTime: 2019-10-31 13:27:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github_app/src/navigation/AppNavigation.js
 */

import { 
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import HomePage from '../pages/home';
import WelcomPage from '../pages/weclom';
import DetailPage from '../pages/detail';

const InitNavigator = createStackNavigator({
  WelcomPage: {
    screen: WelcomPage,
    navigationOptions: {
      header: null
    }
  }
})

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      header: null
    }
  }
})

export default createAppContainer(createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator
}, {
  navigationOptions: {
    header: null
  }
}))
