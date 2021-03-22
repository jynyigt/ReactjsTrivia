import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Difficulty from './reducers/Difficulty';
import QuestionReducer from './reducers/QuestionReducer';

const INITIAL_STATE = {};
const reducer = combineReducers({
question:QuestionReducer,
difficulty:Difficulty
});

const store = createStore(
    reducer,
    INITIAL_STATE,
    applyMiddleware(thunk)
);
export default store;