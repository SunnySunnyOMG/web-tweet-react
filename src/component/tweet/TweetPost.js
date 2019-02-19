import React, { Component } from 'react';
import axios from 'axios'

import { baseUrl } from '../../config'

class TweetPost extends Component {

    state = { content: '' }

    handlePost = () => {
        axios.post(baseUrl + '/tweet', { content: this.state.content }, {
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        }).then(res => {
            this.props.handleNewPost(res.data.tweet)
            this.setState({
                content: ''
            })
        })
    }

    handleTextChange = ({ target: { value } }) => this.setState({ content: value })

    render() {
        const {
          profile:{
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

export default TweetPost;