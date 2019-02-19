import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileForm extends Component {
  constructor(props) {
		super(props)
		this.formValue = {
			avatarUrl: props.profile.avatarUrl,
			location: props.profile.location || '',
			bio: props.profile.bio || '',
			name: props.profile.name,
		}
	}


	handleNameChange = (e) => {
		this.formValue.name = e.target.value
	}

	handleLocationChange = (e) => {
		this.formValue.location = e.target.value
	}

	handleBioChange = (e) => {
		this.formValue.bio = e.target.value
	}

  saveProfile = () => {
      this.props.updateProfile({
        ...this.props.profile, 
        ...this.formValue
      })
  }

    render() {
        const {
          profile:{
            avatarUrl,
            location,
            bio,
            name,
            username
          }
        } = this.props;
        return (
            <div className="profile">
                <div className="relative img-edit">
                    <img className="avatar" src={avatarUrl} alt="avatar" id="avatar-image" />
                    <img className="avatar-upload" src="/img/upload.png" alt="upload-img" />
                </div>
                <input className="input-profile" type="text" defaultValue={name} placeholder="Full name" onChange={this.handleNameChange} />
                <h5 id="username">@{username}</h5>
                <input className="input-profile" type="text" defaultValue={location} placeholder="Location" onChange={this.handleLocationChange} />
                <textarea className="input-profile" placeholder="Personal Bio" onChange={this.handleBioChange} defaultValue={bio}></textarea>
                <button className="btn-primary space-top" type="button" onClick={this.saveProfile}>Save</button>
                <Link to="/profile"><button className="btn-border space-top" type="button">Cancel</button></Link>
            </div>
        );
    }
}

const mapState = state => ({
    profile: state.user.profile,
    token: state.user.token
})

const mapDispatch = dispatch => ({
    updateProfile: user => dispatch.user.updateProfile(user)
})

export default withRouter(connect(mapState, mapDispatch)(ProfileForm));
