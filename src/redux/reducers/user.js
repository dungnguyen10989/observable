import * as actionTypes from '../actionTypes/user'

const init = {
    fetching: false,
    info: null,
    message: null
}
const userReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER:
            return init
        case actionTypes.FETCH_USER_SUCCESS:
            return {fetching: false, info: action.payload.concat(state.info), message: null}
        case actionTypes.FETCH_USER_ERROR:
            return {fetching: false, info: state.info, message: action.payload}
        case actionTypes.CANCEL_FETCHING_USER:
            return {...state, fetching: false}
        default:
            return state;
    }
}

export default userReducer