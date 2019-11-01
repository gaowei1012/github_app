'use strict';

export default class NavigationUtils {
  /**
   * 跳转页面
   * @param {params} params
   * @param {pages} page
   */
  static goToPage(params, page) {
    //  const { navigation } = params;
    const navigation = NavigationUtils.navigation;
    if (!navigation) {
      console.log('navigation not fail');
      return;
    }
    navigation.navigate(page, {...params});
  }
  /**
   * 重置到首页
   * @param params
   */
  static restToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('Main');
  }
  /**
   * 返回上一页
   * @param navigation
   */
  static goToBack(navigation) {
    navigation.goBack();
  }
}
