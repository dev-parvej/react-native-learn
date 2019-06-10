export const SET_EMAIL = 'SET_EMAIL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_LOADER = 'SET_LOADER'

export const setEmail = (email) => {
    return dispatch => {
        dispatch({ type: SET_EMAIL, payload: email })
    };
} 

export const setPassword = (password) => {
    return dispatch => {
        dispatch({ type: SET_PASSWORD, payload: password });
    }
}

export const login = () => {
    return dispatch => {
        dispatch({ type: SET_LOADER, payload: true });
    }
}