import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import TweetItem from './TweetItem'

export default class TweetList extends Component {
    render() {
        const {
            tweets,
            profile,
            token,
            handleDeletePost
        } = this.props;
        
        return (
            <Switch>
                <Route path='/profile/edit' render={() => <div className="fade-cover"></div>} />
                <Route path='/profile' render={() => tweets
                    .sort((a, b) => a.createdAt < b.createdAt)
                    .map(tweet => tweet.author._id === profile._id && <TweetItem value={tweet} key={tweet._id} token={token} handleDeletePost={handleDeletePost} />)} />
                <Route path='/' render={() => tweets
                    .sort((a, b) => a.createdAt < b.createdAt)
                    .map(tweet => <TweetItem value={tweet} key={tweet._id} />)} />
            </Switch>
        );
    }
}
