import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './containers/UserDashboard/Dashboard';
import Login from './containers/Login/Login';
import { Provider } from 'react-redux';
import AdminDashboard from './containers/AdminDashboard/AdminDashboard';
// import { Router, Route } from 'react-router';

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        {/* <App /> */}
        <Router>
            <Route exact path='/' component={Login} />
            <Route exact path='/viewUserDashboard' component={Dashboard} />
            <Route
                exact
                path='/viewAdminDashboard'
                component={AdminDashboard}
            />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
