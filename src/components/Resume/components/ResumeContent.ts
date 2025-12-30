interface ExperienceProps {
  position: string;
  company: string;
  years: string;
  description: string;
  done: string[];
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
