import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import Books from './routes/Books';
import configureStore from './redux/stores';
const store = configureStore({});

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('./components/App'),
        childRoutes: [
            ...Books,
            require('./routes/Calendar'),
            require('./routes/Course'),
            require('./routes/Grades')
        ]
    }]
};

render((
    <Provider store={ store }>
        <Router history={ browserHistory } routes={ rootRoute } />
    </Provider>
), document.getElementById('container'));

if (module.hot) {
    module.hot.accept();
}