import start from '../constants/start.json';
import about from '../constants/about.json';
import contact from '../constants/contact.json';
import contactSection from '../constants/contactSection.json';
import plodnosc from '../constants/plodnosc.json';
import psyho from '../constants/psyho.json';

const files = {
    start, about, contact, contactSection, plodnosc, psyho
}

export function getPage(slug) {

    return files[slug];
}