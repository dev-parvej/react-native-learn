import * as actions from './../actions/auth'
import { setReduxState } from './../utility'

const initialState = {
    email: '',
    password: '',
    loader: false,
    authenticate: false,
    name: ''
}
const Auth = (state = initialState, action) => {
    switch(action.type){
        case actions.SET_EMAIL:
            return setReduxState(state, { email: action.payload })
        case actions.SET_PASSWORD: 
            return setReduxState(state, { password: action.payload })
        case actions.SET_LOADER:
            return setReduxState(state, { loader: action.payload })
        default:
            return state
    }
}

export { Auth }