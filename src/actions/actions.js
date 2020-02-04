import {
    getPage,
} from '../api/index';
import {
    FETCH_SECTION,
    FETCH_SECTION_SUCCESS,
    FETCH_SECTION_FAILURE,
    FETCH_START_PAGE,
    FETCH_START_PAGE_SUCCESS,
    FETCH_START_PAGE_FAILURE,
    FETCH_ABOUT_PAGE,
    FETCH_ABOUT_PAGE_SUCCESS,
    FETCH_ABOUT_PAGE_FAILURE,
    FETCH_THERAPY_PAGE,
    FETCH_THERAPY_PAGE_SUCCESS,
    FETCH_THERAPY_PAGE_FAILURE,
    FETCH_FERTILITY_PAGE,
    FETCH_FERTILITY_PAGE_SUCCESS,
    FETCH_FERTILITY_PAGE_FAILURE,
    FETCH_CONTACT_PAGE,
    FETCH_CONTACT_PAGE_SUCCESS,
    FETCH_CONTACT_PAGE_FAILURE,
    TRANSLATE_START_PAGE,
    TRANSLATE_START_PAGE_FAILURE,
    TRANSLATE_START_PAGE_SUCCESS,
    TRANSLATE_THERAPY_PAGE,
    TRANSLATE_THERAPY_PAGE_SUCCESS,
    TRANSLATE_THERAPY_PAGE_FAILURE,
    TRANSLATE_FERTILITY_PAGE,
    TRANSLATE_FERTILITY_PAGE_SUCCESS,
    TRANSLATE_FERTILITY_PAGE_FAILURE,
    TRANSLATE_ABOUT_PAGE,
    TRANSLATE_ABOUT_PAGE_SUCCESS,
    TRANSLATE_ABOUT_PAGE_FAILURE,
    TRANSLATE_CONTACT_PAGE,
    TRANSLATE_CONTACT_PAGE_SUCCESS,
    TRANSLATE_CONTACT_PAGE_FAILURE,
    TRANSLATE_SECTION,
    TRANSLATE_SECTION_SUCCESS,
    TRANSLATE_SECTION_FAILURE,
} from '../constants/actionTypes';
import { textConvert } from './textConvert';

export function translateStartPage(content) {
    return async dispatch => {
        dispatch({
            type:TRANSLATE_START_PAGE,
        });
        try {
            const response = await textConvert(content.page.content);
            return dispatch(translateStartPageSuccess(response));
        }
        catch (error) {
            return dispatch(translateStartPageFailure(error))
        }
    }
}

function translateStartPageSuccess(response) {
    return {
        type: TRANSLATE_START_PAGE_SUCCESS,
        response,
    }
}

function translateStartPageFailure(error) {
    return {
        type: TRANSLATE_START_PAGE_FAILURE,
        error,
    }
}

export function fetchStartPage(slug) {
    return async dispatch => {
        dispatch({
            type: FETCH_START_PAGE,
        });
        try {
            const response = await getPage(slug);
            dispatch(translateStartPage(response))
            return dispatch(fetchStartPageSuccess(response));
        }
        catch (error) {
            return dispatch(fetchStartPageFailure(error));
        }
    }
}

function fetchStartPageSuccess(response) {
    return {
        type: FETCH_START_PAGE_SUCCESS,
        response,
    }
}

function fetchStartPageFailure(error) {
    return {
        type: FETCH_START_PAGE_FAILURE,
        error,
    }
}

export function translateTherapyPage(content) {
    return async dispatch => {
        dispatch({
            type:TRANSLATE_THERAPY_PAGE,
        });
        try {
            const response = await textConvert(content.page.content);
            return dispatch(translateTherapyPageSuccess(response));
        }
        catch (error) {
            return dispatch(translateTherapyPageFailure(error))
        }
    }
}

function translateTherapyPageSuccess(response) {
    return {
        type: TRANSLATE_THERAPY_PAGE_SUCCESS,
        response,
    }
}

function translateTherapyPageFailure(error) {
    return {
        type: TRANSLATE_THERAPY_PAGE_FAILURE,
        error,
    }
}

export function fetchTherapyPage(slug) {
    return async dispatch => {
        dispatch({
            type: FETCH_THERAPY_PAGE,
        });
        try {
            const response = await getPage(slug);
            dispatch(translateTherapyPage(response))
            return dispatch(fetchTherapyPageSuccess(response));
        }
        catch (error) {
            return dispatch(fetchTherapyPageFailure(error));
        }
    }
}

function fetchTherapyPageSuccess(response) {
    return {
        type: FETCH_THERAPY_PAGE_SUCCESS,
        response,
    }
}

function fetchTherapyPageFailure(error) {
    return {
        type: FETCH_THERAPY_PAGE_FAILURE,
        error,
    }
}

export function translateFertilityPage(content) {
    return async dispatch => {
        dispatch({
            type:TRANSLATE_FERTILITY_PAGE,
        });
        try {
            const response = await textConvert(content.page.content);
            return dispatch(translateFertilityPageSuccess(response));
        }
        catch (error) {
            return dispatch(translateFertilityPageFailure(error))
        }
    }
}

function translateFertilityPageSuccess(response) {
    return {
        type: TRANSLATE_FERTILITY_PAGE_SUCCESS,
        response,
    }
}

function translateFertilityPageFailure(error) {
    return {
        type: TRANSLATE_FERTILITY_PAGE_FAILURE,
        error,
    }
}

export function fetchFertilityPage(slug) {
    return async dispatch => {
        dispatch({
            type: FETCH_FERTILITY_PAGE,
        });
        try {
            const response = await getPage(slug);
            dispatch(translateFertilityPage(response));
            return dispatch(fetchFertilityPageSuccess(response));
        }
        catch (error) {
            return dispatch(fetchFertilityPageFailure(error));
        }
    }
}

function fetchFertilityPageSuccess(response) {
    return {
        type: FETCH_FERTILITY_PAGE_SUCCESS,
        response,
    }
}

function fetchFertilityPageFailure(error) {
    return {
        type: FETCH_FERTILITY_PAGE_FAILURE,
        error,
    }
}

export function translateAboutPage(content) {
    return async dispatch => {
        dispatch({
            type:TRANSLATE_ABOUT_PAGE,
        });
        try {
            const response = await textConvert(content.page.content);
            return dispatch(translateAboutPageSuccess(response));
        }
        catch (error) {
            return dispatch(translateAboutPageFailure(error))
        }
    }
}

function translateAboutPageSuccess(response) {
    return {
        type: TRANSLATE_ABOUT_PAGE_SUCCESS,
        response,
    }
}

function translateAboutPageFailure(error) {
    return {
        type: TRANSLATE_ABOUT_PAGE_FAILURE,
        error,
    }
}

export function fetchAboutPage(slug) {
    return async dispatch => {
        dispatch({
            type: FETCH_ABOUT_PAGE,
        });
        try {
            const response = await getPage(slug);
            dispatch(translateAboutPage(response));
            return dispatch(fetchAboutPageSuccess(response));
        }
        catch (error) {
            return dispatch(fetchAboutPageFailure(error));
        }
    }
}

function fetchAboutPageSuccess(response) {
    return {
        type: FETCH_ABOUT_PAGE_SUCCESS,
        response,
    }
}

function fetchAboutPageFailure(error) {
    return {
        type: FETCH_ABOUT_PAGE_FAILURE,
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
            dispatch(translateSection(response));
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

export function translateSection(content) {
    return async dispatch => {
        dispatch({
            type:TRANSLATE_SECTION,
        });
        try {
            const response = await textConvert(content.page.content);
            return dispatch(translateSectionSuccess(response));
        }
        catch (error) {
            return dispatch(translateSectionFailure(error))
        }
    }
}

function translateSectionSuccess(response) {
    return {
        type: TRANSLATE_SECTION_SUCCESS,
        response,
    }
}

function translateSectionFailure(error) {
    return {
        type: TRANSLATE_SECTION_FAILURE,
        error,
    }
}

export function translateContactPage(content) {
    return async dispatch => {
        dispatch({
            type:TRANSLATE_CONTACT_PAGE,
        });
        try {
            const response = await textConvert(content.page.content);
            return dispatch(translateContactPageSuccess(response));
        }
        catch (error) {
            return dispatch(translateContactPageFailure(error))
        }
    }
}

function translateContactPageSuccess(response) {
    return {
        type: TRANSLATE_CONTACT_PAGE_SUCCESS,
        response,
    }
}

function translateContactPageFailure(error) {
    return {
        type: TRANSLATE_CONTACT_PAGE_FAILURE,
        error,
    }
}

export function fetchContactPage(slug) {
    return async dispatch => {
        dispatch({
            type: FETCH_CONTACT_PAGE,
        });
        try {
            const response = await getPage(slug);
            dispatch(translateContactPage(response));
            return dispatch(fetchContactPageSuccess(response));
        }
        catch (error) {
            return dispatch(fetchContactPageFailure(error));
        }
    }
}

function fetchContactPageSuccess(response) {
    return {
        type: FETCH_CONTACT_PAGE_SUCCESS,
        response,
    }
}

function fetchContactPageFailure(error) {
    return {
        type: FETCH_CONTACT_PAGE_FAILURE,
        error,
    }
}