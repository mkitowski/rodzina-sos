function getPage(state) {
    return state;
}

export function isFetchingPage(state) {
    return getPage(state).isFetchingPage;
}

export function page(state) {
    return getPage(state).page;
}