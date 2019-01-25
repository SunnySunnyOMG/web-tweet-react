import React from 'react';
import moment from 'moment';

import { Route } from 'react-router-dom';
import TweetDelete from './TweetDelete'

function TweetItem(props) {

    const {
        value: {
            _id,
            author: {
                avatarUrl,
                name,
                username
            },
            createdAt,
            content
        },
        token,
        handleDeletePost
    } = props;

    return (
        <div className="tweet">
            <div className="row relative">
                <img className="tweet-avatar" src={avatarUrl} alt="avatar" />
                <h4><b>{name}</b></h4>
                <h5>@{username}</h5>
                <h5>{moment(createdAt).calendar()}</h5>
                <Route path="/profile" render={()=><TweetDelete id={_id} token={token} handleDeletePost={handleDeletePost} />}/>
            </div>
            <p>{content}</p>
        </div>
    );
}


export default TweetItem;
