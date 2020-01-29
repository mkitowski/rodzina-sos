import {
    getPosts,
    getPage,
} from '../api/index';
import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
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

export function fetchPosts() {
    return async dispatch => {
        dispatch({
            type: FETCH_POSTS,
        });
        try {
            const response = await getPosts();
            return dispatch(fetchPostsSuccess(response));
        }
        catch (error) {
            return dispatch(fetchPostsFailure(error));
        }
    }
}

function fetchPostsSuccess(response) {
    return {
        type: FETCH_POSTS_SUCCESS,
        response,
    }
}

function fetchPostsFailure(error) {
    return {
        type: FETCH_POSTS_FAILURE,
        error,
    }
}