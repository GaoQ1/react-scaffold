'use strict';
import React, {Component} from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

class CommentBox extends Component{
    render(){
        return (
            <div className="commentBox">
                <h1>评论功能</h1>
                <CommentList/>
                <CommentForm/>
            </div>
        );
    }
}

export default CommentBox;