function getApp(state) {
    return state;
}

export function getPosts(state) {
    return getApp(state).posts;
}

export function isFetchingPosts(state) {
    return getApp(state).isFetchingPosts;
}

export function postsFetched(state) {
    return getApp(state).postsFetched;
}

export function lang(state) {
    return getApp(state).lang;
}
export function isError(state) {
    return getApp(state).isError;
}