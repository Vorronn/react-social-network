import React from "react";

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    onActivateEditStatus() {
        this.setState({
            editMode: true
        })
    }

    onDeactivateEditStatus() {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    onChangeStatus(event) {
        this.setState({
            status: event.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.onActivateEditStatus.bind(this)}>{this.props.status || "you status"}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input onChange={this.onChangeStatus.bind(this)} autoFocus={true} onBlur={this.onDeactivateEditStatus.bind(this)} value={this.state.status} />
                    </div>
                }

            </div>

        )
    }
}

export default ProfileStatus;