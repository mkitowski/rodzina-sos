function getApp(state) {
    return state;
}

export function getMenu(state) {
    return getApp(state).menu;
}

export function isFetchingMenu(state) {
    return getApp(state).isFetchingMenu;
}