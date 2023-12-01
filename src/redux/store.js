import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger';

const feedback = (state = {
    feeling: 1,
    understanding: 1,
    support: 1,
    comments: ''
    }, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'FEELING_SCORE':
            return {...state, feeling: payload}
        case 'UNDERSTANDING_SCORE':
            return {...state, understanding: payload}
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
