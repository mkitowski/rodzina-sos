import { connect } from 'react-redux';
import { lang, isError } from '../../selectors/app';
import { isFetchingFertilityPage, fertilityPage, isFertilityPageFetched } from '../../selectors/page';
import { fetchFertilityPage } from '../../actions/actions';
import { Fertility } from './Fertility';

export const FertilityConnect = connect(state => ({
    isFetchingPage: isFetchingFertilityPage(state),
    page: fertilityPage(state),
    isError: isError(state),
    lang: lang(state),
    isPageFetched: isFertilityPageFetched(state),
  }), (dispatch) => ({
      fetchPage: slug => dispatch(fetchFertilityPage(slug)),
  }))(Fertility);