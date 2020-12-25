import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getIdProfile, getUserStatus, updateUserStatus} from "../../redux/profilePageReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(){

        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authorizeUserId;
        }

        this.props.getIdProfile(userId);
        this.props.getUserStatus(userId);

    }


    render(){
        return (
            <Profile {...this.props}  />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authorizeUserId: state.auth.idUser,
        isAuth: state.auth.isAuth
    }

}

export default compose(connect(mapStateToProps, {getIdProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
    )(ProfileContainer);