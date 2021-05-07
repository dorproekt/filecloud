const defaultState = {
    user: {},
    isAuth: false
}

const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'

const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_USER:
            return {...state, user: action.payload.user, isAuth: true}
        case LOGOUT:
            return {...state, ...defaultState}
        default:
            return state
    }
}

export default userReducer

export const setUser = user => ({type: SET_USER, payload: {user}})
export const logout = () => ({type: LOGOUT})