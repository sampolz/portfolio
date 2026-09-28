import { SiteNav } from 'app/components/site-nav'
import { SiteFooter } from 'app/components/site-footer'
import { work, projects } from 'app/data'

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <SiteNav />

      {/* Bio */}
      <section className="mb-7 py-5">
        <div className="space-y-5">
        <p className="text-[1.02rem] leading-8 text-neutral-700 dark:text-white">
          Hey! I'm Sam, a Software Engineer at{" "}
          <a href="https://apple.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">Apple</a>
          , where I am a iOS/MacOS engineer on AppleConnect - Apple's internal SSO portal, which is used by 150,000+ Apple employees daily.{" "}
          Before Apple, I was a student at{" "}
          <a href="https://colby.edu/" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">Colby College</a>,
          where I graduated in May 2026 with a{" "}
          <a href="https://cs.colby.edu/curriculum.php#cs-ai" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">CS:AI</a>{" "}
          degree.
        </p>
        <p className="text-[1.02rem] leading-8 text-neutral-700 dark:text-white">
          I'm a big foodie, have been getting into woodworking, and love to travel. My girlfriend and I recently went on a trip to Banff - check out our{" "}
          <a href="/banff-itinerary" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">itinerary</a>!
        </p>
        <p className="text-[1.02rem] leading-8 text-neutral-700 dark:text-white">
          Before starting full time at Apple, I spent one summer interning with my same team, and spent two prior summers interning at <a href="https://teradyne.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">Teradyne</a>
          , also as a Software Engineer. In high school, I spent 3 summers interning in business development at{" "}
          <a href="https://www.legendsoflearning.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">Legends of Learning</a> 
          , a startup building a platform of educational games for K-8 students.
        </p>
        <p className="text-[1.02rem] leading-8 text-neutral-700 dark:text-white">
          I love meeting new people and having great conversations. If you're reaching out about an opportunity or just want to chat, feel free to reach out at{" "}
          <a href="mailto:sam.polyakov@gmail.com" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">
            sam.polyakov[at]gmail[dot]com
          </a>
          ,
        </p>
        </div>
      </section>

      {/* Work */}
      <section className="mb-6">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-700 dark:text-white">Work</h2>
        <div className="border-t border-dashed border-neutral-300 dark:border-neutral-700">
          {work.map((item, index) => {
            return (
              <div
                key={item.company}
                className={index === 0 ? "" : "border-t border-dashed border-neutral-300 dark:border-neutral-700"}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block py-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800">
                      {(item.logo || item.logoLight || item.logoDark) && (
                        <>
                          <img
                            src={item.logoLight || item.logo || ''}
                            alt={item.company}
                            className="logo-light h-full w-full object-cover"
                          />
                          <img
                            src={item.logoDark || item.logoLight || item.logo || ''}
                            alt={item.company}
                            className="logo-dark h-full w-full object-cover"
                          />
                        </>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="min-w-0">
                        <p className="truncate text-[1.1rem] font-medium tracking-tight text-neutral-900 group-hover:text-black dark:text-white dark:group-hover:text-white">
                          {item.company}
                        </p>
                      </div>

                      <ul className="mt-2 space-y-1 pl-1 text-sm text-neutral-500 dark:text-neutral-400">
                        {item.experiences.map((experience) => (
                          <li key={`${experience.role}-${experience.year}`} className="flex items-baseline justify-between gap-4">
                            <div className="flex min-w-0 flex-1 items-baseline gap-3">
                              <span className="font-mono text-xs text-neutral-300 dark:text-neutral-700">
                                └─
                              </span>
                              <span className="min-w-0 flex-1">{experience.role}</span>
                            </div>
                            <span className="flex-shrink-0 text-neutral-400 dark:text-neutral-500">
                              {experience.year}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-700 dark:text-white">Projects</h2>
        <div className="border-t border-dashed border-neutral-300 dark:border-neutral-700">
          {projects.map((item, index) => (
            <div
              key={item.name}
              className={index === 0 ? "" : "border-t border-dashed border-neutral-300 dark:border-neutral-700"}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-4"
              >
                <p className="text-[1.1rem] font-medium tracking-tight text-neutral-900 group-hover:text-black dark:text-white">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{item.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
