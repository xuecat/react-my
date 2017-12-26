import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={}></IndexRoute>
            <Route path="filelist"></Route>
            <Route path="other"></Route>
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
