import {
    getPage,
} from '../api/index';
import {
    FETCH_SECTION,
    FETCH_SECTION_SUCCESS,
    FETCH_SECTION_FAILURE,
    FETCH_PAGE,
    FETCH_PAGE_SUCCESS,
    FETCH_PAGE_FAILURE,
} from '../constants/actionTypes';

export function fetchPage(slug) {
    return async dispatch => {
        dispatch({
            type: FETCH_PAGE,
        });
        try {
            const response = await getPage(slug);
            return dispatch(fetchPageSuccess(response));
        }
        catch (error) {
            return dispatch(fetchPageFailure(error));
        }
    }
}

function fetchPageSuccess(response) {
    return {
        type: FETCH_PAGE_SUCCESS,
        response,
    }
}

function fetchPageFailure(error) {
    return {
        type: FETCH_PAGE_FAILURE,
        error,
    }
}

export function fetchSection(slug) {
    return async dispatch => {
        dispatch({
            type: FETCH_SECTION,
        });
        try {
            const response = await getPage(slug);
            return dispatch(fetchSectionSuccess(response));
        }
        catch (error) {
            return dispatch(fetchSectionFailure(error));
        }
    }
}

function fetchSectionSuccess(response) {
    return {
        type: FETCH_SECTION_SUCCESS,
        response,
    }
}

function fetchSectionFailure(error) {
    return {
        type: FETCH_SECTION_FAILURE,
        error,
    }
}