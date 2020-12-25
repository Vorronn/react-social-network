import React from "react";
import classes from "./FriendItem.module.css";

const FriendItem = (props) => {
    return (
        <div className={classes.wrapper}>
            <div>
                <img src={props.photoUrl}/>
                <div>
                    {
                        props.follow
                            ? <button onClick={()=>{props.unfollow(props.id)}}>follow</button>
                            : <button onClick={()=>{props.follow(props.id)}}>unfollow</button>
                    }
                </div>

            </div>
            <div>
                <div>
                    <p>Name: {props.name}</p>
                </div>
                <div>
                    <p>Status: {props.status}</p>
                </div>
                <div>
                    <p>Sity: {props.sity}</p>
                </div>
            </div>
        </div>
    )
}

export default FriendItem;