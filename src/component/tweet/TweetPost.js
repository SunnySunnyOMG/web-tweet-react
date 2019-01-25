import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class TweetPost extends Component {

    state = { content: '' }

    handlePost = () => {
        this.props.postData(this.state.content).then(() => {
            this.setState({ content: '' })
        })
    }

    handleTextChange = ({ target: { value } }) => this.setState({ content: value })

    render() {
        const {
            profile: {
                avatarUrl,
                username
            }
        } = this.props;

        return (
            <div className="tweet">
                <div className="row">
                    <img className="avatar-sm v-top" src={avatarUrl} alt={username} />
                    <textarea className="input-tweet" placeholder="What's up?" value={this.state.content} onChange={this.handleTextChange}></textarea>
                </div>
                <div className="row tweet-actions">
                    {/* <input type="hidden" role="uploadcare-uploader" name="content" id="tweet-image" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only /> */}
                    <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
                    <button className="btn-primary" type="button" onClick={this.handlePost} disabled={!/\S/.test(this.state.content)}>Post</button>
                </div>
            </div>
        );
    }
}

const mapState = state => ({
    profile: state.user.profile
})

const mapDispatch = dispatch => ({
    postData: newTweet => dispatch.tweets.postData(newTweet),
})

export default withRouter(connect(mapState, mapDispatch)(TweetPost));