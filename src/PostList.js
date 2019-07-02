import React from 'react';
import Post from './Post';

const PostList = ({ items }) => (
  <div>
    {items.map(item => (
      <Post key={item.id} post={item} />
    ))};
  </div>
)

export default PostList;