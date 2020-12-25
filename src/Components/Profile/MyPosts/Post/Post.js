import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsDeE2b1q5PrEeX2p7mCVsXOx3LHvm_EnFew&usqp=CAU' />
            <span>{props.message}</span>
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    )
}

export default Post;