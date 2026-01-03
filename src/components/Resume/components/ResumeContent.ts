interface ExperienceProps {
  position: string;
  company: string;
  years: string;
  description: string;
  done: string[];
}

interface EducationProps {
  degree: string;
  institution: string;
  years: string;
  description: string;
}

interface SkillsProps {
  skills: string;
  skillsset: string[];
}

export const Experiencelist: ExperienceProps[] = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    years: "2022 - Present",
    description:
      "Leading frontend development team, architecting scalable React applications, and implementing modern UI/UX designs. Mentoring junior developers and establishing best practices.",
    done: [
      "Improved application performance by 40% through code optimization",
      "Led migration from JavaScript to TypeScript",
      "Implemented comprehensive testing strategy",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    years: "2020 - 2022",
    description:
      "Developed responsive web applications using React, Redux, and modern CSS frameworks. Collaborated with designers and backend developers to deliver high-quality products.",
    done: [
      "Built 15+ production-ready web applications",
      "Reduced load time by 50% through optimization",
      "Implemented accessibility standards (WCAG 2.1)",
    ],
  },
  {
    position: "Junior Frontend Developer",
    company: "StartUp Ventures",
    years: "2018 - 2020",
    description:
      "Contributed to various web projects, learned modern frontend technologies, and participated in agile development processes.",
    done: [
      "Developed reusable component library",
      "Participated in code reviews and pair programming",
      "Learned React, Vue.js, and modern build tools",
    ],
  },
];

export const Educationlist: EducationProps[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    years: "2014 - 2018",
    description:
      "Focused on software engineering, web technologies, and user interface design. Graduated with honors.",
  },
  {
    degree: "Frontend Development Bootcamp",
    institution: "Code Academy",
    years: "2018",
    description:
      "Intensive 12-week program covering modern frontend technologies, best practices, and real-world projects.",
  },
];

export const Skillslist: SkillsProps[] = [
  {
    skills: "Frontend",
    skillsset: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
    ],
  },
  {
    skills: "Styling",
    skillsset: [
      "Tailwind CSS",
      "Sass",
      "Styled Components",
      "CSS Modules"
    ],
  },
  {
    skills: "Tools",
    skillsset: [
      "Git",
      "Webpack",
      "Vite",
      "npm/yarn",
      "VS Code"
    ],
  },
  {
    skills: "Testing",
    skillsset: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Vitest"
    ],
  },
  {
    skills: "Other",
    skillsset: [
      "REST APIs",
      "GraphQL",
      "Responsive Design",
      "Accessibility"
    ],
  },
];
