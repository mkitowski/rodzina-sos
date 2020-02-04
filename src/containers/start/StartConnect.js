import { connect } from 'react-redux';
import { lang, isError } from '../../selectors/app';
import { isFetchingStartPage, startPage, isStartPageFetched } from '../../selectors/page';
import { fetchStartPage } from '../../actions/actions';
import { Start } from './Start';

export const StartConnect = connect(state => ({
    isStartPage: isFetchingStartPage(state),
    page: startPage(state),
    isError: isError(state),
    lang: lang(state),
    isPageFetched: isStartPageFetched(state),
  }), (dispatch) => ({
      fetchPage: slug => dispatch(fetchStartPage(slug)),
  }))(Start);