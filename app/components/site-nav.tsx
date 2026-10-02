import Link from 'next/link'
import { ThemeToggle } from 'app/components/theme-toggle'

export function SiteNav() {
  return (
    <nav className="mb-9 flex items-center justify-between gap-8">
      <Link href="/" className="text-[1.9rem] font-semibold tracking-tight text-neutral-900 dark:text-white">
        Sam Polyakov
      </Link>
      <div className="flex items-center gap-5 text-[0.95rem]">
        <a href="https://linkedin.com/in/sam-polyakov" target="_blank" rel="noopener noreferrer" className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">
          LinkedIn
        </a>
        <a href="https://drive.google.com/file/d/1vElCnxTZDFwABdP9tBn4DMQNYv_-q8Rm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">
          Resume
        </a>
        <ThemeToggle />
      </div>
    </nav>
  )
}
