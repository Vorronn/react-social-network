import React from 'react';
import classes from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogItem/DialogItem';
import MessageReduxForm from "./MessageForm/MessageForm";

const Dialogs = (props) => {

    const dialogElement = props.dialogs.map(d => (<DialogItem name={d.name} id={d.id} urlIcon={d.urlIcon}/>));

    const messageElement = props.messages.map(m => (
        (m.owns === true) ? (
                <div className={classes.right}>
                    <MessageItem key={m.id} message={m.message}/>
                    <div className={classes.circle}></div>
                </div>)
            : (
                <div className={classes.left}>
                    <div className={classes.circle}></div>
                    <MessageItem key={m.id} message={m.message}/>
                </div>)
    ));

    let onSubmit = (value) => {
        console.log(value);
        props.saveNewMessage(value.newMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <div className={classes.newMessage}>
                    <MessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;