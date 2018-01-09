import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import {rootReducer} from './data/Reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={App}>
                {/* <IndexRoute component={}></IndexRoute>
                <Route path="filelist"></Route>
                <Route path="other"></Route> */}
            </Route>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
