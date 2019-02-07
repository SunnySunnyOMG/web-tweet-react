import React, { Component } from 'react';

export default class TweetPost extends Component {

  state = {
    content: ''
  }

  handleTextChange = (e) => {
    const { target: { value } } = e
    this.setState({
      content: value
    })
  }

  handlePost = e => {
    console.log('点击我啦')
    this.props.handleNewPost(this.state.content)
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div className="tweet">
        <form id="tweet-form">
          <div className="row">
            <img className="avatar-sm v-top" src={this.props.avatar} alt="avatar" />
            <textarea value={this.state.content} onChange={this.handleTextChange} className="input-tweet" placeholder="What's up?" id="tweet-content"></textarea>
          </div>
          <div className="row tweet-actions">
            {/* <input type="hidden" role="uploadcare-uploader" name="content" id="tweet-image" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only /> */}
            <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
            <button onClick={this.handlePost} className="btn-primary" type="button" id="post-btn" disabled={!this.state.content}>Post</button>
          </div>
        </form>
      </div>
    )
  }
}
