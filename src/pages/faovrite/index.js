'use strict';

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class FavoritePage extends React.Component {
  constructor(props) {
    super(props)
  }

  checkSetColor = () => {
    const { navigation } = this.props;
    navigation.setParams({
      theme: {
        tintColor: 'green',
        updateTime: new Date().getTime()
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>趋势页面</Text>
        <Button
          title='改变主题色'
          onPress={this.checkSetColor}
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
    textAlign: 'center',
  }
})
