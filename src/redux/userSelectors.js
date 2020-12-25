import {createSelector} from "reselect";

export const getUserSelector = (state) => {
    return state.usersPage.users;
}

export const getUserSelectorSuper = createSelector(getUserSelector, (users) => {
    return users.filter(u => true)
})

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getCountUsersPage = (state) => {
    return state.usersPage.countUsersPage;
}

export const getCountUsers = (state) => {
    return state.usersPage.countUsers;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress;
}
