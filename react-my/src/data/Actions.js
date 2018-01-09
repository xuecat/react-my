import {COLLAPSE} from  './Types'

export function createAction(type, value) {
    return {type, value};
}

export function createCollapse(v) {
    return function(dispatch, getState) {
        return dispatch(createAction(COLLAPSE, !getState().collapse));
    }
}