import React, { Component } from "react";

import Header from "./Header";
import Post from "./Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Pedro Henrique",
        postedAt: "há 15 min",
        content:
          "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus."
      },
      {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Bárbara Beatriz",
        postedAt: "há 3 horas",
        content:
          "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum."
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="posts-container">
          {posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
