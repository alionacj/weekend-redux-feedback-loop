import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger';

const feedback = (state = {
    feelings: 1,
    understanding: 1,
    support: 1,
    comments: ''
    }, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'FEELING_SCORE':
            return {...state, feelings: payload}
        case 'UNDERSTANDING_SCORE':
            return {...state, understanding: payload}
        case 'SUPPORT_SCORE':
            return {...state, support: payload}
        case 'COMMENT':
            return {...state, comments: payload}
        case 'CLEAR_FEEDBACK':
            return {
                feelings: 1,
                understanding: 1,
                support: 1,
                comments: ''
                }
        default:
            return state
    }
}

const store = createStore(
combineReducers({
    feedback
}),
applyMiddleware(logger),
)

export default store
