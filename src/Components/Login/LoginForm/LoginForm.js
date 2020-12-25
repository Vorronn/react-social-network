import React from "react";
import {Field} from "redux-form";
import {Input} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators";
import classes from "../../Common/FormsControls/FormsControls.module.css";

let maxLength30 = maxLengthCreator(30);

let LoginForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"} component={Input} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required, maxLength30]} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            {props.error && <div className={classes.samaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;