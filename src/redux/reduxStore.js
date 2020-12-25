import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import sidebarReducer from "./sidebarReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage : profilePageReducer,
    messagesPage : messagePageReducer,
    sidebar : sidebarReducer,
    usersPage : usersPageReducer,
    auth: authReducer,
    form: formReducer,
    authorized: appReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;

