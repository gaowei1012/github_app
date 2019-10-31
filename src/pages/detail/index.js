/*
 * @Author: your name
 * @Date: 2019-10-31 13:05:07
 * @LastEditTime: 2019-10-31 13:30:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github_app/src/pages/detail/index.js
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DetailPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>detail page</Text>
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
