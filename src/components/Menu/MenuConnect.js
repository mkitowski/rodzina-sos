import { connect } from 'react-redux';
import { Menu } from './Menu';

import { lang } from '../../selectors/app';

export const MenuConnect = connect(state => ({
    lang: lang(state),
  }))(Menu);