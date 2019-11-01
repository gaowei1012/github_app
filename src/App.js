/**
 * 应用入口，挂在Provider到组件树中
 */

'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './navigation/AppNavigation';
import store from './store';

export default class App extends React.Component {
    /// render function
    render() {
        return(
            <Provider store={store}>
                <AppNavigation/>
            </Provider>
        );
    }
}
