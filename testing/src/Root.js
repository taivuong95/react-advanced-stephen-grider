import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import reducers from 'reducers';
import reduxPromise from 'redux-promise'

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise, async))
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};