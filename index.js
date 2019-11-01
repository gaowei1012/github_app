/*
 * @Author: your name
 * @Date: 2019-10-31 12:59:55
 * @LastEditTime: 2019-11-01 10:19:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github_app/index.js
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
