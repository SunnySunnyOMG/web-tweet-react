import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class TweetDelete extends Component {

    handleDelete = () => this.props.removeData(this.props.id)

    render() {
        return (
            <button onClick={this.handleDelete} className="btn-clear tweet-del"><i className="far fa-trash-alt"></i></button>
        );
    }
}

const mapDispatch = dispatch => ({
    removeData: deleteTweet => dispatch.tweets.removeData(deleteTweet),
})

export default withRouter(connect(null, mapDispatch)(TweetDelete));