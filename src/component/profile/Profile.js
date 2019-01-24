import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

class Profile extends Component {

    render() {
        return (
            <div className="profile">
                <img className="avatar" src={this.props.avatar} alt="avatar" />
                <h3>Yan Hong</h3>
                <h5>@honlyan</h5>
                <h4><i className="fas fa-map-marker-alt"></i> Vancouver</h4>
                <p className="center">Director of EduHacks * Digital Ocean Vancouver Meetup Co-organizer * CEO of HackHub * Founder of Inverse Technology Inc.</p>
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

export default Profile;
