import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_MENU,
    FETCH_MENU_FAILURE,
    FETCH_MENU_SUCCESS,
    FETCH_PAGE,
    FETCH_PAGE_SUCCESS,
    FETCH_PAGE_FAILURE,
} from '../constants/actionTypes';
import { textConvert } from '../actions/textConvert';

const initialState = {
    posts: [],
    page: [],
    currentPost: [],
    menu: [],
    isFetchingPosts: false,
    isFetchingMenu: false,
    isFetchingPage: false,
    postFetched: false,
    isError: false,
    lang: 'PL',
}

export function rootReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case FETCH_PAGE:
            return {
                ...state,
                isFetchingPage: true,
                isError: false,
            }
        case FETCH_PAGE_SUCCESS:
            const text = action.response.page.content;
            const translatedText = textConvert(text, state.lang);
            return {
                ...state,
                isFetchingPage: false,
                page: translatedText,
            }
        case FETCH_PAGE_FAILURE:
            console.log(action.error)
            return {
                ...state,
                isFetchingPage: false,
                isError: true,
            }
        case FETCH_POSTS:
            return {
                ...state,
                isFetchingPosts: true,
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetchingPosts: false,
                postFetched: true,
                posts: action.response[0],
            }
        case FETCH_POSTS_FAILURE:
            console.log(action.error);
            return {
                ...state,
                isFetchingPosts: false,
            }
        case FETCH_MENU:
            return {
                ...state,
                isFetchingMenu: true,
            }
        case FETCH_MENU_SUCCESS:
            return {
                ...state,
                isFetchingMenu: false,
                menu: action,
            }
        case FETCH_MENU_FAILURE:
            console.log(action.error);
            return {
                ...state,
                isFetchingMenu: false,
            }
        default:
            return state;

    }
}
