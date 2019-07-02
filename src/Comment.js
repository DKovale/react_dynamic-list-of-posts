import React from 'react';

function Comment(props) {
  return (
    <div className="comment">
      <p>{props.cmnt.body}</p>
      <div className="author">
      <span>Name: </span> {props.cmnt.name}, 
      <span> e-mail: </span> {props.cmnt.email}, 
    </div>
    </div>
  );
}

export default Comment;
