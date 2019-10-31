/*
 * @Author: your name
 * @Date: 2019-10-31 13:06:36
 * @LastEditTime: 2019-10-31 18:29:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github_app/src/pages/weclom/index.js
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationUtils from '../../utils/navigationUtils';

export default class WelcomPage extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
     this.timer = setTimeout(() => {
      NavigationUtils.restToHomePage({
        navigation: this.props.navigation
      });
    }, 200);
  }

  componentWillMount() {
    this.timer && clearTimeout(this.timer)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>welcom page</Text>
      </View>
    )
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
