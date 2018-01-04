import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter , Route, } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
    <BrowserRouter>
        <Route exact path="/" component={App}>
            {/* <IndexRoute component={}></IndexRoute>
            <Route path="filelist"></Route>
            <Route path="other"></Route> */}
        </Route>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
