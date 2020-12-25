import {statusAPI, userAPI} from "../api/api";

const NEW_POST = "NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";


let initialState = {
    posts: [
        {id: 1, message: 'Hello world', like: 15},
        {id: 2, message: 'Hello Alex', like: 45},
        {id: 3, message: 'Hello Sergey', like: 5},
        {id: 4, message: 'Hello Mickl', like: 4},
        {id: 5, message: 'Hello Mom', like: 3}
    ],
    userProfile: null,
    status: ""
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST:
            let newPost = {
                id: 6,
                message: action.newTextPost,
                like: 5
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => (p.id != action.postId))
            }
        default:
            return state;
    }
}

export const savePostActionCreator = (newTextPost) => {
    return (
        {type: NEW_POST, newTextPost: newTextPost}
    )
}

export const setUserStatus = (status) => {
    return (
        {type: SET_STATUS, status}
    )
}

export const setUserProfile = (userProfile) => {
    return (
        {type: SET_USER_PROFILE, userProfile}
    )
}

export const deletePost = (postId) => {
    return (
        {type: DELETE_POST, postId}
    )
}

export const getIdProfile = (userId) => {
    return async (dispatch) => {
        let response = await userAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await statusAPI.getStatus(userId)
        dispatch(setUserStatus(response.data));
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await statusAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}

export default profilePageReducer;