import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "auth/TOGGLE_IS_FETCHING";

let initialState = {
    login: null,
    email: null,
    idUser: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export let setAuthUserData = (login, email, idUser, isAuth) => {
    return (
        {type: SET_AUTH_USER_DATA, payload: {login, email, idUser, isAuth}}
    )
}

export let toggleIsFetching = (toggle) => {
    return (
        {type: TOGGLE_IS_FETCHING, isFetching: toggle}
    )
}

export const getAuth = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await authAPI.getAuthMe();
        dispatch(toggleIsFetching(false));
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(login, email, id, true));
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await authAPI.login(email, password, rememberMe);
        dispatch(toggleIsFetching(false));
        if (response.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
            dispatch(stopSubmit("Login", {_error: message}));
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await authAPI.logout();
        dispatch(toggleIsFetching(false));
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;