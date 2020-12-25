import React from "react";
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";


const LoginReduxForm = reduxForm({ form: "Login" })(LoginForm);

export default LoginReduxForm;
