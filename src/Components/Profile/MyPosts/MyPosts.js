import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import PostReduxForm from "./PostForm/PostForm";

const MyPosts = React.memo((props) => {
    console.log("hey");
    const onSubmit = (value) => {
        props.savePost(value.newPost);
    }

    const postElement =props.posts.map( p => ( <Post key={p.id} message={p.message} like={p.like}/>));

    return(
        <div className={classes.posts}>
            My post
            <div>
                <PostReduxForm onSubmit={onSubmit} />
            </div>
            <div className={classes.message}>
                { postElement }
            </div>

        </div>
    )
});

export default MyPosts;
