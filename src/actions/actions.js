import {LOAD_STORE} from './constants';

export function loadStore() {
    console.log('LOADED ACTION');
    return {
        type: LOAD_STORE,
        payload: true
    };
}
