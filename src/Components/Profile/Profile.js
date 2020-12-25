import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileItem/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo {...props}/>
            <MyPostsContainer />

        </div>
    )
}

export default Profile;