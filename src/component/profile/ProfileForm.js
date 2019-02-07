import React, { Component } from 'react';

import uploadImage from '../../img/upload.png';

class ProfileForm extends Component {

    render() {
        return (
            <form className="profile" action="profile.html">
                <div className="relative img-edit">
                    <img className="avatar" src={this.props.avatar} alt="avatar" id="avatar-image" />
                    <img className="avatar-upload" src={uploadImage} alt="upload-img" id="avatar-file-btn" />
                </div>
                <input className="input-profile" type="text" id="name-input" placeholder="Full name" />
                <h5 id="username">@yan2</h5>
                <input className="input-profile" type="text" id="location-input" placeholder="Location" />
                <textarea className="input-profile" id="bio-input" placeholder="Personal Bio"></textarea>
                <button className="btn-primary space-top" type="button" id="save-btn">Save</button>
                <button className="btn-border space-top" type="button" id="cancel-btn">Cancel</button>
            </form>
        );
    }
}

export default ProfileForm;