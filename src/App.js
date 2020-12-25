import React, {Component} from 'react';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
//import DialogsContainer from './Components/Dialogs/DialogsContainer';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import Login from './Components/Login/Login';
import './App.css';
import {Route, withRouter} from "react-router-dom";
//import FriendsContainer from "./Components/Friends/FriendsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {authorizedApp} from "./redux/appReducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(()=> import('./Components/Dialogs/DialogsContainer'));
const FriendsContainer = React.lazy(()=> import('./Components/Friends/FriendsContainer'));


class App extends React.Component {
    componentDidMount(){
        this.props.authorizedApp();
    }

    render(){
        console.log(this.props.authorized);
        if(!this.props.authorized){
            // console.log('nnn');
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='leftColumn'></div>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends'
                           render={withSuspense(FriendsContainer)}/>
                    <Route path='/login'
                           render={() => <Login />} />
                </div>
                <div className='rightColumn'></div>
            </div>
        );
    }

}

let mapStateToProps = (state) => {
    return (
        {authorized: state.authorized.authorized}
    )
}

export default compose(withRouter,connect(mapStateToProps, {authorizedApp}))(App);

// compose(
//     withRouter,
//     connect(mapStateToProps, {authorizedApp})(App));
