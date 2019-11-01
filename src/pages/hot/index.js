'use strict';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import NavigationUtils from '../../utils/navigationUtils'

export default class HotPage extends React.Component {

  constructor(props) {
    super(props);
    this.tabNams = ['Java', 'Android', 'JavaScript', 'Nodejs', 'Chrome', 'Flutter', 'GoLang', 'Python'];
  }

  _genTab() {
    const tabs = {};
    this.tabNams.forEach((item,index) => {
      tabs[`tab${index}`] = {
        screen: props => <NavigationTab {...props} tabLabel={item}/>,
        navigationOptions: {
          title: item
        }
      }
    });
    return tabs;
  }

  _topNavigator() {
    return (
      createMaterialTopTabNavigator(
        this._genTab(), {
          tabBarOptions: {
            tabStyle: styles.tabBarStyle,
            upperCaseLabel: false,
            scrollEnabled: true, // 是否滚动
            style: {
              backgroundColor: '#678'
            },
            indicatorStyle: styles.indicatorStyle,
            labelStyle: styles.labelStyle
          }
        }
      )
    )
  }

  render() {
    const Tab = createAppContainer(this._topNavigator());
    return (
      <View style={{flex: 1, marginTop: 30}}>
        <Tab/>
      </View>
    );
  }
}

class NavigationTab extends React.Component {

  goToPageHandler = () => {
    const {navigation} = this.props;
    NavigationUtils.goToPage({
      navigation
    }, 'DetailPageNavgation');
  };

  render() {
    const {tabLabel} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{tabLabel}</Text>
        <Text style={styles.text} onPress={this.goToPageHandler}>跳转到详情页面</Text>
      </View>
    );
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
    textAlign: 'center'
  },
  tabBarStyle: {
    minWidth: 20
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: '#fff'
  },
  labelStyle: {
    fontSize: 16,
    marginTop: 10
  }
})
