'use strict';

import React from 'react';
import { FlatList, View, StyleSheet, RefreshControl, ActivityIndicator, Text } from 'react-native';
import {connect} from 'react-redux';
import actions from '../../action/index';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import NavigationUtils from '../../utils/navigationUtils';
import { SafeAreaView } from 'react-navigation';
import popular from '../../reducres/popular/popular';
import PopularItem from '../../common/PopularItem';
import Toast from 'react-native-easy-toast';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_TITLE_COLOR = 'blue';
const THEME_TITLE = 'loading';

export default class PopularPage extends React.Component {

  constructor(props) {
    super(props);
    this.tabNams = ['Java', 'Android', 'Javascript', 'nodejs', 'Flutter', 'GoLang', 'Python'];
  }

  _genTab() {
    const tabs = {};
    this.tabNams.forEach((item,index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTabPage {...props} tabLabel={item}/>,
        navigationOptions: {
          title: item
        }
      }
    });
    return tabs;
  }

  _topNavigator() {
    return (
      createMaterialTopTabNavigator(
        this._genTab(), {
          tabBarOptions: {
            tabStyle: styles.tabBarStyle,
            upperCaseLabel: false,
            scrollEnabled: true, // 是否滚动
            style: {
              backgroundColor: '#678'
            },
            indicatorStyle: styles.indicatorStyle,
            labelStyle: styles.labelStyle
          }
        }
      )
    )
  }

  render() {
    const Tab = createAppContainer(this._topNavigator());
    return (
      <View style={{flex: 1, marginTop: 30}}>
        <Tab/>
      </View>
    );
  }
}

const pageSize = 10;
class PopularTab extends React.Component {
  constructor(porps) {
    super(porps);
    const {tabLabel} = this.props;
    this.storeName = tabLabel;
  }

  componentDidMount() {
    this.loadData()
  }

  loadData(loadMore) {
    const {onPopularLoadData, onPopularLoadMore} = this.props;
    const store = this._store();
    const url = this.getFetchUrl(this.storeName);
    if (loadMore) {
      onPopularLoadMore(this.storeName, ++store.pageIndex, pageSize, store.items, callback => {
        this.refs.toast.show('没有更多了');
      });
    } else {
      onPopularLoadData(this.storeName, url, pageSize);
    }
  }

  // more data
  _store() {
    const  {popular} = this.props;
    let store = popular[this.storeName];
    if (!store) {
      store = {
        items: [],
        isLoading: false, // 默认隐藏
        projectModes: [], // 要显示数据
        hideLoadingMore: true, // 默认显示
      };
    }
    return store;
  };

  getFetchUrl(key) {
    return URL + key + QUERY_STR;
  }

  renderItem(data) {
    const item = data.item;
    return <PopularItem
      item={item}
      onSelect={() => {}}
    />
  }

  genIndicator() {
    return this._store().hideLoadingMore ? null :
        <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
            />
            <Text>正在加载更多</Text>
        </View>
  }

  render() {
    let store = this._store();
    console.log('-----store----', store);
    return (
        // 适配 iphone x 齐刘海
        <SafeAreaView style={styles.container}>
          <FlatList
              data={store.projectModes}
              renderItem={data => this.renderItem(data)}
              keyExtractor={item => "" + item.id}
              refreshControl={
                <RefreshControl
                  title={THEME_TITLE}
                  titleColor={THEME_TITLE_COLOR}
                  colors={[THEME_TITLE_COLOR]}
                  refreshing={store.isLoading}
                  tintColor={THEME_TITLE_COLOR}
                  onRefresh={() => this.loadData()}
                />
              }
              ListFooterComponent={() => this.genIndicator()}
              onEndReached={() => {
                this.loadData(true);
              }}
              onEndReachedThreshold={0.5}
              onMomentumScrollBegin={() => {}}
          />
          <Toast
            ref={'toast'}
            position={'center'}
          />
        </SafeAreaView>
    );
  }
}

/// 订阅store
const mapStateToProps = state => ({
  popular: state.popular
});
/// dispatch 修改数据
const mapDispatchToProps = dispatch => ({
  onPopularLoadData: (storeName, url, pageSize) =>
      dispatch(actions.popularLoadRefresh(storeName, url, pageSize)),
  onPopularLoadMore: (storeName, pageIndex, pageSize, items, callback) =>
      dispatch(actions.popularRefreshMore(storeName, pageIndex, pageSize, items, callback))
});

// 高阶函数
const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginTop: -20,
    textAlign: 'center'
  },
  tabBarStyle: {
    minWidth: 20
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: '#fff'
  },
  labelStyle: {
    fontSize: 16,
    marginTop: 10
  },
  indicatorContainer: {
    alignItems: 'center'
  },
  indicator: {
    color: 'red',
    margin: 10
  }
});
