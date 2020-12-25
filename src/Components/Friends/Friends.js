import React from "react";
import classes from "./Friends.module.css";
import user from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Pagination from "../Common/Pagination/Pagination";

const Friends = (props) => {
    //
    // let countPage = Math.ceil(props.countUsers / props.countUsersPage);
    // let pages = [];
    // for (let i = 1; i <= countPage - 830; i++) {
    //     pages.push(i);
    // }
    console.log(props);

    return (
        <div>
            <Pagination {...props} />

            {
                props.users.map(f => <div className={classes.wrapper} key={f.id}>
                    <div>
                        <NavLink to={`/profile/${f.id}`}>
                            <img src={f.photos.small != null ? f.photos.small : user}/>
                        </NavLink>
                        <div>
                            {
                                f.followed
                                    ? <button disabled = {props.followingProgress.some(id => id === f.id)}
                                              onClick={() => { props.unfollow(f.id) }}>unfollow</button>
                                    : <button disabled = {props.followingProgress.some(id => id === f.id)}
                                              onClick={() => {props.follow(f.id) }}>follow</button>
                            }
                        </div>

                    </div>
                    <div>
                        <div>
                            <p>Name: {f.name}</p>
                        </div>
                        <div>
                            <p>Status: {f.status}</p>
                        </div>
                        <div>
                            <p>City: {"f.location.city"}</p>
                        </div>
                        <div>
                            <p>Country: {"f.location.country"}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>

    )

}

export default Friends;