import Types from '../types';
import DataStore from '../../expand/dao/DataStore';

/**
 * 异步获取action
 * @param stateName
 * @param url
 */
export function popularLoadRefresh(stateName, url) {
    return dispatch => {
        dispatch({type: Types.POPULAR_REFRESH, stateName: stateName});
        // 异步获取数据

    }
}
