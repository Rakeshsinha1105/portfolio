export const personal = {
  name: "Rakesh Sinha Jangam",
  title: "Software Engineer",
  bio: "Software Engineer at Dheyo AI building full-stack features for AI-powered platforms. B.Tech in EEE from NIT Warangal. Passionate about systems programming, backend performance, and clean scalable code.",
  phone: "+91 9347481626",
  email: "rakeshsinhajangam@gmail.com",
  github: "https://github.com/Rakeshsinha1105",
  linkedin: "https://www.linkedin.com/in/rakeshsj/",
  resume: "https://drive.google.com/file/d/1f8Jj2lHQJlIZXZ78Mr-sAHNrGBqDBYm8/view?usp=sharing",
};

export const skills = [
  { category: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript", "SQL"] },
  { category: "Frontend", items: ["React.js", "Redux", "Next.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "MQTT"] },
  { category: "Databases", items: ["PostgreSQL", "SQL", "Excel"] },
  { category: "Visualization", items: ["Power BI", "Tableau"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "Linux", "VS Code", "Docker", "Jenkins", "GCP"] },
];

export const projects = [
  {
    title: "SkillSwap — Skill Exchange Platform",
    description:
      "Built a full-stack skill-swap marketplace where users trade skills instead of money. Features JWT authentication, skill browsing with filters, swap request management (send/accept/reject), and a star review system post-swap. Built with React + Vite, Node.js, Express, PostgreSQL via Prisma ORM, and deployed on Vercel + Render with Supabase.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Tailwind CSS"],
    github: "https://github.com/Rakeshsinha1105/skillswap",
    live: "https://skillswap-rks.vercel.app",
    featured: true,
  },
  {
    title: "Hostel Management System",
    description:
      "Built a centralized RDBMS to streamline hostel administration at NIT Warangal, managing 500+ student records, room allocations, and maintenance requests. Designed normalized ER schemas, implemented complex SQL queries with indexing strategies reducing retrieval time by 25–35%, and automated key workflows like room allocation and maintenance tracking.",
    tech: ["PostgreSQL", "SQL", "DBMS"],
    github: "https://github.com/Rakeshsinha1105/Hostel-Management-system",
    live: "",
    featured: false,
  },
  {
    title: "EES Website — NIT Warangal",
    description:
      "Designed and developed the official Electrical Engineering Society website serving 1000+ students. Built dynamic pages centralizing event updates, announcements, and academic resources. Developed dedicated modules for internship and placement resources. Focused on responsive design, cross-browser compatibility, and optimized DOM manipulation for smooth UX across all devices.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub", "Linux"],
    github: "",
    live: "https://eesnitwarangal.github.io",
    featured: false,
  },
  {
    title: "AutoGen Pipeline Motion Feature",
    description:
      "Designed and shipped motion feature integration across a 7-stage auto-generation pipeline with real-time synchronization at Dheyo AI. Implemented motion_id propagation through React Redux → REST API → PostgreSQL → concurrent shot generation, handling 1000+ concurrent shots without degradation. Built checkpoint-based recovery with optimistic locking, shot enrichment middleware with zero breaking changes, and reduced metadata lookups by 35% via intelligent caching.",
    tech: ["React.js", "Redux", "TypeScript", "PostgreSQL", "REST APIs", "CRDT"],
    github: "",
    live: "https://eyoh.ai/",
    featured: true,
  },
  {
    title: "High-Performance HTTP Web Server in C++",
    description:
      "Built a production-grade HTTP/1.1 server from scratch handling 25,000+ requests/sec with 10,000+ concurrent connections. Implemented non-blocking I/O multiplexing via epoll, thread pool with producer-consumer pattern, and full HTTP/1.1 parsing with pattern-based routing (exact, params, wildcards). Features graceful shutdown, structured logging, and config management. Zero compilation warnings.",
    tech: ["C++17", "epoll", "TCP/IP", "pthreads", "Linux"],
    github: "https://github.com/Rakeshsinha1105/cpp-http-server",
    live: "",
    featured: true,
  },
];

export const certifications = [
  {
    title: "C++ and DSA",
    issuer: "NIT Warangal",
    link: "https://drive.google.com/file/d/1JtmdfylavrOOq-pAIJea49YJmjmaj-In/view?usp=sharing",
  },
  {
    title: "Redux JS",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1REE6tcYeA0ClyI5CBRQ-RgAy9sX901Li/view?usp=sharing",
  },
  {
    title: "System Design",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1s7Nedq6CFpIywjc-Io0cdVgt-2NgWwtz/view?usp=sharing",
  },
  {
    title: "PostgreSQL",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1xCRxN4sqA01sdGb05OzkSKv4TP5hCpXa/view?usp=sharing",
  },
  {
    title: "Full Stack JavaScript",
    issuer: "Udemy",
    link: "",
  },
  {
    title: "C++ DSA + LeetCode",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1mL6fcMfZQuW0gIyySxzpKe1lByP_X7LJ/view?usp=sharing",
  },
];

export const achievements = [
  {
    title: "600+ DSA Problems Solved",
    description: "Solved 600+ problems across LeetCode, Codeforces, GeeksForGeeks, and other competitive programming platforms.",
    icon: "💻",
  },
  {
    title: "Winner — Tri-NIT Hackathon",
    description: "Won the Tri-NIT Hackathon conducted jointly by NIT Warangal, NIT Trichy, and NITK.",
    icon: "🏅",
  },
  {
    title: "GATE 2025 — AIR 2300",
    description: "Achieved All India Rank 2300 in GATE 2025 (AI & Data Science stream).",
    icon: "🎓",
  },
  {
    title: "CAT 2025 — 98.90 Percentile",
    description: "Scored 98.90 percentile in Common Admission Test (CAT) 2025.",
    icon: "📊",
  },
  {
    title: "JEE Mains 2021 — AIR 1805",
    description: "Secured All India Rank 1805 in JEE Mains 2021, conducted by NTA — a prestigious national entrance exam for admissions into IITs and NITs.",
    icon: "🏆",
  },
  {
    title: "TS EAMCET 2021 — Rank 343",
    description: "Secured Rank 343 in Telangana State Engineering, Agriculture & Medical Common Entrance Test (TS EAMCET) 2021.",
    icon: "🥇",
  },
  {
    title: "NTSE Telangana State Rank 1 — 2018",
    description: "Achieved State Rank 1 in Telangana in the National Talent Search Examination (NTSE) 2018.",
    icon: "⭐",
  },
];

export const leadership = [
  {
    role: "General Secretary",
    organization: "Electrical Engineering Society, NIT Warangal",
    period: "Aug 2024 — May 2025",
    location: "Warangal, Telangana",
    description: [
      "Led a student body of 1,200+ members, driving technical excellence and social impact through digital innovation and strategic partnerships.",
      "Developed and launched a student website serving 1,200+ active users, centralizing resources and community engagement.",
      "Established strategic partnerships with leading MNCs — Yokogawa, Ansys, and MathWorks — to facilitate industry-academia collaboration and technical workshops.",
      "Coordinated knowledge-sharing initiatives with research scholars from Melbourne University, NUS, and Taiwan University, fostering global academic connections.",
      "Organized technical workshops on DSA, SQL, C++, and problem-solving to enhance student competitiveness for placements and competitive programming.",
      "Spearheaded social impact programs including village outreach visits and community awareness campaigns.",
    ],
    skills: ["Leadership", "Project Management", "Community Building", "Strategic Partnerships"],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology — Electrical and Electronics Engineering",
    institution: "National Institute of Technology Warangal",
    period: "Dec 2021 — May 2025",
    grade: "First Division",
    skills: ["C++", "Python", "SQL", "PostgreSQL", "DSA", "Dynamic Programming", "Systems Design"],
  },
  {
    degree: "12th Class (MPC)",
    institution: "Sri Chaitanya Junior College, Bhaskar Bhavan",
    period: "Mar 2018 — Apr 2020",
    grade: "992 / 1000",
    skills: ["Problem Solving"],
  },
  {
    degree: "SSC (10th Standard)",
    institution: "Sri Chaitanya Techno School, SP Nagar",
    period: "Jun 2014 — Apr 2018",
    grade: "10 CGPA",
    skills: ["Problem Solving"],
  },
];

export const experience = [
  {
    role: "Software Engineer (Trainee)",
    company: "Dheyo AI",
    period: "Sep 2025 — Present",
    location: "Hyderabad, Telangana · On-site",
    description: [
      "Developed full-stack features for an AI-powered storyboarding platform enabling creators to generate video content with auto-generated shots and motion sequences.",
      "Shipped production REST APIs and backend services with PostgreSQL optimization improving response time by 40%.",
      "Built React.js UI components with Redux state management for real-time storyboard synchronization across user sessions.",
      "Debugged and optimized C++ WASM workers resolving critical backend timeouts, improving auto-generation pipeline performance by 60%.",
      "Implemented checkpoint recovery mechanisms ensuring zero data loss during concurrent storyboard operations.",
      "Reduced critical bugs by 60% through comprehensive testing and type-safety improvements.",
      "Shipped 12+ features on tight sprints collaborating with product and engineering teams.",
    ],
    skills: ["React.js", "Redux", "Node.js", "PostgreSQL", "C++", "WASM", "REST APIs"],
    certificate: "",
  },
  {
    role: "SDE Intern",
    company: "Outlook Publishing (India) Pvt. Ltd.",
    period: "May 2024 — Aug 2024",
    location: "Hyderabad, Telangana · On-site",
    description: [
      "Worked on backend systems built with Express.js, enabling efficient API handling and seamless integration with PostgreSQL for real-time data operations.",
      "Designed and optimized complex SQL queries in PostgreSQL, reducing query execution time by 30–40% and significantly improving database performance.",
      "Developed data processing and utility modules using C++, integrating them with the backend pipeline to enhance computational efficiency.",
      "Identified and resolved performance bottlenecks across the application stack, contributing to an overall ~30% improvement in data processing efficiency.",
    ],
    skills: ["Express.js", "PostgreSQL", "C++", "SQL", "REST APIs"],
    certificate: "https://drive.google.com/file/d/1K3fDO9gYCZpC-_1KTiBACvVQEmAyDp4P/view?usp=sharing",
  },
  {
    role: "SDE Intern",
    company: "Instrutel Systems Pvt Ltd",
    period: "May 2023 — Aug 2023",
    location: "Hyderabad, Telangana · On-site",
    description: [
      "Engineered and deployed full-stack IoT web applications integrating real-time sensor data with Node.js, Express.js, and React, achieving 98% data transmission accuracy via MQTT.",
      "Designed interactive dashboards using SQL and PostgreSQL to monitor IoT device metrics, reducing system downtime by 25%.",
      "Implemented responsive front-end interfaces with React.js, Bootstrap, HTML, CSS, and JavaScript for real-time data visualization.",
    ],
    skills: ["Node.js", "React.js", "Express.js", "PostgreSQL", "MQTT", "Bootstrap"],
    certificate: "https://drive.google.com/file/d/1YVXkRTCKfjcBJMMqoWzD-cxEJGvHZy6u/view?usp=sharing",
  },
];
