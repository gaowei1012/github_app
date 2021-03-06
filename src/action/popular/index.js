import Types from '../types';
import DataStore, {FLAG_STORAGE} from '../../expand/dao/DataStore';
import {handleData} from '../ActionUtil';
/**
 * 异步获取action
 * @param stateName
 * @param url
 * @param pageSize
 */
export function popularLoadRefresh(storeName, url, pageSize) {
    return dispatch => {
        dispatch({type: Types.POPULAR_REFRESH, storeName: storeName});
        // 异步获取数据
        let dataStore = new DataStore();
        dataStore.fetchData(url, FLAG_STORAGE.flag_popular) // 异步获取数据
            .then(data => {
                handleData(Types.POPULAR_UPLOAD_SUCCESS, dispatch, storeName, data, pageSize);
            })
            .catch(error => {
                console.log(error);
                dispatch({type: Types.POPULAR_UPLOAD_FAIL, storeName, error})
            })
    }
}

/**
 * popular refresh more data
 * @param storeName
 * @param pageIndex
 * @param pageSize
 * @param dataArray
 * @param callback
 * @returns {Function}
 */
export function popularRefreshMore(storeName, pageIndex, pageSize, dataArray = [], callback) {
    return dispatch => {
        setTimeout(() => {
            /// 全部数据已加载完毕
            if ((pageIndex-1)*pageSize >= dataArray.length) {
                if (typeof callback == 'function') {
                    callback('no more');
                }
                dispatch({
                    type: Types.POPULAR_REFRESH_MORE_FAIL,
                    error: 'no more',
                    storeName: storeName,
                    pageIndex: --pageIndex,
                    projectModes: dataArray
                });
            } else {
                let max = pageSize * pageIndex > dataArray.length ? dataArray.length : pageIndex * pageSize;
                dispatch({
                    type: Types.POPULAR_REFRESH_MORE_SUCCESS,
                    storeName,
                    pageIndex,
                    projectModes: dataArray.slice(0, max)
                });

            }
        }, 500);
    }
}
