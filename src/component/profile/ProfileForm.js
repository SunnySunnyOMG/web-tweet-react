import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
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
            isSaved: false
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleBioChange = this.handleBioChange.bind(this)
        this.saveProfile = this.saveProfile.bind(this)
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleLocationChange(e) {
        this.setState({
            location: e.target.value
        })
    }

    handleBioChange(e) {
        this.setState({
            bio: e.target.value
        })
    }

    saveProfile() {
        let that = this
        axios.put(baseUrl + '/profile/' + this.props.profile._id, this.state, {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        }).then(res => {
            that.props.handleUserUpdate({profile: res.data.profile})
            that.setState({
                isSaved: true
            })
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
                {this.state.isSaved ? <Redirect to="/profile" /> : <button className="btn-primary space-top" type="button" onClick={this.saveProfile}>Save</button>}
                <Link to="/profile"><button className="btn-border space-top" type="button">Cancel</button></Link>
            </div>
        );
    }
}

export default ProfileForm;