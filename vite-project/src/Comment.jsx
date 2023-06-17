import React from "react";
import "./styles/comment.css";

const Comment = ({ imgSrc, name, message }) => {
  return (
    <div className="comment">
      <div className="profile">
        <div className="img">
          <img src={imgSrc} alt="profile" />
        </div>
        <div className="content">
          <div className="name">{name}</div>
          <div className="verified">Verified Buyer</div>
        </div>
      </div>
      <div className="message">{message}</div>
    </div>
  );
};

export default Comment;
