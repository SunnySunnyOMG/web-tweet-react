import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginForm from './auth/LoginForm'
import Profile from './profile/Profile'
import ProfileForm from './profile/ProfileForm';

class SideBar extends Component {

    static defaultProps = {
        avatar: 'https://ucarecdn.com/8c34b406-c767-4858-91e2-cb1e45ad231f/'
    }

    render() {
        const { avatar } = this.props
        return (
            <Switch>
                <Route path='/profile/edit' render={() => <ProfileForm avatar={avatar} />} />
                <Route path='/login' component={LoginForm} />
                <Route path='/' render={() => <Profile avatar={avatar} />} />
            </Switch>
        );
    }
}

export default SideBar;