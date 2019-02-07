import React, { Component } from 'react';

class TweetPost extends Component {

    state = { content: '' }

    handleTextChange = ({ target: { value } }) => this.setState({ content: value })

    handlePost = () => {
        this.props.handleNewPost(this.state.content)
        this.setState({ content: '' })
    }

    render() {
        return (
            <form className="tweet" id="tweet-form">
                <div className="row">
                    <img className="avatar-sm v-top" src={this.props.avatar} alt="avatar" />
                    <textarea className="input-tweet" placeholder="What's up?" value={this.state.content} onChange={this.handleTextChange}></textarea>
                </div>
                <div className="row tweet-actions">
                    {/* <input type="hidden" role="uploadcare-uploader" name="content" id="tweet-image" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only /> */}
                    <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
                    <button className="btn-primary" type="button" onClick={this.handlePost} disabled={!/\S/.test(this.state.content)}>Post</button>
                </div>
            </form>
        );
    }
}

export default TweetPost;
