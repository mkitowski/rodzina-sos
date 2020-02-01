import {
    FETCH_SECTION,
    FETCH_SECTION_SUCCESS,
    FETCH_SECTION_FAILURE,
    FETCH_MENU,
    FETCH_MENU_FAILURE,
    FETCH_MENU_SUCCESS,
    FETCH_PAGE,
    FETCH_PAGE_SUCCESS,
    FETCH_PAGE_FAILURE,
} from '../constants/actionTypes';
import { textConvert } from '../actions/textConvert';

const initialState = {
    section: [],
    page: [],
    currentPost: [],
    menu: [],
    isFetchingSection: false,
    isFetchingMenu: false,
    isFetchingPage: false,
    postFetched: false,
    isSectionFetched: false,
    isPageFetched: false,
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
                isPageFetched: false,
            }
        case FETCH_PAGE_SUCCESS:
            const text = action.response.page.content;
            const translatedText = textConvert(text, state.lang);
            return {
                ...state,
                isFetchingPage: false,
                isPageFetched: true,
                page: translatedText,
            }
        case FETCH_PAGE_FAILURE:
            console.log(action.error)
            return {
                ...state,
                isFetchingPage: false,
                isPageFetched: false,
                isError: true,
            }
        case FETCH_SECTION:
            return {
                ...state,
                isFetchingSection: true,
                isSectionFetched: false,
                isError: false,
            }
        case FETCH_SECTION_SUCCESS:
            return {
                ...state,
                isFetchingSection: false,
                isSectionFetched: true,
                section: textConvert(action.response.page.content, state.lang),
            }
        case FETCH_SECTION_FAILURE:
            console.log(action.error);
            return {
                ...state,
                isFetchingSection: false,
                isError: true,
                isSectionFetched: false,
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
