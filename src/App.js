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

const App = props => {


  return (
    <BrowserRouter>
      <MenuConnect/>
      <Switch>
        <Route exact path='/'>
          <StartConnect/>
        </Route>
        <Route exact path='/terapia'>
          <PsychoConnect/>
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
