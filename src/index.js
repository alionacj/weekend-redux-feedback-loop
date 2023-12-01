import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import App from './components/App/App';

import './index.css';

const feedback = (state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ''
        }, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'FEELING_SCORE':
            return {...state, feeling: payload}
            break;
        default:
            return state
            break;
    }
}

const store = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger),
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
