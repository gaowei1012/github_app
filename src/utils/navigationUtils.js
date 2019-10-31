/*
 * @Author: your name
 * @Date: 2019-10-31 13:33:16
 * @LastEditTime: 2019-10-31 16:01:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /github_app/src/utils/navigationUtils.js
 */

export default class NavigationUtils {
  /**
   * 跳转页面
   * @param {params} params 
   * @param {page} page 
   */
  static goToPage(params, page) {
    //  const { navigation } = params;
    const navigation = NavigationUtils.navigation;
    if (!navigation) {
      console.log('navigation not fanil')
      return;
    } 
    navigation.navigate(page, {...params})
  }
  // 重置到首页
  static restToHomePage(params) {
    const { navigation } = params;
    navigation.navigate('Main');
  }
  // 返回上一页
  static goToBack(navigation) {
    navigation.goBack();
  }
}
