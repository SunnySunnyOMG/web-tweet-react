import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        const {
            token,
            profile: {
                avatarUrl,
                username
            }
        } = this.props;

        return (
            <nav className="nav-bar">
                <div className="container nav-container">
                    <ul>
                        <li><Link to="/"><img className="logo" src='/img/logo.png' alt="webdxd" /></Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    <div>
                        {token && <Link to="/profile"><img className="avatar-sm" src={avatarUrl} alt={username} /></Link>}
                        {/* Remember to close image tag */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
