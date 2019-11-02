import React from 'react';
import {ViewPropTypes, View, Text, StyleSheet, StatusBar, Platform} from 'react-native';
import PropTypes from 'prop-types';

const NAV_BAR_H_IOS = 44; // ios
const NAV_BAR_H_ANDROID = 50; // android
const STATUS_BAR_H = 20;
const StatusBarShape = {
    barStyle: PropTypes.oneOf(['light-content', 'default']),
    hidden: PropTypes.bool,
    backgroundColor: PropTypes.string
};

export default class NavigationBar extends React.Component {

    static propTypes = {
        style: ViewPropTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        titleLayoutStyle: ViewPropTypes.style,
        statusBar: PropTypes.shape(StatusBarShape),
        rightButton: PropTypes.element,
        leftButton: PropTypes.element
    };

    static defaultProps = {
        statusBar: {
            barStyle: 'light-content',
            hidden: false
        }
    };

    render() {
        let statusBar = !this.props.statusBar.hidden ?
            <View style={styles.statusBar}>
                <StatusBar {...this.props.statusBar}/>
            </View> : null;
        let titleView = this.props.titleView ? this.props.titleView :
            <Text ellipsizeMode='head' numberOfLines={1} style={styles.title}>{this.props.title}</Text>;
        let content = this.props.hide ? null :
            <View style={styles.navBar}>
                {this.getButtonElement(this.props.leftButton)}
                <View style={[styles.navBarTitleContainer, this.props.titleLayoutStyle]}>
                    {titleView}
                </View>
                {this.getButtonElement(this.props.rightButton)}
            </View>;
        return (
            <View style={[styles.container, this.props.style]}>
                {statusBar}
                {content}
            </View>
        );
    }

    /**
     * @param ele element 元素节点
     * @returns {*}
     */
    getButtonElement(ele) {
        return <View style={styles.navBarButton}>
            {ele ? ele : null}
        </View>;
    }
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? NAV_BAR_H_IOS : NAV_BAR_H_ANDROID// 根据平台设置高度
    },
    navBarTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    navBarButton: {
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#2196f3',
    },
    title: {
        fontSize: 16,
        color: '#fff',
    },
    statusBar: {
        height: Platform.OS === 'ios' ? NAV_BAR_H_IOS : null
    }
});
