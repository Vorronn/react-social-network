import React from "react";
import classes from "./Contact.module.css";

const Contact = (props) => {
    return (
        <div className={classes.oneContact}>
            <div>
                <img className={classes.iconContact} src={props.urlIcon}/>
            </div>
            <p className={classes.nameContact}>
                { props.name }
            </p>
        </div>
    )
}

export default Contact;