import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../../config'

class ProfileForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			avatarUrl: props.profile.avatarUrl,
			location: props.profile.location || '',
			bio: props.profile.bio || '',
			name: props.profile.name,
		}
	}

	handleNameChange = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	handleLocationChange = (e) => {
		this.setState({
			location: e.target.value
		})
	}

	handleBioChange = (e) => {
		this.setState({
			bio: e.target.value
		})
	}

	saveProfile = () => {
		const { avatarUrl, location, bio, name } = this.state

		axios.put(baseUrl + '/profile/', {
			avatarUrl,
			location,
			bio,
			name
		}, {
				headers: {
					Authorization: 'Bearer ' + this.props.token
				}
			}).then(res => {
				this.props.handleUserUpdate({ profile: res.data.profile })
				this.props.history.push('/profile')
			})
	}

	render() {
		return (
			<div className="profile">
				<div className="relative img-edit">
					<img className="avatar" src={this.state.avatarUrl} alt="avatar" id="avatar-image" />
					<img className="avatar-upload" src="/img/upload.png" alt="upload-img" />
				</div>
				<input className="input-profile" type="text" value={this.state.name} placeholder="Full name" onChange={this.handleNameChange} />
				<h5 id="username">@{this.props.profile.username}</h5>
				<input className="input-profile" type="text" value={this.state.location} placeholder="Location" onChange={this.handleLocationChange} />
				<textarea className="input-profile" placeholder="Personal Bio" onChange={this.handleBioChange} value={this.state.bio}></textarea>
				<button className="btn-primary space-top" type="button" onClick={this.saveProfile}>Save</button>
				<Link to="/profile"><button className="btn-border space-top" type="button">Cancel</button></Link>
			</div>
		);
	}
}

export default ProfileForm;