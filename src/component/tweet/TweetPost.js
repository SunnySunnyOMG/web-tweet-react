import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { uploadImage } from '../../utils';

class TweetPost extends Component {

    inputRef = React.createRef()

    state = { content: '', imageUrl: null, imgDataUrl: '' }

    handlePost = () => {
        this.props.postData(this.state).then(() => {
            this.setState({ content: '', imageUrl: null })
        })
    }

    handleImageFile = (e) => {
        const file = e.target.files[0]
        if (!file) return;
        uploadImage(file).then(url => this.setState({
            imageUrl: url
        }))
    }

    rmPendingImg = () => this.setState({
        imageUrl: null
    })

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

                    {this.state.imageUrl
                        ? <img onClick={this.rmPendingImg} src={this.state.imageUrl} style={{ maxWidth: 300, maxHeight: 200, objectFit: 'contain' }} />
                        : <>
                            <input style={{ display: 'none' }} ref={this.inputRef} onChange={this.handleImageFile} type="file" accept="image/*" />
                            <button onClick={() => this.inputRef.current.click()} className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
                        </>}
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