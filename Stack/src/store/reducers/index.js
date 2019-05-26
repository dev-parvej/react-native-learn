import { combineReducers } from 'redux'

const reducers = combineReducers({
    libraries: (state = [], action) => {
        return state;
    }
});

export default reducers;