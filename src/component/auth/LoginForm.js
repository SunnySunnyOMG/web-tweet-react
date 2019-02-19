import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    handleUsernameChange = e => {
        this.setState({username: e.target.value})
    }

    handlePasswordChange = e => {
        this.setState({password: e.target.value})
    }

  
    handleLogin = () => {
      this.props.handleLogin(this.state)
    }

    render() {
        const { username, password } = this.state;
        // is the form valid now?
        const isFormValid =  username && password;
        return (
            <div className="profile user-auth">            
                <h3>Log in to Web Tweet</h3>
                <form id="login-form">
                    <input className="input-auth" type="text" placeholder="Username" value={username} onChange={this.handleUsernameChange} />
                    <input className="input-auth" type="password" placeholder="Password" value={password} onChange={this.handlePasswordChange} />
                    <button className="btn-primary" type="button" onClick={this.handleLogin} disabled={!isFormValid}>Log in</button>
                </form>
                <h6>New to Web Tweet? <Link to="/signup">Sign up Now</Link></h6>
            </div>
        );
    }
}
const mapDispath = dispatch => ({
  //handleUserUpdate: user => dispatch.user.update(user)
  handleLogin: (userInfo) => dispatch.user.login(userInfo)
})

export default connect(null, mapDispath)(LoginForm);
