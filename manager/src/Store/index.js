import { combineReducers } from 'redux'
import { Auth } from './reducers'

const reducers = combineReducers({
    auth: Auth
});

export default reducers