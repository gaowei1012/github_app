/**
 * logger middleware
 */

'use strict';

export const logger = store  => next => action => {
    if (typeof action === 'function') {
        console.log('dispatch if function');
    } else {
        console.log('dispatch is', action);
    }
    const result = next(action);
    console.log('dispatching:', store.getState());
}
