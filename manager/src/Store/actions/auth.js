import firebase from 'firebase'
export const SET_EMAIL = 'SET_EMAIL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_LOADER = 'SET_LOADER'
export const LOGIN = 'LOGIN'
export const SET_ERROR = 'SET_ERROR'

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
    return (dispatch, getState) => {
        dispatch({ type: SET_LOADER, payload: true });
        const { email, password } = getState().auth;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({
                    type: LOGIN,
                    payload: { name: 'Akash Aj' }
                });
            })
            .catch(error => 
                dispatch({ 
                    type: SET_ERROR, 
                    payload: { status: false, message: error.message } 
                })
            )
            .finally(() => {
                dispatch({ type: SET_LOADER, payload: false });
            });
    }
}