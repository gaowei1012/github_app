'use strict';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationBar from '../../common/NavigarionBar';

export default class FavoritePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const navigationBar = <NavigationBar
      title={'收藏'}
    />;
    return (
      <View>
        {navigationBar}
        <Text style={styles.text}>收藏页面</Text>
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
});
