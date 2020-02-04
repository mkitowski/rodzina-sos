import { connect } from 'react-redux';
import { lang, isError } from '../../selectors/app';
import { isFetchingAboutPage, aboutPage, isAboutPageFetched } from '../../selectors/page';
import { fetchAboutPage } from '../../actions/actions';
import { About } from './About';

export const AboutConnect = connect(state => ({
    isFetchingPage: isFetchingAboutPage(state),
    page: aboutPage(state),
    isError: isError(state),
    lang: lang(state),
    isPageFetched: isAboutPageFetched(state),
  }), (dispatch) => ({
      fetchPage: slug => dispatch(fetchAboutPage(slug)),
  }))(About);