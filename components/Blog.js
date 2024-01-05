// components/Blog.js

import MyFirstPost from '../app/my-mdx-page/my-first-post.mdx';

const Blog = () => {
  return (
    <div>
      <article>
        <h2>Title for Post One</h2>
        <MyFirstPost />
      </article>

      {/* Add more posts similarly */}
    </div>
  );
};

export default Blog;
