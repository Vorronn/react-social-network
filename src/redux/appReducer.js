import {getAuth} from "./authReducer";

const AUTHORIZED_SUCCESS = "app/AUTHORIZED_SUCCESS";

let initialState = {
    authorized: false
}

const appReducer = (state=initialState, action) => {
    switch(action.type){
        case AUTHORIZED_SUCCESS:
            return {
                ...state,
                authorized: true
            }
        default:
            return state
    }
}

export const setAuthorized = () => {
    return(
        {type: AUTHORIZED_SUCCESS}
    )
}

export const authorizedApp = () =>{
    return (dispatch) => {
        let promise = dispatch(getAuth());
        Promise.all([promise]).then(()=>{
            dispatch(setAuthorized());
        });
        // promise.then(() => {
        //     dispatch(setAuthorized());
        // })
    }
}

export default appReducer;