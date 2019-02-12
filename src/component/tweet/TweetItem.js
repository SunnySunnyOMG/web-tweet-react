import React from 'react';
import moment from 'moment';

function TweetItem(props) {

    const {
        value: {
            author: {
                avatarUrl,
                name,
                username
            },
            createdAt,
            content
        }
    } = props;

    return (
        <div className="tweet">
            <div className="row relative">
                <img className="tweet-avatar" src={avatarUrl} alt="avatar" />
                <h4><b>{name}</b></h4>
                <h5>@{username}</h5>
                <h5>{moment(createdAt).calendar()}</h5>
            </div>
            <p>{content}</p>
        </div>
    );
}


export default TweetItem;
