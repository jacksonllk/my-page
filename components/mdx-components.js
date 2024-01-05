import { MDXProvider } from '@mdx-js/react'
import { MDXRemote } from 'next-mdx-remote'

const components = {
  // Your custom components here
}

export function Mdx({ source }) {
  return (
    <MDXProvider components={components}>
      <MDXRemote {...source} />
    </MDXProvider>
  )
}