import React from "react";

const CommentDetails = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.image} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.name}
                </a>
                <div className="text"> {props.text}</div>
            </div>
        </div>
    )
}

export default CommentDetails;