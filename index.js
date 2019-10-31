/*
 * @Author: your name
 * @Date: 2019-10-31 12:59:55
 * @LastEditTime: 2019-10-31 13:24:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github_app/index.js
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/navigation/AppNavigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
