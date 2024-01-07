/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx','ts', 'tsx'],
  // Optionally, add any other Next.js config below

    // Add `output: 'standalone'` for deployment
    output: 'standalone',
}
 
module.exports = nextConfig