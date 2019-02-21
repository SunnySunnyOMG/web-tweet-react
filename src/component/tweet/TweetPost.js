import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { uplaodImage } from '../utils';


class TweetPost extends Component {

    state = { content: '', imageUrl: '' }

    inputRef = React.createRef()

    handlePost = () => {
        this.props.postData(this.state).then(() => {
            this.setState({ content: '', imageUrl: '' })
        })
    }

    handleTextChange = ({ target: { value } }) => this.setState({ content: value })

    handleFileUpload = e => {
      console.log(e.target.files[0]) // js File
      const file = e.target.files[0]
      if(!file) return;
      
      uplaodImage(file).then(imageUrl => this.setState({imageUrl}))
    }

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
                    {this.state.imageUrl && <img src={this.state.imageUrl} style={{height: 200, width: 300}}/>}
                    <input ref={this.inputRef} style={{display: 'none'}} type="file" accept="image/*" onChange={this.handleFileUpload}/> 
                    <button onClick={()=>this.inputRef.current.click()} className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
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