import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';
import { connect } from 'react-redux'

import { baseUrl } from '../../config'

class SignupForm extends Component {

    state = {
        username: '',
        password: '',
        repeatPassword: ''
    }

    handleUsernameChange = e => {
        this.setState({ username: e.target.value })
    }

    handlePasswordChange = e => {
        this.setState({ password: e.target.value })
    }

    handleRepeatPasswordChange = e => {
        this.setState({ repeatPassword: e.target.value })
    }

    handleSignup = () => {
        axios.post(baseUrl + '/auth/signup', this.state)
            .then(res => {
                if (res.data.error) {
                    console.log(res.data.error)
                } else {
                    res.data.token && this.props.updateUser({ token: res.data.token, profile: res.data.profile })
                }
            })
    }

    render() {
        return (
            <div className="profile user-auth">
                <h3>Log in to Web Tweet</h3>
                <input className="input-auth" type="text" placeholder="Username" onChange={this.handleUsernameChange} />
                <input className="input-auth" type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                <input className="input-auth" type="password" placeholder="Repeat password" onChange={this.handleRepeatPasswordChange} />
                <button className="btn-primary" type="button" onClick={this.handleSignup} disabled={!this.validForm(this.state)}>Sign up</button>
                <h6>Have an account? <Link to="/login">Log in</Link></h6>
            </div>
        );
    }

    validForm = ({ username, password, repeatPassword }) => username && password && password === repeatPassword

}

const mapDispatch = dispatch => ({
    updateUser: (user) => dispatch.user.update(user)
})

export default connect(null, mapDispatch)(SignupForm);