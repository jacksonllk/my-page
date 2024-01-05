// components/Blog.js
import Image from "next/image"
import Link from "next/link"
import { format, parseISO } from "date-fns"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Read MDX files from the posts directory
const postsDirectory = path.join(process.cwd(), 'posts')
const filenames = fs.readdirSync(postsDirectory)

// Get data from each MDX file
const allPosts = filenames.map(filename => {
  const filePath = path.join(postsDirectory, filename)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return {
    slug: filename.replace(/\.mdx$/, ''),
    ...data
  }
})

const Blog = () => {
  return (
    <div>
      {allPosts.map((post) => (
        <article key={post.slug} className="mb-12">
          <Card>
            {post.image && (
              <div className="relative h-60 w-full">
                <Link href={post.slug}>
                  <Image
                    className="m-0 w-full rounded-t-lg object-cover"
                    src={post.image}
                    alt={post.title}
                    fill
                  />
                </Link>
              </div>
            )}
            <CardHeader>
              <CardTitle className="m-0">
                <Link href={post.slug} className="no-underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="space-x-1 text-xs">
                <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
                <span>{` • `}</span>
                {post.categories && post.categories.map(category => (
                  <span key={category}>
                    <Link
                      href={`/categories/${encodeURIComponent(category.toLowerCase())}`}
                      className="underline underline-offset-2"
                    >
                      {category}
                    </Link>
                  </span>
                ))}
              </CardDescription>
            </CardHeader>
            {post.description && <CardContent>{post.description}</CardContent>}

          </Card>
        </article>
      ))}
    </div>
  );
};

export default Blog;