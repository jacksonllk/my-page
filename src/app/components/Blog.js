import React from 'react';
import Link from 'next/link';

const Blog = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.frontMatter.title}</h3>
          {/* Render other post details */}
          <Link href={`/posts/${post.slug}`}>
            <a>Read More</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
