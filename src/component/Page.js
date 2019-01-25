import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../config'

import Nav from './Nav';
import TweetList from './tweet/TweetList'
import TweetPost from './tweet/TweetPost';
import SideBar from './Sidebar';

class Page extends Component {

    state = {
        tweets: [],
        token: '',
        profile: {}
    }
    
    handleUserUpdate = user => {
        this.setState({
            ...user
        })
    }

    handleLogout = () => {
        this.setState({
            token: ''
        })
    }

    handleNewPost = newPost => {
        const newTweet = {
            createdAt: '2018-06-10T15:37:29.033Z',
            author: {
                avatarUrl: 'https://avatars1.githubusercontent.com/u/23184068?s=400&v=4',
                username: 'SunnySunnyOMG',
                name: 'Zhe Xu',
            },
            content: newPost,
            _id: Math.random().toString(36).substr(2, 9)
        }

        this.setState(preState => ({
            tweets: [newTweet, ...preState.tweets]
        }))
    }

    componentDidMount() {
        axios.get(baseUrl + '/tweet')
            .then(res => {
                const tweets = res.data.tweets
                this.setState({ tweets });
            })
    }

    render() {
        return (
            <div>
                <Nav profile={this.state.profile} token={this.state.token} />
                <div className="container">
                    <div className="col-2of5 bg-white">
                        <SideBar profile={this.state.profile} handleUserUpdate={this.handleUserUpdate} handleLogout={this.handleLogout} token={this.state.token} />
                    </div>
                    <div className="col-3of5 bg-white">
                        {this.state.token && <TweetPost profile={this.state.profile} handleNewPost={this.handleNewPost} />}
                        <TweetList tweets={this.state.tweets} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;
