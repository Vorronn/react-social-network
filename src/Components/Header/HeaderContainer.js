import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout} from "../../redux/authReducer";
import Preloader from "../Common/Preloader/Preloader";


class HeaderContainer extends Component {
    //
    // componentDidMount(){
    //     this.props.getAuth();
    // }

    render() {
        return (
            <>
                {this.props.isFetching? <Preloader />: null}
                <Header {...this.props} />
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        idUser: state.auth.idUser,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {getAuth, logout})(HeaderContainer);