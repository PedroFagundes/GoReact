import React from "react";

import PostHeader from "./PostHeader";

const Post = ({ data }) => {
  return (
    <div className="post">
      <PostHeader data={data} />
      <p className="content">{data.content}</p>
    </div>
  );
};

export default Post;
