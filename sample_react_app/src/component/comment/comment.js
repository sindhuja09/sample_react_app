
import React from 'react';
import formatDate from './formatdate';
import Welcome from '../welcome'
function Comment(props) {
return (
    <div className="Comment">
    <div className="UserInfo">
        <img
        className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
        />
        <div className="UserInfo-name">
        <Welcome />
        {props.author.name}
        </div>
    </div>
    <div className="Comment-text">{props.text}</div>
    <div className="Comment-date">
        {formatDate(props.date)}
    </div>
    
    </div>
);
}

export default Comment;
