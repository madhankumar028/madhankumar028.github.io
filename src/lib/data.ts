export const siteConfig = {
  name: "Madhankumar J",
  title: "Madhankumar J — Lead Frontend Engineer",
  description:
    "Lead Frontend Engineer with 10+ years of experience specialising in React architecture, design systems, and UX-driven web applications.",
  url: "https://madhankumar028.dev",
  email: "madhankumar028@gmail.com",
  github: "https://github.com/madhankumar028",
  linkedin: "https://linkedin.com/in/madddymadhan",
  twitter: "",
};

export const hero = {
  greeting: "Hey, I'm",
  name: "Madhankumar.",
  tagline: "Frontend engineer who cares\nabout craft, systems, and UX.",
  sub: "Lead Frontend Engineer · Freshworks · Chennai, India",
  cta: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};

export const about = {
  bio: [
    "Frontend engineering leader with 10+ years of experience building React-based UIs, design systems, and component libraries. I specialise in translating high-fidelity design mocks into scalable, accessible, and performant interfaces.",
    "I care deeply about the intersection of engineering and UX — the kind of work where clean code and thoughtful design meet. I've spent my career collaborating closely with product and design teams to get that balance right.",
    "Outside of work, I build side projects that scratch my own itch — from AI-powered web apps to developer tooling. If there's a problem worth solving, I'll find a way to build it.",
  ],
  skills: [
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Sass"] },
    { category: "Design Systems", items: ["Design Tokens", "Component Libraries", "Figma", "Accessibility", "ARIA"] },
    { category: "State & Data", items: ["Redux", "GraphQL", "SIP.js", "REST APIs", "npm packages"] },
    { category: "Testing & Tools", items: ["Jest", "React Testing Library", "Puppeteer", "CI/CD", "Git"] },
  ],
};

export const experience = [
  {
    company: "Freshworks",
    role: "Lead Frontend Engineer",
    period: "Mar 2023 — Present",
    location: "Chennai, India",
    description:
      "Leading frontend development on the Analytics product. Led end-to-end reskinning of the Analytics UI — translating Figma mocks into pixel-perfect, accessible React components. Revamped Analytics exports (Email, Download, Schedule) improving reliability and UI consistency. Contributed to the Crayons Design System, adding scalable component variants aligned with design tokens. Conducted frontend audits and shipped performance and DX improvements to production.",
  },
  {
    company: "Lifepal",
    role: "Technical Lead",
    period: "Mar 2020 — Mar 2023",
    location: "Remote",
    description:
      "Built and scaled a reusable React component library with private npm distribution. Defined base design tokens — color, spacing, typography — in close collaboration with designers. Developed a SIP.js-based web calling system for telesales operations. Architected supervisor dashboards with real-time visualisation and monitoring capabilities.",
  },
  {
    company: "Novopay",
    role: "SDE-II",
    period: "Sep 2018 — Nov 2019",
    location: "Bengaluru, India",
    description:
      "Built bill payments and recharge modules from scratch. Revamped the frontend architecture, improving load performance by 63%. Established engineering standards and PR review workflows across the frontend team.",
  },
  {
    company: "Reckonsys",
    role: "Frontend Engineer",
    period: "Aug 2017 — Sep 2018",
    location: "Bengaluru, India",
    description:
      "Built a device-configuration feature for an enterprise admin console. Architected the client-side routing and reusable component hierarchy.",
  },
  {
    company: "OFS",
    role: "Jr. Software Engineer",
    period: "Nov 2015 — Jun 2017",
    location: "India",
    description:
      "Contributed to subscription workflow improvements and handled version upgrades across the frontend stack.",
  },
];

export const projects = [
  {
    name: "yourtools.dev",
    description:
      "A multi-tool developer utility site. Features a PDF editor (annotate, merge, split, form-fill) built with pdf-lib, pdfjs-dist, and fabric.js — with more tools added regularly.",
    tech: ["React", "Next.js", "pdf-lib", "pdfjs-dist", "fabric.js"],
    url: "https://yourtools.dev",
    github: "",
    featured: true,
    status: "Live",
  },
  {
    name: "QA Chrome Extension",
    description:
      "Manifest V3 Chrome extension for QA workflows. Records manual testing sessions and generates Playwright or Cypress test scripts with smart selector priority engine and SPA support.",
    tech: ["Chrome Extension MV3", "Playwright", "Cypress", "MutationObserver", "JavaScript"],
    url: "",
    github: "https://github.com/madhankumar028",
    featured: true,
    status: "In Progress",
  },
];

export const toolsSpotlight = {
  name: "yourtools.dev",
  tagline: "A growing collection of developer & productivity tools.",
  description:
    "Built to scratch my own itch — useful tools that work entirely in the browser, no sign-up required. PDF editing, merging, splitting, and more on the way.",
  url: "https://yourtools.dev",
  tools: [
    { name: "PDF Editor", desc: "Annotate, merge, split, and fill PDF forms in-browser." },
    { name: "More coming soon", desc: "New tools added regularly." },
  ],
};

export const blogPosts = [
  // Add your blog posts here or connect to a CMS / MDX source
  // { title: "", slug: "", date: "", excerpt: "", readTime: "" }
];

export const contact = {
  heading: "Let's work together.",
  sub: "Whether it's a project, a role, or just a conversation — my inbox is open.",
  email: "madhankumar028@gmail.com",
};
