import React, { Component } from 'react';
import axios from 'axios';

import TweetList from './TweetList'
import TweetPost from './TweetPost';
import SideBar from './Sidebar';

class Page extends Component {

    state = {
        tweets: []
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
        axios.get(`http://tweet-api.webdxd.com/tweet`)
            .then(res => {
                const tweets = res.data.tweets
                this.setState({ tweets });
            })
    }

    render() {
        const {
            avatar      
        } = this.props;

        return (
            <div className="container">
                <div className="col-2of5 bg-white">
                  <SideBar avatar={avatar}/>
                </div>
                
                <div className="col-3of5 bg-white">
                    <TweetPost avatar={avatar} handleNewPost={this.handleNewPost} />
                    <TweetList tweets={this.state.tweets} />
                </div>
            </div>
        );
    }
}

export default Page;
