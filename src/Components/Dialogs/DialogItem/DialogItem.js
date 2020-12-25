import React from "react";
import classes from "./DialogItem.module.css"
// import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active}>
                <div className={classes.wrapper}>
                    <div className={classes.iconContact}>
                        <img className={classes.imageIcon} src={props.urlIcon} />
                    </div>
                    <div className={classes.nameContact}>
                        <p>{props.name}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;