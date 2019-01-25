import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


import Nav from './Nav';
import TweetList from './tweet/TweetList'
import TweetPost from './tweet/TweetPost';
import SideBar from './Sidebar';

class Page extends Component {

    componentWillMount() {
        this.props.loadData()
    }

    render() {
        const {
            profile,
            token,
        } = this.props

        return (
            <div>
                <Nav profile={profile} token={token} />
                <div className="container">
                    <div className="col-2of5 bg-white">
                        <SideBar profile={profile} token={token} />
                    </div>
                    <div className="col-3of5 bg-white">
                        {token && <TweetPost />}
                        <TweetList/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = state => ({
    profile: state.user.profile,
    token: state.user.token,
    tweets: state.tweets
})

const mapDispatch = dispatch => ({
    loadData: () => dispatch.tweets.loadData(),
    updateUser: user => dispatch.user.update(user),
    logout: () => dispatch.user.logout(),
    addTweet: tweet => dispatch.tweets.add(tweet),
    removeTweet: id => dispatch.tweets.remove(id)
})

export default withRouter(connect(mapState, mapDispatch)(Page));

// export default Page;
