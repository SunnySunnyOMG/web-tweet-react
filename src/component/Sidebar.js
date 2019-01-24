import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignupForm from './auth/SignupForm'
import LoginForm from './auth/LoginForm'
import Profile from './profile/Profile'
import ProfileForm from './profile/ProfileForm';

class SideBar extends Component {

    render() {
        const { avatar, token } = this.props
        return token ?
            // the pages to show when user get acess token
            <Switch>
                <Route path="/profile/edit" render={() => <ProfileForm avatar={avatar} />} />
                <Route path="/" render={() => <Profile avatar={avatar} />} />
                <Redirect to="/" />
            </Switch> :
            // the pages to show when user don't have the token
            <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" render={() => <SignupForm handleTokenUpdate={this.props.handleTokenUpdate} />} />
                <Redirect to="/signup" />
            </Switch>

    }
}

export default SideBar