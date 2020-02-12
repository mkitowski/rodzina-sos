import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
// import { isFetchingPosts, getPosts, postsFetched } from './selectors/app';
import { MenuConnect } from './components/Menu/MenuConnect';
import { ContactSectionConnect } from './containers/contactSection/ContactSectionConnect';
import { StartConnect } from './containers/start/StartConnect';
import { PsychoConnect } from './containers/psychoterapia/PsychoConnect';
import { FertilityConnect } from './containers/Fertility/FertilityConnect';
import { AboutConnect } from './containers/About/AboutConnect';
import { ContactConnect } from './containers/Contact/ContactConnect';

const App = props => {


  return (
    <BrowserRouter>
      <MenuConnect/>
      <Switch>
        <Route exact path='/RodzinaSOS/'>
          <StartConnect/>
        </Route>
        <Route exact path='/RodzinaSOS/terapia'>
          <PsychoConnect/>
        </Route>
        <Route exact path='/RodzinaSOS/plodnosc'>
          <FertilityConnect/>
        </Route>
        <Route exact path='/RodzinaSOS/oNas'>
          <AboutConnect/>
        </Route>
        <Route exact path='/RodzinaSOS/kontakt'>
          <ContactConnect/>
        </Route>
      </Switch>
      <ContactSectionConnect/>
    </BrowserRouter>
  );
}

export const AppConnect = connect(state => ({
  // isFetchingPosts: isFetchingPosts(state),
  // posts: getPosts(state),
  // postsFetched: postsFetched(state)
}), (dispatch) => ({
  // fetchPosts: () => dispatch(fetchPosts())
}))(App);
