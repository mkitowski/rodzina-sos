import React, {useEffect, ReactFragment} from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { fetchPosts } from './actions/actions';
import { isFetchingPosts, getPosts, postsFetched } from './selectors/app';
import { MenuConnect } from './components/Menu/MenuConnect';
import { StartConnect } from './containers/start/StartConnect';

const App = props => {
  // useEffect(() => {
  //   console.log(props.isFetchingPosts);
  //   if(!props.isFetchingPosts) {
  //     props.fetchPosts();
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <MenuConnect/>
      <Switch>
        <Route path='/'>
          <StartConnect/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export const AppConnect = connect(state => ({
  isFetchingPosts: isFetchingPosts(state),
  posts: getPosts(state),
  postsFetched: postsFetched(state)
}), (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
}))(App);
