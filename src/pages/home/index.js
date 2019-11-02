
'use strict';

import React from 'react';
import { StyleSheet } from 'react-native';
import NavigationUtils from '../../utils/navigationUtils';
import DynamicTabNavigator from '../../navigation/DynamicTabNavigator';

export default class HomePage extends React.Component {

  render() {
    // 保存navigation为了后面调用
    NavigationUtils.navigation = this.props.navigation;
    return <DynamicTabNavigator/>;
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
});
