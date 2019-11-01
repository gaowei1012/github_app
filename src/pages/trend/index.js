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
import { connect } from 'react-redux';
import actions from '../../action/index';

class TrendPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>趋势页面</Text>
        <Button
          title='点我改变主题色'
          onPress={() => {
            this.props.onThemeChange('red');
          }}
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
});

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendPage);
