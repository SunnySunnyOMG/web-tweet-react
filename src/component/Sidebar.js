import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignupForm from './auth/SignupForm'
import LoginForm from './auth/LoginForm'
import Profile from './profile/Profile'
import ProfileForm from './profile/ProfileForm';

class SideBar extends Component {

    render() {
        const { 
            token, 
            profile, 
            handleLogout, 
        } = this.props

        return token ?
            // the pages to show when user get access token
            <Switch>
                <Route path="/profile/edit" component={ProfileForm} />
                <Route path="/" render={() => <Profile profile={profile} handleLogout={handleLogout}/>} />
                <Redirect to={profile.location && profile.bio ? '/' : '/profile/edit'} />
            </Switch> :
            // the pages to show when user don't have the token
            <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignupForm} />
                <Redirect to="/signup" />
            </Switch>

    }
}

export default SideBar