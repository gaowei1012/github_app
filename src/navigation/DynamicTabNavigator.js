
'use strict';

import React from 'react';
import { connect } from 'react-redux';
import {
    createBottomTabNavigator,
    createAppContainer,
    BottomTabBar
} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import NavigationUtils from '../utils/navigationUtils';
import PopularPage from '../pages/hot';
import MyPage from '../pages/my';
import FaovritePage from '../pages/faovrite';
import TrendingPage from '../pages/trend';

const TABS = {
    HotPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome5
                    name={'hotjar'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    TrendPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
                <Feather
                    name={'trending-up'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    FavoritePage: {
        screen: FaovritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={"favorite"}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    }
};
const props = {};
class DynamicTabNavigator extends React.Component<props> {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    _tabNavgator() {
        /// 如果有当前Tabs
        if (this.Tabs) {
            return this.Tabs;
        }
        const { HotPage, FavoritePage, TrendPage, MyPage } = TABS;
        const tabs = {HotPage, TrendPage, FaovritePage: FavoritePage, MyPage};
        HotPage.navigationOptions.tabBarLabel = '最新';
        return this.Tabs = createBottomTabNavigator(tabs, {
                tabBarComponent: props => {
                    return <TabBarComponent {...props} theme={this.props.theme}/>
                }
            }
        )
    }

    render() {
        // 保存navigation为了后面调用
        //console.log(this.props.navigation);
        NavigationUtils.navigation = this.props.navigation;
        const Tab = createAppContainer(this._tabNavgator());
        return <Tab/>
    }
}

class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.theme = {// 更换主题
            tintColor: props.actionTintColor,
            updateTime: new Date().getTime()
        }
    }

    render() {
        // const {routes, index} = this.props.navigation.state;
        // /// 设置改变主题色
        // if (routes[index].params) {
        //     const { theme } = routes[index].params;
        //     if (theme && theme.updateTime>this.theme.updateTime) {
        //         this.theme = theme;
        //     }
        // }
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.props.theme}
        />;
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme
});

export default connect(mapStateToProps)(DynamicTabNavigator);
