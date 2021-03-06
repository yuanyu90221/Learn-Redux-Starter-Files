// let's go!
import React from 'react';
import {render} from 'react-dom';

// import css
import css from './styles/style.styl';
// import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
// import react router deps
import { Router , Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
// import {sentry_url, logException} from './data/config';
// import Raven from 'raven-js';
// console.log(sentry_url);
// Raven.config(sentry_url).install();

// Raven.captureMessage('Something bad happened');
// Raven.showReportDialog();
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Router path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Router>
        </Router>
    </Provider>
);
render(router, document.getElementById('root'));