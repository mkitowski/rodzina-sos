import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store/mainStore';
import './index.css';
import {AppConnect} from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}><AppConnect/></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
