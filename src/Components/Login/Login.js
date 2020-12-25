import React from "react";
import LoginReduxForm from "./LoginForm/LoginReduxForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (fromData) => {
        console.log(fromData);
        props.login(fromData.email, fromData.password, fromData.rememberMe);
        console.log(props.isAuth);
    }

    if(props.isAuth) {
        console.log("yes");
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return(
        {isAuth: state.auth.isAuth}
    )
}

export default connect(mapStateToProps, {login})(Login);