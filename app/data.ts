export type Experience = {
  role: string
  year: string
}

export type WorkItem = {
  company: string
  url: string
  logo?: string
  logoLight?: string
  logoDark?: string
  experiences: Experience[]
}

export type Project = {
  name: string
  description: string
  url: string
}

export const work: WorkItem[] = [
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

export const projects: Project[] = [
  {
    name: "Personal Website",
    description: "Built with Next.js, Tailwind, and TypeScript. Deployed on Vercel.",
    url: "https://github.com/sampolz/portfolio",
  },
  {
    name: "Neural Networks",
    description: "Various NN projects I've worked on over the past year",
    url: "https://github.com/sampolz/Neural-Networks",
  },
]
