import React, { Component } from 'react';

class Page extends Component {
    render() {
        const { avatar } = this.props;

        return (
            <div className="container">
                <div className="col-2of5 bg-white profile">
                    <div className="profile-content"></div>
                </div>
                <div className="col-3of5 bg-white">
                    <div className="tweet">
                        <form id="tweet-form">
                            <div className="row">
                                <img className="avatar-sm v-top" src={avatar} alt="avatar" />
                                <textarea className="input-tweet" placeholder="What's up?" id="tweet-content"></textarea>
                            </div>
                            <div className="row tweet-actions">
                                {/* <input type="hidden" role="uploadcare-uploader" name="content" id="tweet-image" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only /> */}
                                <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
                                <button className="btn-primary" type="button" id="post-btn" disabled>Post</button>
                            </div>
                        </form>
                    </div>
                    <div id="tweet-list"></div>
                </div>
            </div>
        );
    }
}

export default Page;
