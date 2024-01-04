// index.js
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function HomePage({ posts }) {
  return (
    <div>
      <h1>Test Content</h1>
      <Intro />
      <Portfolio />
      <Blog posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const files = readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const markdownWithMeta = readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return {
    props: {
      posts,
    },
  };
}

