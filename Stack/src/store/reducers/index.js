import { combineReducers } from 'redux'
import libraries from './library'
import selectedLibrary from './selectedLibrary'

const reducers = combineReducers({
    libraries: libraries,
    selectedLibraryId: selectedLibrary
});

export default reducers;