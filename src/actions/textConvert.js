export const textConvert = (text,lang) => {
    let transformed = '';
    console.log(text)
    transformed = text.replace('<p>', '').replace('</p>', '').split('&#8222;').join(`"`).split('&#8221;').join(`"`).split('<br />').join('');
    console.log(transformed);
    const result = JSON.parse(transformed);
    console.log(result);
    // transformed = text.replace('<p>', '').replace('</p>', '').replace('<br />', ';').replace(/(\r\n|\n|\r)/gm, '');
    // const array = transformed.split(';');
    // console.log(array);
    // const result = {};
    // array.forEach((el, i) => {
    //     if(i % 2 === 0) {
    //         result[el] = array[i+1];
    //     } 
    // });
    // console.log(result);
    return result[lang];
}