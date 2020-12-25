import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators";

const maxLength10 = maxLengthCreator(10);

const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <Field component={Textarea} validate={[required, maxLength10]} name={"newMessage"} placeholder={"input your message"} />
            <button>send</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: "messageForm"})(MessageForm);

export default MessageReduxForm;