import Types from '../types';
import DataStore, {FLAG_STORAGE} from '../../expand/dao/DataStore';
import {handleData} from '../ActionUtil'
import {Type} from 'react-native/ReactCommon/hermes/inspector/tools/msggen/src/Type';

/**
 * 处理加载数据 async action
 * @param storeName
 * @param url
 * @param pageSize
 * @returns {Function}
 */
export function onTrendingRefresh(storeName, url, pageSize) {
    return dispatch => {
        dispatch({type: Types.TRENDING_REFRESH, storeName: storeName});
        let dataStore = new DataStore();
        dataStore.fetchData(url, FLAG_STORAGE.flag_trending)//async actions
            .then(data => {
                handleData(Types.TRENDING_REFRESH_SUCCESS, dispatch, storeName, data, pageSize);
            })
            .catch(error => {
                dispatch({
                    type: Types.TRENDING_REFRESH_FAIL,
                    storeName,
                    error
                })
            })
    }
}

export function onTrendingMoreData(storeName, pageIndex, pageSize, dataArray = [], callback) {
    return dispatch => {
        setTimeout(() => {
            /// 全部数据已加载完毕
            if ((pageIndex-1)*pageSize >= dataArray.length) {
                if (typeof callback == 'function') {
                    callback('no more');
                }
                dispatch({
                    type: Types.TRENDING_LOAD_MORE_FAIL,
                    error: 'no more',
                    storeName: storeName,
                    pageIndex: --pageIndex,
                    projectModes: dataArray
                });
            } else {
                let max = pageSize * pageIndex > dataArray.length ? dataArray.length : pageIndex * pageSize;
                dispatch({
                    type: Types.TRENDING_LOAD_MORE_SUCCESS,
                    storeName,
                    pageIndex,
                    projectModes: dataArray.slice(0, max)
                });

            }
        }, 500);
    }
}
