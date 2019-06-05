import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import './index.css';
import Home from './Screen/Home/Home';
import * as serviceWorker from './serviceWorker';
import {Router, Route, browserHistory} from 'react-router';
import StoryDetail from './Screen/StoryDetail/StoryDetail';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/StoryDetail" component={StoryDetail}/>
  </Router>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
