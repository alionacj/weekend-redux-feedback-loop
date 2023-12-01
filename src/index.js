import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom/client';
import { Provider, logger } from 'react-redux'

import App from './components/App/App';

import './index.css';

const feedback = (state={}, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'DISPATCH_MESSAGE':
        
            break;
        default:
            return state
            break;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
