import { ThemeToggle } from 'app/components/theme-toggle'

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* Nav */}
      <nav className="flex justify-between items-center mb-16">
        <span className="text-2xl font-medium">Sam Polyakov</span>
        <div className="flex items-center gap-5">
          <a href="https://github.com/sampolz" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/sam-polyakov" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">LinkedIn</a>
          <a href="https://drive.google.com/file/d/1dbd2a8eLE3WiQ4Jy2qpTubPY2GPMZKZy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Resume</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Bio */}
      <section className="mb-14">
        <p className="text-sm leading-7 mb-4">
          I'm a senior CS major at{" "}
          <a href="https://colby.edu/" className="underline underline-offset-4">Colby College</a>
          , passionate about architecture, sculpture, and education. At school, I am a TA and Tutor for the CS department, and president of the Coding Club 
          - a program where we go to the local high school and help out in CS classes.
        </p>
        <p className="text-sm leading-7 mb-4">
          I spent this past summer interning at <a href="https://apple.com/" className="underline underline-offset-4">Apple </a>
          as a Software Engineer and recieved a full-time return offer, but am <a className="font-semibold">looking for something new in the NYC or Boston area.</a>
        </p>
        <p className="text-sm leading-7 mb-4">
          Prior to Apple, I spent 2 summers interning at <a href="https://teradyne.com/" className="underline underline-offset-4">Teradyne,</a> also as a Software Engineer. 
          In high school, I spent 3 summers interning in business development at <a href="https://www.legendsoflearning.com/" className="underline underline-offset-4">Legends of Learning,</a> 
          a startup building a platform of educational games for K-8 students.
        </p>
        <p className="text-sm leading-7">
          Feel free to reach out to discuss potential opportunities, or just to chat at{" "}
          <a href="sam.polyakov@gmail.com" className="underline underline-offset-4">
            sam.polyakov [at] gmail [dot] com
          </a>
          !
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
        <a href="https://github.com/sampolz" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/sam-polyakov" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">LinkedIn</a>
        <span className="ml-auto text-xs text-neutral-400">© Sam Polyakov</span>
      </footer>
    </main>
  )
}

const work = [
  {
    company: "Apple",
    role: "Software Engineering Intern",
    year: "2025",
    url: "https://apple.com/",
    logo: "",
  },
  {
    company: "Teradyne",
    role: "Software Engineering Intern 2",
    year: "2024",
    url: "https://teradyne.com/",
    logo: "",
  },
    {
    company: "Teradyne",
    role: "Software Engineering Intern 1",
    year: "2023",
    url: "https://teradyne.com/",
    logo: "",
  },
  {
    company: "Colby College",
    role: "Your Role",
    year: "2024",
    url: "https://colby.edu/",
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
