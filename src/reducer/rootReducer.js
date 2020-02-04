import {
    FETCH_SECTION,
    TRANSLATE_SECTION_SUCCESS,
    FETCH_SECTION_FAILURE,
    FETCH_MENU,
    FETCH_MENU_FAILURE,
    FETCH_MENU_SUCCESS,
    FETCH_START_PAGE,
    FETCH_START_PAGE_FAILURE,
    FETCH_ABOUT_PAGE,
    TRANSLATE_ABOUT_PAGE_SUCCESS,
    FETCH_ABOUT_PAGE_FAILURE,
    FETCH_THERAPY_PAGE,
    TRANSLATE_THERAPY_PAGE_SUCCESS,
    FETCH_THERAPY_PAGE_FAILURE,
    FETCH_FERTILITY_PAGE,
    TRANSLATE_FERTILITY_PAGE_SUCCESS,
    FETCH_FERTILITY_PAGE_FAILURE,
    TRANSLATE_START_PAGE_SUCCESS,
    FETCH_CONTACT_PAGE,
    FETCH_CONTACT_PAGE_FAILURE,
    TRANSLATE_CONTACT_PAGE_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
    section: [],
    startPage: [],
    isFetchingStartPage: false,
    isStartPageFetched: false,
    therapyPage: [],
    isFetchingTherapyPage: false,
    isTherapyPageFetched: false,
    fertilityPage: [],
    isFetchingFertilityPage: false,
    isFertilityPageFetched: false,
    aboutPage: [],
    isFetchingAboutPage: false,
    isAboutPageFetched: false,
    contactPage: [],
    isFetchingContactPage: false,
    isContactPageFetched: false,
    currentPost: [],
    menu: [],
    isFetchingSection: false,
    isFetchingMenu: false,
    postFetched: false,
    isSectionFetched: false,
    isError: false,
    lang: 'PL',
}

export function rootReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        //START PAGE
        case FETCH_START_PAGE:
            return {
                ...state,
                isFetchingStartPage: true,
                isError: false,
                isStartPageFetched: false,
            }
        case TRANSLATE_START_PAGE_SUCCESS:
            return {
                ...state,
                isFetchingStartPage: false,
                isStartPageFetched: true,
                startPage: action.response[state.lang],
            }
        case FETCH_START_PAGE_FAILURE:
            console.log(action.error)
            return {
                ...state,
                isFetchingStartPage: false,
                isStartPageFetched: false,
                isError: true,
            }
        // THERAPY PAGE
        case FETCH_THERAPY_PAGE:
            return {
                ...state,
                isFetchingTherapyPage: true,
                isError: false,
                isTherapyPageFetched: false,
            }
        case TRANSLATE_THERAPY_PAGE_SUCCESS:
            return {
                ...state,
                isFetchingTherapyPage: false,
                isTherapyPageFetched: true,
                therapyPage: action.response[state.lang],
            }
        case FETCH_THERAPY_PAGE_FAILURE:
            console.log(action.error)
            return {
                ...state,
                isFetchingTherapyPage: false,
                isTherapyPageFetched: false,
                isError: true,
            }
        // FERTILITY PAGE
        case FETCH_FERTILITY_PAGE:
            return {
                ...state,
                isFetchingFertilityPage: true,
                isError: false,
                isFertilityPageFetched: false,
            }
        case TRANSLATE_FERTILITY_PAGE_SUCCESS:
            return {
                ...state,
                isFetchingFertilityPage: false,
                isFertilityPageFetched: true,
                fertilityPage: action.response[state.lang],
            }
        case FETCH_FERTILITY_PAGE_FAILURE:
            console.log(action.error)
            return {
                ...state,
                isFetchingFertilityPage: false,
                isFertilityPageFetched: false,
                isError: true,
            }
        //ABOUT PAGE
        case FETCH_ABOUT_PAGE:
            return {
                ...state,
                isFetchingAboutPage: true,
                isError: false,
                isAboutPageFetched: false,
            }
        case TRANSLATE_ABOUT_PAGE_SUCCESS:
            return {
                ...state,
                isFetchingAboutPage: false,
                isAboutPageFetched: true,
                aboutPage: action.response[state.lang],
            }
        case FETCH_ABOUT_PAGE_FAILURE:
            console.log(action.error)
            return {
                ...state,
                isFetchingAboutPage: false,
                isAboutPageFetched: false,
                isError: true,
            }
        //CONTACT PAGE
        case FETCH_CONTACT_PAGE:
            return {
                ...state,
                isFetchingContactPage: true,
                isError: false,
                isContactPageFetched: false,
            }
        case TRANSLATE_CONTACT_PAGE_SUCCESS:
            return {
                ...state,
                isFetchingContactPage: false,
                isContactPageFetched: true,
                contactPage: action.response[state.lang],
            }
        case FETCH_CONTACT_PAGE_FAILURE:
            console.log(action.error)
            return {
                ...state,
                isFetchingContactPage: false,
                isContactPageFetched: false,
                isError: true,
            }
            //
        case FETCH_SECTION:
            return {
                ...state,
                isFetchingSection: true,
                isSectionFetched: false,
                isError: false,
            }
        case TRANSLATE_SECTION_SUCCESS:
            return {
                ...state,
                isFetchingSection: false,
                isSectionFetched: true,
                section: action.response[state.lang],
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
