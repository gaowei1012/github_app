/*
 * @Author: your name
 * @Date: 2019-10-31 13:49:12
 * @LastEditTime: 2019-10-31 18:37:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github_app/src/pages/my/index.js
 */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class MyPage extends React.Component {
  constructor(props) {
    super(props)
  }

  /// 修改主题色
  checkSetTheme = () => {
    console.log('log =------=')
    const { navigation } = this.props;
    navigation.setParams({
      theme: {
        tintColor: 'blue',
        updateTime: new Date().getTime()
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>我的页面</Text>
        <Button
          title='点我修改主题色'
          onPress={this.checkSetTheme}
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
