import {userAPI} from "../api/api";
import {actionFollowUnfollow} from "../utils/objectHelper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_COUNT_USERS = "SET_COUNT_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    currentPage: 1,
    countUsers: 0,
    countUsersPage: 10,
    isFetching: false,
    followingProgress: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: actionFollowUnfollow(state.users, action.userId, "id", {followed: true})
            };

        case UNFOLLOW:
            return {
                ...state,
                users: actionFollowUnfollow(state.users, action.userId, "id", {followed: false})
            };

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };

        case SET_COUNT_USERS:
            return {
                ...state,
                countUsers: action.countUsers
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)

            };

        default:
            return state;
    }
}

export const followSucces = (userId) => {
    return (
        {type: FOLLOW, userId}
    )
}

export const unfollowSucces = (userId) => {
    return (
        {type: UNFOLLOW, userId}
    )
}

export const setUsers = (users) => {
    return (
        {type: SET_USERS, users}
    )
}

export const setCountUsers = (countUsers) => {
    return (
        {type: SET_COUNT_USERS, countUsers: countUsers}
    )
}

export const setCurrentPage = (currentPage) => {
    return (
        {type: SET_CURRENT_PAGE, currentPage: currentPage}
    )
}

export const toggleIsFetching = (isFetching) => {
    return (
        {type: TOGGLE_IS_FETCHING, isFetching}
    )
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return (
        {type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId}
    )
}

export const getUsers = (countUsersPage, currentPage) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await userAPI.getUsers(countUsersPage, currentPage);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setCountUsers(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, methodAPI, actionCreator) =>{
    dispatch(toggleFollowingProgress(true, userId));
    let response = await methodAPI(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        // let methodAPI = userAPI.deleteUnfollow.bind(userAPI);
        // let actionCreator = unfollowSucces;
        followUnfollowFlow(dispatch, userId, userAPI.deleteUnfollow.bind(userAPI), unfollowSucces);
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.postFollow.bind(userAPI), followSucces);
    }
}


export default usersPageReducer;