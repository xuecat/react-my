import { combineReducers } from 'redux-immutable';
import immutable from 'immutable'
import {COLLAPSE} from './Types'

function collapse(state = null, action) {
    switch (action.type) {
        case COLLAPSE:
            return action.value;
        default:
            break;
    }
    return state;
}

let defaultValue = immutable.Record({
    collapse: false
});

export const rootReducer = combineReducers({collapse}, defaultValue);
