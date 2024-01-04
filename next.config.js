/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
  });

const nextConfig = {
    // Add MDX support for .mdx files
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

module.exports = withMDX(nextConfig);
