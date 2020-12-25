import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {follow, unfollow, getUsers, setCurrentPage} from "../../redux/usersPageReducer";
import Preloader from "../Common/Preloader/Preloader";
import {
    getCountUsers,
    getCountUsersPage,
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getUserSelectorSuper
} from "../../redux/userSelectors";

class FriendsContainer extends React.Component {
    // https://social-network.samuraijs.com/
    componentDidMount() {
        this.props.getUsers(this.props.countUsersPage, this.props.currentPage);
    };

    onClickNumberPage = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        this.props.getUsers(this.props.countUsersPage, numberPage);
    };


    render() {
        return (
            <div>
                { this.props.isFetching? <Preloader/> : null }
                <Friends {...this.props} onClickNumberPage={this.onClickNumberPage}/>
            </div>
        )
    }

}


let mapStateToProps = (state) => {
    return {
        users: getUserSelectorSuper(state),
        currentPage: getCurrentPage(state),
        countUsersPage: getCountUsersPage(state),
        countUsers: getCountUsers(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}

export default connect(mapStateToProps, {follow, unfollow, getUsers, setCurrentPage})(FriendsContainer);