import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPost"} placeholder={"your post"}
                        validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form:"newPost"})(PostForm);

export default PostReduxForm;