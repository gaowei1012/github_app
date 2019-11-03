/*
 * @Author: your name
 * @Date: 2019-10-31 13:49:12
 * @LastEditTime: 2019-10-31 18:37:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github_app/src/pages/my/index.js
 */
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigationBar from '../../common/NavigarionBar';
const THEME_COLOR = '#678';

export default class MyPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const navigationBar = <NavigationBar
      title={'我的'}
    />;

    return (
      <View style={styles.container}>
        {navigationBar}
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.onClick(null)}
          />
          <View style={styles.row}>
            <Ionicons
                name={null}
                size={40}
                style={{
                  color: THEME_COLOR,
                  marginRight: 10
                }}
            />
            <Text>Github user</Text>
          </View>
          <Ionicons
            name={'ios-arrow-forward'}
            size={16}
            style={{
              marginRight: 10,
              alignSelf: 'center',
              color: THEME_COLOR
            }}
          />
        </ScrollView>
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
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
