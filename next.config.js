/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx','ts', 'tsx'],
  // images: { unoptimized: true },
  output: 'export',
}
 
module.exports = nextConfig