import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarUrl: props.profile.avatarUrl,
            location: props.profile.location || '',
            bio: props.profile.bio || '',
            name: props.profile.name
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
        this.props.updateProfile({
          ...this.props.profile, 
          ...this.state
        })
    }

    render() {
        let props = this.props
        return (
            <div className="profile">
                <div className="relative img-edit">
                    <img className="avatar" src={this.state.avatarUrl} alt="avatar" id="avatar-image" />
                    <img className="avatar-upload" src="/img/upload.png" alt="upload-img" />
                </div>
                <input className="input-profile" type="text" value={this.state.name} placeholder="Full name" onChange={this.handleNameChange} />
                <h5 id="username">@{props.profile.username}</h5>
                <input className="input-profile" type="text" value={this.state.location} placeholder="Location" onChange={this.handleLocationChange} />
                <textarea className="input-profile" placeholder="Personal Bio" onChange={this.handleBioChange} value={this.state.bio}></textarea>
                {this.state.isSaved ? <Redirect to="/profile" /> : <button className="btn-primary space-top" type="button" onClick={this.saveProfile}>Save</button>}
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
    updateUser: user => dispatch.user.update(user),
    updateProfile: user => dispatch.user.updateProfile(user)
})

export default withRouter(connect(mapState, mapDispatch)(ProfileForm));