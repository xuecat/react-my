import { combineReducers } from 'redux-immutable';
import immutable from 'immutable'

function App(state = null, action) {

    return state;
}

let defaultValue = immutable.Record({
    collapse: false
});

export const rootReducer = combineReducers({App}, defaultValue);
