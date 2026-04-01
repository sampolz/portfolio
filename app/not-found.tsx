import { SiteFrame } from 'app/components/site-frame'

export default function NotFound() {
  return (
    <SiteFrame>
      <section>
        <h1 className="mb-2 text-2xl font-medium tracking-tight">
          404 - Page Not Found
        </h1>
        <p className="text-sm text-neutral-500">
          The page you are looking for does not exist.
        </p>
      </section>
    </SiteFrame>
  )
}
