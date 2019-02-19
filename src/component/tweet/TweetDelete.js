import React, { Component } from 'react';
import axios from 'axios'

import { baseUrl } from '../../config'

class TweetDelete extends Component {

    handleDelete() {
        let that = this
        axios.delete(baseUrl + '/tweet/' + this.props._id,{
            headers: {
                Authorization: 'Bearer ' + this.props.token
            }
        }).then(res => {
            if (res.data.success) {
                that.props.handleDeletePost(that.props._id)
            } else {
                console.log(res.data.error)
            }
        })
    }

    render() {
        return (
            <button onClick={this.handleDelete.bind(this)} className="btn-clear tweet-del"><i className="far fa-trash-alt"></i></button>
        );
    }
}

export default TweetDelete;