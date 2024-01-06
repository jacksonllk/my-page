import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import { readdir, readFile } from "fs/promises";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";

const POSTS_FOLDER = path.join(process.cwd(), "posts");

async function readPostFiles() {
    const filenames = await readdir(POSTS_FOLDER);
    const fileContents = await Promise.all(
        filenames.map((filename) =>
            readFile(path.join(POSTS_FOLDER, filename), "utf8")
        )
    );
    return fileContents;
}

export default async function CategoryPage({ params }) {
    console.log('Category:', params.category); // Check the category

    const fileContents = await readPostFiles();

    const posts = await Promise.all(
        fileContents.map(async (content) => {
            const { content: mdxContent, frontmatter } = await compileMDX({
                source: content,
                options: { parseFrontmatter: true },
            });
            console.log('Categories:', frontmatter.categories); // Add this line

            return { content: mdxContent, frontmatter };
        })
    );

    console.log('Posts:', posts); // Check the posts

    // Filter posts based on category
    const postsInCategory = posts.filter(
        (post) =>
            post.frontmatter.categories &&
            post.frontmatter.categories.map(category => category.toLowerCase()).includes(params.category.toLowerCase())
    );
    console.log('Posts in category:', postsInCategory); // Check the posts in category


    if (!postsInCategory.length) {
        notFound();
    }

    // Render posts in category
    return (
        <div>
            {postsInCategory.map((post) => (
                <article key={post.slug} className="mb-12">
                    <Card>
                        {post.frontmatter.image && (
                            <div className="relative h-60 w-full">
                                <Link href={`/posts/${post.slug}`}>
                                    <Image
                                        className="m-0 w-full rounded-t-lg object-cover"
                                        src={post.frontmatter.image}
                                        alt={post.frontmatter.title}
                                        fill
                                    />
                                </Link>
                            </div>
                        )}
                        <CardHeader>
                            <CardTitle className="m-0">
                                <Link href={`/posts/${post.slug}`} className="no-underline">
                                    {post.frontmatter.title}
                                </Link>
                            </CardTitle>
                            <CardDescription className="space-x-1 text-xs">
                                <span>{format(parseISO(post.frontmatter.date), "MMMM dd, yyyy")}</span>
                                <span>{` • `}</span>
                                {post.frontmatter.categories && post.frontmatter.categories.map(category => (
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
                        {post.frontmatter.description && <CardContent>{post.frontmatter.description}</CardContent>}
                    </Card>
                </article>
            ))}
        </div>
    );
}