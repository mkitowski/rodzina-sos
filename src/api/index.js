export function getPosts() {
    return fetch('RodzinaSOS/?rest_route=/wp/v2/posts');
}

export function getPage(slug) {
    return fetch(`backend/api/get_page?slug=${slug}`)
    // return fetch(`http://serwer1983560.home.pl/RodzinaSOS/backend/api/get_page?slug=${slug}`)
    .then(response => {
        return response.json();
    })
}