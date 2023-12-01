import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger';

const feedback = (state = {
    feeling: 1,
    understanding: 1,
    support: 1,
    comment: ''
    }, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'FEELING_SCORE':
            return {...state, feeling: payload}
        case 'UNDERSTANDING_SCORE':
            return {...state, understanding: payload}
        case 'SUPPORT_SCORE':
            return {...state, support: payload}
        case 'COMMENT':
            return {...state, comment: payload}
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
