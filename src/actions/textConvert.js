export const textConvert = (text) => {
    let transformed = '';
    transformed = text.replace('<p>', '').replace('</p>', '').split('&#8222;').join(`"`).split('&#8221;').join(`"`).split('<br />').join('').split('&#8243;').join('"')
    .split('</p>').join('')
    .split('<p>').join('');
    const result = JSON.parse(transformed);
    return result;
}