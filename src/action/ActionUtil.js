/**
 * 对数据进行处理
 * @param actionType action type
 * @param dispatch dispatch
 * @param storeName store name
 * @param data data
 * @param pageSize page size
 */
export function handleData(actionType, dispatch, storeName, data, pageSize) {
    let fixItems = [];
    if (data && data.data) {
        if (Array.isArray(data)) {
            fixItems = data.data;
        } else if (Array.isArray(data.data.items)) {
            fixItems = data.data.items;
        }
    }
    dispatch({
        type: actionType,
        projectModes: pageSize > fixItems.length ? fixItems: fixItems.slice(0, pageSize),
        storeName,
        pageSize: 1
    })
}
