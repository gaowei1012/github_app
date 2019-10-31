/*
 * @Author: your name
 * @Date: 2019-10-31 13:06:11
 * @LastEditTime: 2019-10-31 17:20:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github_app/src/pages/home/index.js
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import NavigationUtils from '../../utils/navigationUtils';
import DynamicTabNavigator from '../dynamicTabNavigator';

export default class HomePage extends React.Component {

  render() {
    // 保存navigation为了后面调用
    console.log(this.props.navigation)
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
})
