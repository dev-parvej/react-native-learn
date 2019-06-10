import * as actions from './../actions/auth'
import { setReduxState } from './../utility'

const initialState = {
    email: '',
    password: '',
    loader: false,
    authenticate: false,
    name: '',
    error: false,
    message: ''
}
const Auth = (state = initialState, action) => {
    switch(action.type){
        case actions.SET_EMAIL:
            return setReduxState(state, { email: action.payload })
        case actions.SET_PASSWORD: 
            return setReduxState(state, { password: action.payload })
        case actions.SET_LOADER:
            return setReduxState(state, { loader: action.payload })
        case actions.LOGIN: 
            return setReduxState(state, { authenticate: true, name: action.payload.name })
        case actions.SET_ERROR: 
            return setReduxState(state, { 
                authenticate: false,
                error: !action.payload.status,
                message: action.payload.message 
            })
        default:
            return state
    }
}

export { Auth }