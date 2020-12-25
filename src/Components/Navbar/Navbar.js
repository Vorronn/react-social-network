import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Contact from "./Contact/Contact";
import MessageItem from "../Dialogs/MessageItem/MessageItem";



let classesNew = `${classes.item} ${classes.active}`

const Navbar = (props) => {
    // let state = props.store.getState();
    // const contactElement = state.sidebar.contact.map( c => (<Contact name={c.name} urlIcon={c.urlIcon}/>));

    return(
        <nav className={classes.nav}>
            <div className={classesNew}>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
                {/*<div className={classes.contacts}>*/}
                {/*    { contactElement }*/}
                {/*</div>*/}

            </div>
        </nav>
    )
}

export default Navbar;