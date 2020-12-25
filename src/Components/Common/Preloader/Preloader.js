import React from "react";
import classes from "./Preloader.module.css";

const Preloader = (props) => {
    return (
        <div className={classes.preloader}>
            <div className={classes.loader}></div>
        </div>
    )
}

export default Preloader;