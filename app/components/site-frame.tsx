import { SiteNav } from 'app/components/site-nav'
import { SiteFooter } from 'app/components/site-footer'

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <SiteNav />

      {children}

      <SiteFooter />
    </main>
  )
}
