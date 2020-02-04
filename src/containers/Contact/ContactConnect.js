import { connect } from 'react-redux';
import { lang, isError } from '../../selectors/app';
import { isFetchingContactPage, contactPage, isContactPageFetched } from '../../selectors/page';
import { fetchContactPage } from '../../actions/actions';
import { Contact } from './Contact';

export const ContactConnect = connect(state => ({
    isFetchingPage: isFetchingContactPage(state),
    page: contactPage(state),
    isError: isError(state),
    lang: lang(state),
    isPageFetched: isContactPageFetched(state),
  }), (dispatch) => ({
      fetchPage: slug => dispatch(fetchContactPage(slug)),
  }))(Contact);