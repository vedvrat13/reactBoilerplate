import {LOAD_STORE} from 'actions/constants';

const initialState = {};

export function appReducer(state = initialState, action) {
    switch(action.type){
    case LOAD_STORE: {
        console.log(action.type);
        return state;
    }
    default:
        return state;
    }

}
