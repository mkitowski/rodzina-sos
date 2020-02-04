import { connect } from 'react-redux';
import { lang, isError } from '../../selectors/app';
import { isFetchingTherapyPage, therapyPage, isTherapyPageFetched } from '../../selectors/page';
import { fetchTherapyPage } from '../../actions/actions';
import { Psycho } from './Psycho';

export const PsychoConnect = connect(state => ({
    isFetchingPage: isFetchingTherapyPage(state),
    therapyPage: therapyPage(state),
    isError: isError(state),
    lang: lang(state),
    isPageFetched: isTherapyPageFetched(state),
  }), (dispatch) => ({
      fetchPage: slug => dispatch(fetchTherapyPage(slug)),
  }))(Psycho);