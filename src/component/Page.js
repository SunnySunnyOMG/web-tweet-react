import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


import Nav from './Nav';
import TweetList from './tweet/TweetList'
import TweetPost from './tweet/TweetPost';
import Sidebar from './Sidebar';

class Page extends Component {

    componentWillMount() {
        this.props.loadData()
    }

    render() {
        const {
            token,
        } = this.props

        return (
            <div>
                <Nav/>
                <div className="container">
                    <div className="col-2of5 bg-white">
                        <Sidebar/>
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
    token: state.user.token,
})

const mapDispatch = dispatch => ({
    loadData: () => dispatch.tweets.loadData(),
})

export default withRouter(connect(mapState, mapDispatch)(Page));

