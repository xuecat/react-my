import {COLLAPSE} from  './Types'

export function createAction(type, value) {
    return {type, value};
}

export function createCollapse(v) {
    return function(dispatch) {
        return dispatch(createAction(COLLAPSE, v));
    }
}