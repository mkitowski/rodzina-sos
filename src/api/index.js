export function getPosts() {
    return fetch('https://serwer1983560.home.pl/RodzinaSOS/?rest_route=/wp/v2/posts');
}

export function getPage(slug) {
    return fetch(`https://serwer1983560.home.pl/RodzinaSOS/api/get_page?slug=${slug}`)
    .then(response => {
        return response.json();
    })
}