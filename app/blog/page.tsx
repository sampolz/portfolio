import { BlogPosts } from 'app/components/posts'
import { SiteFrame } from 'app/components/site-frame'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <SiteFrame>
      <section>
        <h1 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-5">
          Blog
        </h1>
        <BlogPosts />
      </section>
    </SiteFrame>
  )
}
