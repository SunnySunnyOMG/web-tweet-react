import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import TweetItem from './TweetItem'

export default class TweetList extends Component {
    compareFn = (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    
    render() {
        const {
            tweets,
            profile,
            token,
            handleDeletePost
        } = this.props;
        
        return (
            <Switch>
                <Route path='/profile/edit' render={() => <div class="fade-cover"></div>} />
                <Route path='/profile' render={() => tweets
                    .sort(this.compareFn)
                    .map(tweet => tweet.author._id === profile._id && <TweetItem value={tweet} key={tweet._id} token={token} handleDeletePost={handleDeletePost} />)} />
                <Route path='/' render={() => tweets
                    .sort(this.compareFn)
                    .map(tweet => <TweetItem value={tweet} key={tweet._id} />)} />

            </Switch>
        );
    }
}
