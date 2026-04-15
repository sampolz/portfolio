import { ThemeToggle } from 'app/components/theme-toggle'

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {/* Nav */}
      <nav className="mb-14 flex items-center justify-between gap-8">
        <span className="text-[1.9rem] font-semibold tracking-tight text-neutral-900 dark:text-white">Sam Polyakov</span>
        <div className="flex items-center gap-5 text-[0.95rem]">
          <a href="/" className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">Home</a>
          <a href="/banff-itinerary" className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">Banff</a>
          <a href="https://github.com/sampolz" target="_blank" rel="noopener noreferrer" className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">GitHub</a>
          <a href="https://linkedin.com/in/sam-polyakov" target="_blank" rel="noopener noreferrer" className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">LinkedIn</a>
          <a href="https://drive.google.com/file/d/1dbd2a8eLE3WiQ4Jy2qpTubPY2GPMZKZy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">Resume</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Bio */}
      <section className="mb-14 border-y border-dashed border-neutral-300 py-5 dark:border-neutral-700">
        <div className="space-y-5">
        <p className="text-[1.02rem] leading-8 text-neutral-700 dark:text-neutral-300">
          I'm a senior CS major at{" "}
          <a href="https://colby.edu/" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">Colby College</a>
          , passionate about architecture, sculpture, and education. At school, I am a TA and Tutor for the CS department, and president of the Coding Club 
          - a program where we go to the local high school and help out in CS classes.
        </p>
        <p className="text-[1.02rem] leading-8 text-neutral-700 dark:text-neutral-300">
          I spent this past summer interning at <a href="https://apple.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">Apple</a>{" "}
          as a Software Engineer working on AppleConnect (Apple's internal SSO portal & VPN) and recieved a full-time return offer.
        </p>
        <p className="text-[1.02rem] leading-8 text-neutral-700 dark:text-neutral-300">
          Prior to Apple, I spent 2 summers interning at <a href="https://teradyne.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">Teradyne</a>
          , also as a Software Engineer. In high school, I spent 3 summers interning in business development at{" "}
          <a href="https://www.legendsoflearning.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">Legends of Learning</a> 
          , a startup building a platform of educational games for K-8 students.
        </p>
        <p className="text-[1.02rem] leading-8 text-neutral-700 dark:text-neutral-300">
          I'm also planning a trip to Banff National Park in a campervan with my girlfriend! Check out the{" "}
          <a href="/banff-itinerary" target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">intinerary</a> 😁.
        </p>
        <p className="text-[1.02rem] leading-8 text-neutral-700 dark:text-neutral-300">
          Feel free to reach out at{" "}
          <a href="mailto:sam.polyakov@gmail.com" className="font-medium text-neutral-900 underline underline-offset-4 dark:text-white">
            sam.polyakov[at]gmail[dot]com
          </a>
          !
        </p>
        </div>
      </section>

      {/* Work */}
      <section className="mb-12">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-700 dark:text-white">Work</h2>
        <div className="border-y border-dashed border-neutral-300 dark:border-neutral-700">
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
      <section className="mb-12">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-700 dark:text-white">Projects</h2>
        <div className="border-y border-dashed border-neutral-300 dark:border-neutral-700">
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

      {/* Footer */}
      <footer className="flex gap-5 border-t border-dashed border-neutral-300 pt-5 text-sm dark:border-neutral-700">
        <a href="https://github.com/sampolz" target="_blank" rel="noopener noreferrer" className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">GitHub</a>
        <a href="https://linkedin.com/in/sam-polyakov" target="_blank" rel="noopener noreferrer" className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">LinkedIn</a>
        <span className="ml-auto text-neutral-400">© Sam Polyakov</span>
      </footer>
    </main>
  )
}

const work = [
  {
    company: "Apple",
    url: "https://apple.com/",
    logoLight: "/logos/apple-light.png",
    logoDark: "/logos/apple-dark.jpg",
    experiences: [
      {
        role: "Software Engineering Intern",
        year: "2025",
      },
    ],
  },
  {
    company: "Teradyne",
    url: "https://teradyne.com/",
    logo: "/logos/teradyne.jpeg",
    experiences: [
      {
        role: "Software Engineering Intern 2",
        year: "2024",
      },
      {
        role: "Software Engineering Intern 1",
        year: "2023",
      },
    ],
  },
  {
    company: "Colby College",
    url: "https://colby.edu/",
    logo: "/logos/colby.svg",
    experiences: [
      {
        role: "Coding Club President",
        year: "2025-2026",
      },
      {
        role: "Computer Science TA and Tutor",
        year: "2023-2025",
      },
    ],
  },
  {
    company: "Legends of Learning",
    url: "https://legendsoflearning.com/",
    logo: "/logos/legendsoflearning.png",
    experiences: [
      {
        role: "Business Development Intern",
        year: "2020-2022",
      },
    ],
  },
]

const projects = [
  {
    name: "Personal Website",
    description: "Made this site from scratch as an intro to web dev. Some AI + some me!",
    url: "https://github.com/sampolz/portfolio",
  },
  {
    name: "Neural Networks",
    description: "Various NN projects I've worked on over the past year",
    url: "https://github.com/sampolz/Neural-Networks",
  },
]
