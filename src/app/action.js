import {
    ADD,
    DELETE,
    DELETELIST,
    SETLIST
} from '../core/types'

export const setAddData = payload => ({
    payload,
    type: ADD
});

export const setDeleteData = () => ({
    type: DELETE
});

export const setList = payload => ({
    payload,
    type: SETLIST
});

export const deleteList = payload => ({
    payload,
    type: DELETELIST
});
