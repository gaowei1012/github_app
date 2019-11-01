
import { AsyncStorage } from 'react-native';

export default class StorageUtil {
    /// 设置storage
    static setItem(key, value, callback) {
        AsyncStorage.setItem(key, value, callback);
    }

    /// 获取storage
    static getItem(key, value, callback) {
        AsyncStorage.getItem(key, value, callback);
    };

    /// 删除storage
    static removeItem(key, value, callback) {
        AsyncStorage.removeItem(key, value, callback);
    }
}
