import React, { Component } from 'react';

class Nav extends Component {
    render() {
        const {
            logo,
            avatar
        } = this.props;

        return (
            <nav className="nav-bar">
                <div className="container nav-container">
                    <ul>
                        <li><a href="index.html"><img className="logo" src={logo} alt="webdxd" /></a></li>
                        <li><a href="index.html">Home</a></li>
                    </ul>
                    <div>
                        <a href="profile.html"><img className="avatar-sm" src={avatar} alt="avatar" /></a>
                        {/* Remember to close image tag */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
