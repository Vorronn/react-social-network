import React from "react";
import classes from "./FormsControls.module.css";

export const Textarea = ({input, meta, ...props}) => {

    const errorField = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (errorField ? classes.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <div>
                {errorField && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const errorField = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (errorField ? classes.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            <div>
                {errorField && <span>{meta.error}</span>}
            </div>
        </div>
    )
}