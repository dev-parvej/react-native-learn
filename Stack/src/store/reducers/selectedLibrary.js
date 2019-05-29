import * as actions from './../actions'

const reducer = (state = null, action) => {
    switch(action.type){
        case actions.SELECT_LIBRARY:
            return action.val
        default:
            return state
    }
}

export default reducer;