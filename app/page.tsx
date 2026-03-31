export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* Nav */}
      <nav className="flex justify-between items-center mb-16">
        <span className="text-sm font-medium">Your Name</span>
        <div className="flex gap-5">
          <a href="https://github.com/sampolz" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/sam-polyakov" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">LinkedIn</a>
          <a href="/resume.pdf" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Resume</a>
        </div>
      </nav>

      {/* Bio */}
      <section className="mb-14">
        <p className="text-sm leading-7 mb-4">
          I'm a <span className="text-neutral-400">[your role / student status]</span> at{" "}
          <a href="#" className="underline underline-offset-4">Your School / Company</a>
          , passionate about <span className="text-neutral-400">[your interests]</span>.
        </p>
        <p className="text-sm leading-7 mb-4">
          <span className="text-neutral-400">
            [A second sentence about what you're working on or looking for. Keep it human — write like you talk.]
          </span>
        </p>
        <p className="text-sm leading-7">
          Feel free to reach out at{" "}
          <a href="mailto:you@email.com" className="underline underline-offset-4">
            you [at] email [dot] com
          </a>
          .
        </p>
      </section>

      {/* Work */}
      <section className="mb-12">
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-5">Work</h2>
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          {work.map((item) => (
            <a
              key={item.company}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 group"
            >
              <div className="w-7 h-7 rounded-md bg-neutral-100 dark:bg-neutral-800 flex-shrink-0 overflow-hidden">
                {item.logo && (
                  <img src={item.logo} alt={item.company} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium group-hover:underline underline-offset-4">{item.company}</p>
                <p className="text-xs text-neutral-500">{item.role}</p>
              </div>
              <span className="text-xs text-neutral-400 flex-shrink-0">{item.year}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-5">Projects</h2>
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          {projects.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 group"
            >
              <p className="text-sm font-medium group-hover:underline underline-offset-4 mb-0.5">
                {item.name} ↗
              </p>
              <p className="text-xs text-neutral-500">{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex gap-4 pt-6 border-t border-neutral-100 dark:border-neutral-800">
        <a href="https://x.com/yourusername" className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Twitter / X</a>
        <a href="https://github.com/yourusername" className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">LinkedIn</a>
        <span className="ml-auto text-xs text-neutral-400">© Your Name</span>
      </footer>
    </main>
  )
}

const work = [
  {
    company: "Company Name",
    role: "Your Role",
    year: "2025",
    url: "#",
    logo: "",
  },
  {
    company: "Company Name",
    role: "Your Role",
    year: "2024",
    url: "#",
    logo: "",
  },
  {
    company: "Company Name",
    role: "Your Role",
    year: "2024",
    url: "#",
    logo: "",
  },
]

const projects = [
  {
    name: "Project Name",
    description: "One sentence about what this does and why it's interesting.",
    url: "#",
  },
  {
    name: "Project Name",
    description: "One sentence about what this does and why it's interesting.",
    url: "#",
  },
  {
    name: "Project Name",
    description: "One sentence about what this does and why it's interesting.",
    url: "#",
  },
]
