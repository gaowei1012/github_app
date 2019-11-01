
import {
    Platform,
    Dimensions
} from 'react-native';

// iphone X
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iphone XR
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

// 获取当前系统的屏幕尺寸
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

/**
 * 判断是否为iphonex或xs
 * @returns {boolean}
 */
export function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        ((SCREEN_WIDTH === X_WIDTH && SCREEN_HEIGHT === X_HEIGHT) ||
            (SCREEN_WIDTH === X_HEIGHT && SCREEN_HEIGHT === X_WIDTH))
    );
}

/**
 * 判断是否为iphoneXR或max
 * @returns {boolean}
 */
export function isIphoneXR() {
    return (
        Platform.OS === 'ios' &&
        ((SCREEN_WIDTH === XR_WIDTH &R& SCREEN_HEIGHT === XR_HEIGHT) ||
            (SCREEN_WIDTH === XR_HEIGHT && SCREEN_HEIGHT === XR_WIDTH))
    );
}


