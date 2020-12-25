import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "c99c1ff1-ebb1-4926-ae71-4b47ba9f5e69" }
});

export let userAPI = {
    getUsers(countUsersPage, currentPage) {
        return instance.get(`users?count=${countUsersPage}&page=${currentPage}`)
            .then(response => {return response.data})
    },

    postFollow(userId) {
        return instance.post(`follow/${userId}`).then(response => {return response})
    },

    deleteUnfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {return response})
    },

    getProfile(userId) {
        console.warn("Устаревший метод надо заменить на statusAPI")
        return statusAPI.getProfile(userId);
    }

}

export let authAPI = {

    getAuthMe() {
        return instance.get(`auth/me`).then(response => {
            return response
        })
    },

    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`);
    }
}

export let statusAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {return response})
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

