import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {

    render() {
        return (
            <div className="profile user-auth">            
                <h3>Log in to Web Tweet</h3>
                <form id="login-form">
                    <input className="input-auth" type="text" placeholder="Username" id="username" />
                    <input className="input-auth" type="password" placeholder="Password" id="password" />
                    <button className="btn-primary" type="button" id="login-btn">Log in</button>
                    <h6>New to Web Tweet? <Link to="/signup">Sign up Now</Link></h6>
                </form>
            </div>
        );
    }
}

export default LoginForm;