import React from 'react';
import classes from './ProfileInfo.module.css';
import ProfileStatusHook from "./ProfileStatus/PorfileStatusHook";

const ProfileInfo = (props) => {
    if(!props.userProfile){
        return <></>;
    }
    return (
        <div>
            <div>
                <ProfileStatusHook {...props} />
            </div>
            <div className={classes.description}>
                <img src={props.userProfile.photos.small} className={classes.userPhoto}/>
                <p>Full Name: {props.userProfile.fullName}</p>
                <p>Full VK: {props.userProfile.contacts.vk}</p>
                <p>Full github: {props.userProfile.contacts.github}</p>
                <p>Full instagram: {props.userProfile.contacts.instagram}</p>
                <p>Full JOB: {props.userProfile.lookingForAJobDescription}</p>
                <p>Full About Me: {props.userProfile.aboutMe}</p>

            </div>
        </div>
    )
}

export default ProfileInfo;