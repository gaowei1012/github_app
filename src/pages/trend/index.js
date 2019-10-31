/*
 * @Author: your name
 * @Date: 2019-10-31 13:44:35
 * @LastEditTime: 2019-10-31 17:34:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github_app/src/pages/trend/index.js
 */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class TrendPage extends React.Component {
  constructor(props) {
    super(props)
  }

  /// 改变主题色
  checkThemeColor = () => {
    console.log('set params')
    const { navigation } = this.props;
    navigation.setParams({
      theme: {
        tintColor: 'red',
        updateTime: new Date().getTime()
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>趋势页面</Text>
        <Button
          title='点我改变主题色'
          onPress={this.checkThemeColor}
        />
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
  }
})
