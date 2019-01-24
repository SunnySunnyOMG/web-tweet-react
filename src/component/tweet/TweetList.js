import React, { Component } from 'react';

import TweetItem from './TweetItem'

class TweetList extends Component {
    render() {
        return this.props.tweets.map(tweet => <TweetItem value={tweet} key={tweet._id}/>)
    }
}

export default TweetList;
