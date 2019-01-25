import React, { Component, Fragment } from 'react';
import { Route , withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Profile extends Component {

    render() {
        const {
            profile: {
                avatarUrl,
                username,
                name,
                location,
                bio
            }
        } = this.props;

        return (
            <div className="profile">
                <img className="avatar" src={avatarUrl} alt={username} />
                <h3>{name}</h3>
                <h5>@{username}</h5>
                {location && <h4><i className="fas fa-map-marker-alt"></i> {location}</h4>}
                <p className="center">{bio}</p>
                <Route
                    path='/profile'
                    render={() =>
                        <Fragment>
                            <Link className="btn-border space-top" to="/profile/edit">Edit profile</Link>
                            <Link className="btn-border space-top" to="/login">Log out</Link>
                        </Fragment>
                    }
                />
            </div>
        );
    }
}

const mapState = state => ({
    profile: state.user.profile,
    token: state.user.token
})

const mapDispatch = dispatch => ({
    logout: () => dispatch.user.logout(),
})

export default withRouter(connect(mapState, mapDispatch)(Profile));
