import React from "react";

const PostHeader = ({ data }) => {
  return (
    <div className="post-header-container">
      <img className="avatar" src={data.avatar} />
      <div className="post-info">
        <span className="username">{data.name}</span>
        <span className="posted-at">{data.postedAt}</span>
      </div>
    </div>
  );
};

export default PostHeader;
