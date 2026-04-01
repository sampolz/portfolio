import Link from 'next/link'

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <nav className="flex justify-between items-center mb-16">
        <Link href="/" className="text-sm font-medium">
          Sam Polyakov
        </Link>
        <div className="flex gap-5">
          <a
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Home
          </a>
          <a
            href="/blog"
            className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Blog
          </a>
          <a
            href="/resume.pdf"
            className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>

      {children}

      <footer className="flex gap-4 pt-6 mt-16 border-t border-neutral-100 dark:border-neutral-800">
        <a
          href="https://github.com/sampolz"
          className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/sam-polyakov"
          className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          LinkedIn
        </a>
        <span className="ml-auto text-xs text-neutral-400">© Your Name</span>
      </footer>
    </main>
  )
}
