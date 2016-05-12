'use strict';
import React, {Component} from 'react';
import Comment from './Comment.jsx';

class CommentList extends Component{
    render(){
        return (
            <div className="commentList">
                <Comment author="people1">Comment1</Comment>
                <Comment author="people2">Comment2</Comment>
            </div>
        )
    }
}

export default CommentList;