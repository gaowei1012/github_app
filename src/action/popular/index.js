import Types from '../types';
import DataStore from '../../expand/dao/DataStore';

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
        dataStore.fetchData(url) // 异步获取数据
            .then(data => {
                handlerData(dispatch, storeName, data, pageSize);
            })
            .catch(error => {
                console.log(error);
                dispatch({type: Types.POPULAR_UPLOAD_FAIL, storeName, error})
            })
    }
}

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

/**
 * 对数据进行处理
 * @param url
 */
function handlerData(dispatch, storeName, data, pageSize) {
    let fixItems = [];
    if (data && data.data && data.data.items) {
        fixItems = data.data.items;
    }
    dispatch({
        type: Types.POPULAR_UPLOAD_SUCCESS,
        projectModes: pageSize > fixItems.length ? fixItems: fixItems.slice(0, pageSize),
        storeName,
        pageSize: 1
    })
}
