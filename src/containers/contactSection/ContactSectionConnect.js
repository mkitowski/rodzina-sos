import { connect } from 'react-redux';
import { lang, isError } from '../../selectors/app';
import { isFetchingSection, section, isSectionFetched } from '../../selectors/page';
import { fetchSection } from '../../actions/actions';
import { ContactSection } from './ContactSection';

export const ContactSectionConnect = connect(state => ({
    isFetchingSection: isFetchingSection(state),
    section: section(state),
    isError: isError(state),
    isSectionFetched: isSectionFetched(state),
    lang: lang(state),

  }), (dispatch) => ({
      fetchSection: slug => dispatch(fetchSection(slug)),
  }))(ContactSection);