import type {
  CertificationItem,
  ProjectFilterCategory,
  ProjectItem,
  SkillCategoryItem,
} from '@/utils/portfolio';

export const PROFILE = {
  name: 'Natnael Sema',
  roleTitle: 'Full Stack Developer & IT Support Specialist',
  headline: 'Building reliable IT systems and modern web applications.',
  availability: 'Available for Remote Projects & Roles',
  location: 'Addis Ababa, Ethiopia',
  email: 'natim0570@gmail.com',
  phone: '0929 130 879',
  phoneHref: 'tel:0929130879',
  cvUrl: '/assets/aistudio/Natnael_Sema_CV_184b4a0f.pdf',
  githubUrl: 'https://github.com/natiman34',
  linkedinUrl: 'https://www.linkedin.com/in/natnaelsema',
  heroIntro:
    'Computer Science graduate combining hands-on IT support, Windows and network troubleshooting, and full-stack web application development to deliver dependable digital solutions.',
  aboutParagraphs: [
    'I am a Computer Science graduate from Addis Ababa University working as an IT Support Technician at SNV while building modern web applications as a Full Stack Developer. Supporting real users across hardware, software, Windows 11 systems, and network connectivity has shaped a disciplined, root-cause approach to every technical challenge.',
    'Alongside IT operations, I design and build responsive web and productivity applications using HTML, CSS, JavaScript, TypeScript, React, and backend fundamentals. My focus is on turning practical needs into clean interfaces, predictable application logic, and workflows that remain dependable for everyday users.',
    'Whether troubleshooting organizational infrastructure or building a web application from specification to deployment, I value clear communication, maintainable code, and continuous learning.',
  ],
};

export const SKILL_CATEGORIES: SkillCategoryItem[] = [
  {
    id: 'development',
    title: 'Full-Stack & Web Development',
    group: 'Development',
    subtitle: 'Responsive interfaces, application logic, and modern web tooling',
    items: [
      'HTML5 & Semantic Markup',
      'CSS3 & Responsive Design',
      'JavaScript (ES6+)',
      'TypeScript & React',
      'Node.js & Backend Fundamentals',
      'API & Database Fundamentals',
      'Git & Version Control',
    ],
  },
  {
    id: 'it-support',
    title: 'IT Support & Operations',
    group: 'IT & Networking',
    subtitle: 'Hands-on diagnostics, systems administration, and user support',
    items: [
      'IT & Help Desk Troubleshooting',
      'Hardware & Peripheral Support',
      'Windows 11 Administration',
      'OS & Software Installation',
      'Computer Maintenance',
      'Printer Troubleshooting',
      'User Support & IT Asset Handling',
    ],
  },
  {
    id: 'networking',
    title: 'Networking & Connectivity',
    group: 'IT & Networking',
    subtitle: 'Diagnosing local networks, protocols, and endpoint connectivity',
    items: [
      'Networking Fundamentals',
      'TCP/IP & LAN Basics',
      'DNS & DHCP Concepts',
      'Wi-Fi & Connectivity Troubleshooting',
      'Network Issue Diagnostics',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    group: 'Security & Tools',
    subtitle: 'Security awareness and foundational safe-computing practices',
    items: [
      'Cybersecurity Fundamentals',
      'Security Awareness',
      'Endpoint & Access Hygiene',
      'Basic Security Practices',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    group: 'Security & Tools',
    subtitle: 'Practical environment, productivity, and workflow tools',
    items: [
      'Git & GitHub',
      'VS Code',
      'Windows 11',
      'Microsoft Office',
      'Android Application Workflow',
      'Internet of Things (IoT) Basics',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'amn-attendance',
    slug: 'amn',
    title: 'AMN — Student Attendance Management Application',
    subtitle: 'Offline-first classroom attendance & student record organization',
    category: 'Management System',
    filterTags: ['IT Tools', 'Productivity'],
    role: 'Application Developer',
    description:
      'A lightweight student attendance application designed to manage attendance and student records for classrooms of up to 120 students with zero backend dependency.',
    summary:
      'AMN simplifies classroom roll calls and attendance reporting into a fast, distraction-free workflow. Built around an Android-ready workflow and offline storage so instructors can record, organize, and review student attendance reliably without an active server.',
    problemSolved:
      'Manual paper attendance sheets for large classrooms (up to 120 students) are slow to record, error-prone to tally, and impractical in environments without constant internet access.',
    solution:
      'Built a structured client-side roster and session attendance workflow that tracks Present/Absent records locally, computes session summaries immediately, and operates without a backend dependency.',
    architecture:
      'Self-contained client-side state model with structured roster lookup, session-level attendance toggling, and local summary aggregation designed for low-overhead mobile and desktop use.',
    lessonsLearned: [
      'Designing fast tap-targets and predictable status toggles for live classroom roll calls.',
      'Structuring offline-first application data cleanly without relying on external server state.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Offline Storage', 'Android Workflow'],
    features: [
      'Student attendance management for classrooms up to 120 students',
      'Structured student record organization and quick roster lookup',
      'Session-by-session attendance tracking (Present / Absent)',
      'Attendance summary and reporting functionality',
      'Offline-capable workflow with no backend dependency',
      'Clean, responsive interface across mobile and desktop screens',
    ],
    highlights: [
      'Zero backend dependency for immediate classroom use',
      'Supports up to 120 students per roster',
    ],
    sourceUrl: 'https://github.com/natiman34',
    liveDemoNote: 'Interactive classroom roster preview available in this view.',
  },
  {
    id: 'plandroid',
    slug: 'plandroid',
    title: 'PlanDroid — Productivity & Focus Application',
    subtitle: 'Daily planning, timed focus sessions, and goal progress tracking',
    category: 'Productivity Application',
    filterTags: ['Productivity', 'Frontend', 'Web Development'],
    role: 'Developer',
    description:
      'A productivity and planning application that brings daily task planning, timed focus sessions, goal management, and daily progress summaries into one workspace.',
    summary:
      'PlanDroid helps users organize daily priorities, stay committed during structured focus blocks, and review daily completion progress without interface clutter.',
    problemSolved:
      'Switching between separate task lists, timers, and goal trackers adds friction and breaks concentration during daily work and study sessions.',
    solution:
      'Combined daily planning, focus session controls, goal completion tracking, and daily progress summaries into a unified, responsive interface.',
    architecture:
      'Component-driven interactive state linking daily task lists, focus session timers, and goal completion counters into a single reactive summary view.',
    lessonsLearned: [
      'Keeping focus interfaces calm and readable so controls support concentration rather than distract from it.',
      'Maintaining clear visual feedback between pending tasks, active focus blocks, and completed goals.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Application Logic'],
    features: [
      'Daily planning and structured task organization',
      'Timed focus sessions to support deep work',
      'Productivity tracking across planned activities',
      'Goal management with clear completion states',
      'Daily progress summaries at a glance',
    ],
    highlights: [
      'Combines daily planning, focus timer, and goal tracking',
      'Responsive across mobile, tablet, and desktop viewports',
    ],
    sourceUrl: 'https://github.com/natiman34',
    liveDemoNote: 'Interactive planning & focus preview available in this view.',
  },
  {
    id: 'final-year-web-app',
    slug: 'final-year',
    title: 'Final Year Full-Stack Web Application',
    subtitle: 'Collaborative Agile full-stack capstone project',
    category: 'Full-Stack Web Application',
    filterTags: ['Full-Stack', 'Web Development', 'Frontend'],
    role: 'Project Manager & Developer',
    description:
      'Led a university development team to plan, build, and deliver a full-stack web application using Agile workflows, React UI implementation, and Node.js backend fundamentals.',
    summary:
      'Developed as a Computer Science capstone project at Addis Ababa University, uniting full-stack web implementation with collaborative sprint planning from specification to deployment.',
    problemSolved:
      'Coordinating multi-person feature development across frontend views and backend endpoints without integration bottlenecks or missed milestones.',
    solution:
      'Established clear component boundaries, Agile task breakdowns, and collaborative Git workflows to connect React UI views with Node.js application logic.',
    architecture:
      'Separated React client components from Node.js backend endpoints with clear request/response contracts and shared team version control.',
    lessonsLearned: [
      'Defining API contracts early prevents frontend and backend integration delays.',
      'Structured Agile check-ins and clear documentation keep collaborative engineering teams aligned.',
    ],
    technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'Git', 'Agile Workflow'],
    features: [
      'End-to-end web application planning and full-stack implementation',
      'Modular React UI components and responsive layouts',
      'Node.js backend logic and structured data flow',
      'Team coordination and Agile sprint organization',
    ],
    highlights: [
      'Addis Ababa University Computer Science capstone',
      'Combined technical leadership with hands-on development',
    ],
    sourceUrl: 'https://github.com/natiman34',
  },
];

export const PROJECT_CATEGORIES: readonly ProjectFilterCategory[] = [
  'All',
  'Web Development',
  'Full-Stack',
  'Frontend',
  'IT Tools',
  'Productivity',
] as const;

export const FUTURE_PROJECT_TYPES = [
  'Websites',
  'Web Applications',
  'Dashboard Interfaces',
  'IT Support & Internal Tools',
  'Productivity Applications',
  'Frontend Projects',
];

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  transferableStrengths: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'snv-it-support',
    role: 'IT Support Technician',
    organization: 'SNV',
    location: 'Addis Ababa, Ethiopia',
    type: 'Full-time',
    period: 'October 2025',
    responsibilities: [
      'Diagnose and resolve technical issues and provide hands-on support to users across hardware, software, Windows 11, peripherals, and general IT-related problems.',
      'Apply structured troubleshooting to identify technical issues, support networking and connectivity, and maintain reliable day-to-day operation of organizational systems.',
    ],
    technologies: ['Windows 11', 'Hardware Diagnostics', 'LAN / Wi-Fi', 'Help Desk', 'Printers & Peripherals'],
    transferableStrengths: [
      'Root-cause debugging',
      'Windows systems support',
      'Networking troubleshooting',
      'Clear user communication',
    ],
  },
  {
    id: 'dablie-content',
    role: 'Social Media Content Creator',
    organization: 'Dablie Foundation',
    location: 'Addis Ababa, Ethiopia',
    type: 'Remote · Internship',
    period: 'May 2025 – August 2025',
    responsibilities: [
      'Created social media content covering technology news, practical tips, and user-friendly guides.',
      'Developed digital content to support clear technical communication and audience engagement.',
    ],
    technologies: ['Digital Content', 'Tech Writing', 'Remote Collaboration'],
    transferableStrengths: [
      'Remote collaboration',
      'Technical documentation',
      'Translating tech concepts for non-technical audiences',
    ],
  },
  {
    id: 'gebeyax-sales',
    role: 'Salesperson',
    organization: 'GebeyaX',
    location: 'Addis Ababa, Ethiopia',
    type: 'Part-time',
    period: 'March 2023 – April 2024',
    responsibilities: [
      'Explained product offerings and application usage clearly to customers, supporting product understanding, adoption, and satisfaction.',
    ],
    technologies: ['Customer Onboarding', 'Application Walkthroughs'],
    transferableStrengths: [
      'User onboarding & empathy',
      'Clear product explanation',
      'Requirement discovery',
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor's Degree in Computer Science",
  institution: 'Addis Ababa University',
  location: 'Addis Ababa, Ethiopia',
  period: 'June 2021 – June 2025',
  focusAreas: [
    'Software Engineering & Web Application Development',
    'Operating Systems & Computer Networking',
    'Database & Cybersecurity Fundamentals',
  ],
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'comptia-a-plus',
    title: 'CompTIA A+ Core 1 (220-1201) Cert Prep',
    issuer: 'LinkedIn Learning',
    date: 'May 2026',
    track: 'IT & Systems',
    skills: ['Hardware', 'Networking', 'Troubleshooting'],
  },
  {
    id: 'computer-components',
    title: 'Computer Components & Peripherals for IT Technicians',
    issuer: 'LinkedIn Learning',
    date: 'May 2026',
    track: 'IT & Systems',
    skills: ['Hardware Maintenance', 'Peripherals'],
  },
  {
    id: 'win11-troubleshooting',
    title: 'Windows 11 for IT Support: Troubleshooting Basics',
    issuer: 'LinkedIn Learning',
    date: 'May 2026',
    track: 'IT & Systems',
    skills: ['Windows 11', 'OS Diagnostics'],
  },
  {
    id: 'it-help-desk-beginners',
    title: 'IT Help Desk for Beginners',
    issuer: 'LinkedIn Learning',
    date: 'April 2026',
    track: 'IT & Systems',
    skills: ['Help Desk', 'User Support'],
  },
  {
    id: 'hybrid-workforce',
    title: 'IT Support for a Hybrid Workforce',
    issuer: 'LinkedIn Learning',
    date: 'April 2026',
    track: 'IT & Systems',
    skills: ['Remote Support', 'Connectivity'],
  },
  {
    id: 'tcm-practical-helpdesk',
    title: 'Practical Help Desk',
    issuer: 'TCM Security',
    date: 'April 2026',
    track: 'IT & Systems',
    skills: ['Windows Support', 'Active Troubleshooting'],
  },
  {
    id: 'cisco-iot',
    title: 'Introduction to Internet of Things',
    issuer: 'Cisco Networking Academy',
    date: 'April 2026',
    track: 'Development & Security',
    skills: ['IoT', 'Connected Systems'],
  },
  {
    id: 'codesignal-frontend',
    title: 'Comprehensive Intro to Front-End Engineering',
    issuer: 'CodeSignal',
    date: 'December 2025',
    track: 'Development & Security',
    skills: ['HTML', 'CSS', 'JavaScript', 'Frontend UI'],
  },
  {
    id: 'alison-it-support',
    title: 'Working as an IT Support Technician',
    issuer: 'Alison',
    date: 'November 2025',
    track: 'IT & Systems',
    skills: ['IT Operations', 'Desktop Support'],
  },
  {
    id: 'qemer-essentials',
    title: 'Frontend, Backend & Cyber Security Essentials',
    issuer: 'Qemer Software Technology PLC',
    date: 'August 2025',
    track: 'Development & Security',
    skills: ['Frontend', 'Backend Fundamentals', 'Cybersecurity'],
  },
];

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;
