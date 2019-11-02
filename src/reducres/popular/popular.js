import types from '../../action/types';

/**
 * 列表数据加载
 * java: {
 *     items: [
 *         // data
 *     ]
 * }
 * @param state
 * @param action
 */
export default function onAction(state = {}, action) {
    switch (action.type) {
        case types.POPULAR_UPLOAD_SUCCESS:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    items: action.items,
                    projectModes: action.projectModes,
                    isLoading: false,
                    hideLoadingMore: false
                }
            };
        case types.POPULAR_REFRESH:
            return {
              ...state,
              [action.storeName]: {
                  ...state[action.storeName],
                  isLoading: true,
              }
            };
        case types.POPULAR_UPLOAD_FAIL:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: false
                }
            };
        case types.POPULAR_REFRESH_MORE_SUCCESS:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    projectModes: action.projectModes,
                    hideLoadingMore: false,
                    pageIndex: action.pageIndex
                }
            };
        case types.POPULAR_REFRESH_MORE_FAIL:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    hideLoadingMore: true,
                    pageIndex: action.pageIndex
                }
            };
        default:
            return state;
    }
}
