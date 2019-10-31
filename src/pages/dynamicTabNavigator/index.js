/*
 * @Author: your name
 * @Date: 2019-10-31 13:06:11
 * @LastEditTime: 2019-10-31 17:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github_app/src/pages/home/index.js
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { 
  createBottomTabNavigator,
  createAppContainer,
  BottomTabBar
} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import NavigationUtils from '../../utils/navigationUtils'
import HotPage from '../hot';
import MyPage from '../my';
import FaovritePage from '../faovrite';
import TrendPage from '../trend';

const TABS = {
  HotPage: {
    screen: HotPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <FontAwesome5
          name={'hotjar'}
          size={26}
          style={{color: tintColor}}
        />
      )
    }
  },
  TrendPage: {
    screen: TrendPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Feather
          name={'trending-up'}
          size={26}
          style={{color: tintColor}}
        />
      )
    }
  },
  FaovritePage: {
    screen: FaovritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons
          name={"favorite"}
          size={26}
          style={{color: tintColor}}
        />
      )
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <FontAwesome
          name={'user'}
          size={26}
          style={{color: tintColor}}
        />
      )
    }
  }
}

export default class dynamicTabNavigator extends React.Component {

  constructor(props) {
    super(props)
    console.disableYellowBox = true;
  }

  _tabNavgator() {
    const { HotPage, FaovritePage, TrendPage, MyPage } = TABS;
    const tabs = {HotPage, TrendPage, FaovritePage, MyPage};
    HotPage.navigationOptions.tabBarLabel = '最热';
    return (
     createBottomTabNavigator(tabs, {
       tabBarComponent: TabBarComponent
     })
    )
  }

  render() {
    // 保存navigation为了后面调用
    console.log(this.props.navigation)
    NavigationUtils.navigation = this.props.navigation;
    const Tab = createAppContainer(this._tabNavgator());
    return <Tab/>
  }
}

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.theme = {// 更换主题
      tintColor: props.actionTintColor,
      updateTime: new Date().getTime()
    }
  }

  render() {
    const {routes, index} = this.props.navigation.state;
    /// 设置改变主题色
    if (routes[index].params) {
      const { theme } = routes[index].params;
      if (theme && theme.updateTime>this.theme.updateTime) {
        this.theme = theme;
      }
    }
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.theme.tintColor || this.props.actionTintColor}
    />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: '#000',
    textAlign: "center"
  }
})
