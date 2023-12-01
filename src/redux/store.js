import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger } from 'redux-logger';

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

export default store
