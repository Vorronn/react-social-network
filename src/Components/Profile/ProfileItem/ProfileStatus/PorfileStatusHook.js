import React, {useEffect, useState} from "react";

const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    let onActivateEditStatus = () => {
        setEditMode(true);
    }

    let onDeactivateEditStatus = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    let onChangeStatus = (event) => {
        setStatus(event.currentTarget.value);
    }


    return (
        <div>
            {
                !editMode &&
                <div>
                    <span
                        onDoubleClick={onActivateEditStatus}>{props.status || "you status"}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onChangeStatus} autoFocus={true}
                           onBlur={onDeactivateEditStatus} value={status}/>
                </div>
            }

        </div>

    )
}

export default ProfileStatusHook;