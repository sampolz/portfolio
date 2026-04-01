import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="block py-3 group"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
              <p className="text-xs text-neutral-400 tabular-nums flex-shrink-0 md:order-2">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-sm font-medium group-hover:underline underline-offset-4 md:order-1">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
