import { connect } from 'react-redux';
import { lang, isError } from '../../selectors/app';
import { isFetchingPage, page, isPageFetched } from '../../selectors/page';
import { fetchPage } from '../../actions/actions';
import { Fertility } from './Fertility';

export const FertilityConnect = connect(state => ({
    isFetchingPage: isFetchingPage(state),
    page: page(state),
    isError: isError(state),
    lang: lang(state),
    isPageFetched: isPageFetched(state),
  }), (dispatch) => ({
      fetchPage: slug => dispatch(fetchPage(slug)),
  }))(Fertility);