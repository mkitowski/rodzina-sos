function getPage(state) {
    return state;
}

export function isFetchingPage(state) {
    return getPage(state).isFetchingPage;
}

export function page(state) {
    return getPage(state).page;
}

export function isFetchingSection(state) {
    return getPage(state).isFetchingSection;
}

export function section(state) {
    return getPage(state).section;
}

export function isSectionFetched(state) {
    return getPage(state).isSectionFetched;
}

export function isPageFetched(state) {
    return getPage(state).isPageFetched;
}