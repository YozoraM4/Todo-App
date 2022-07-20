import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

import TaskReducer from './reducer/task';

const rootReducer = combineReducers({
    TodoList: TaskReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;