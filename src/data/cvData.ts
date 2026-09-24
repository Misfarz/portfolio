export interface ExperienceItem {
  company: string;
  location: string;
  years: string;
  role: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tools: string[];
  summary: string;
  bullets: string[];
  github?: string;
  live?: string;
}

export interface ServiceItem {
  n: string;
  title: string;
  body: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  years: string;
  location: string;
  gpa: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Mohammed Misfar Yusaf C",
  shortName: "misfar",
  title: "Full Stack Software Engineer",
  tagline: "Building scalable web applications, resilient backend architectures, and real-time systems.",
  heroBigWord: "systems",
  bioHeadline: "Misfar builds web applications, RESTful APIs, and cloud-based systems — engineered with clean architecture, high performance, and relentless attention to maintainability.",
  bioSubheadline: "From serverless event pipelines to low-latency real-time video, he turns complex technical problems into elegant, production-ready software.",
  email: "misfaryusaf@gmail.com",
  phone: "+91 8136902028",
  location: "Kottakkal, Kerala, India",
  timezone: "Asia/Kolkata",
  established: "est. kerala, 2024",
  github: "https://github.com/Misfarz",
  linkedin: "https://linkedin.com/in/misfaryusaf",
  website: "https://misfar.dev",
  status: "Available for Full Stack roles & high-impact engineering projects",
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Freelance Developer",
    location: "Kerala, India",
    years: "2026–Present",
    role: "Full Stack Developer",
    bullets: [
      "Developed e-commerce platforms, static websites, and event management systems using modern web technologies.",
      "Built responsive user interfaces and backend functionalities tailored to client requirements.",
      "Provided architectural consultation on database design, secure payment gateways, and cloud deployment.",
    ],
  },
  {
    company: "Brototype",
    location: "Calicut, Kerala",
    years: "2025–2026",
    role: "Trainee – Full Stack",
    bullets: [
      "Designed and developed multiple full-stack applications including an e-commerce platform using the MERN stack, handling both frontend and backend development.",
      "Planned projects from scratch including API documentation, database schema design, system architecture, and UI workflows using Figma.",
      "Built a team-based real-time video streaming application using WebRTC, implementing peer-to-peer communication and real-time media handling.",
      "Developed RESTful APIs with authentication, role-based access control, and optimized database queries for scalable application performance.",
    ],
  },
  {
    company: "Hostup Cloud Technologies",
    location: "Bengaluru, India",
    years: "2024–2024",
    role: "Frontend Developer",
    bullets: [
      "Developed responsive and dynamic user interfaces using React.js, focusing on performance and component reusability.",
      "Built and integrated frontend features with REST APIs, ensuring smooth data flow and user interaction.",
      "Designed intuitive UI/UX workflows and wireframes using Figma, improving overall user experience.",
      "Optimized applications for speed and scalability through efficient state management and code splitting.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "ai-moderation",
    number: "01",
    title: "AI-Based Moderation Pipeline",
    subtitle: "Serverless Event-Driven Image Moderation",
    tools: ["Node.js", "React.js", "AWS Lambda", "AWS SQS", "AWS S3", "CloudWatch", "MongoDB Atlas"],
    summary: "Asynchronous image analysis pipeline with serverless queue execution and webhook-based result delivery.",
    bullets: [
      "Designed and implemented a scalable AI moderation system to analyze user-generated images asynchronously.",
      "Built an API-key based platform allowing external applications to integrate moderation services effortlessly.",
      "Implemented serverless processing using AWS Lambda and SQS for reliable, fault-tolerant background job execution.",
      "Integrated webhook-based result delivery and deployed frontend using Vercel with comprehensive CloudWatch monitoring.",
    ],
    github: "https://github.com/misfaryusaf",
  },
  {
    id: "yox-ecommerce",
    number: "02",
    title: "YOX — E-Commerce Platform",
    subtitle: "Full-Stack Commerce with Razorpay & AWS EC2",
    tools: ["React.js", "TypeScript", "Node.js", "Express.js", "Prisma ORM", "JWT", "Razorpay", "AWS EC2"],
    summary: "Production-grade e-commerce engine featuring granular order lifecycle, refund mechanisms, and clean architecture.",
    bullets: [
      "Developed a full-stack e-commerce platform with product catalog management, secure authentication, and end-to-end order workflows.",
      "Integrated Razorpay payment processing with automated order cancellation, instant refunds, and return management.",
      "Implemented clean architecture with modular backend services, Prisma database models, and optimized RESTful APIs.",
      "Deployed backend services on AWS EC2 with reverse proxy configurations for high production availability.",
    ],
    github: "https://github.com/misfaryusaf",
  },
  {
    id: "us-video-chat",
    number: "03",
    title: "US — Real-time Video Chat",
    subtitle: "Low-Latency WebRTC & WebSocket Streaming",
    tools: ["WebRTC", "Node.js", "Express.js", "Socket.IO", "React.js"],
    summary: "Peer-to-peer real-time video chat application with interest-matched pairing and low-latency media flow.",
    bullets: [
      "Built a real-time video chat and instant messaging application using WebRTC peer-to-peer communication channels.",
      "Implemented personalized user matching and interest-based video search functionality with minimal latency.",
      "Developed signaling and real-time state synchronization layer using WebSockets and Socket.IO.",
      "Designed scalable communication flow for low-latency media transmission and graceful packet loss degradation.",
    ],
    github: "https://github.com/misfaryusaf",
  },
  {
    id: "b2b-procurement",
    number: "04",
    title: "B2B Procurement & Vendor SaaS",
    subtitle: "Multi-Tenant Enterprise Workflow System",
    tools: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redis", "AWS", "Razorpay"],
    summary: "Multi-tenant procurement ecosystem with hierarchical approval matrix, Redis caching, and real-time analytics.",
    bullets: [
      "Developed a multi-tenant procurement platform enabling organizations to manage purchase requests, quotations, POs, and deliveries.",
      "Implemented role-based access control and multi-level approval workflows for employees, managers, procurement teams, and admins.",
      "Built vendor management and quotation comparison modules to streamline supplier selection and purchasing decisions.",
      "Implemented Redis caching, background job processing, audit logging, and transactional workflows to ensure high data consistency.",
      "Developed analytics dashboards for purchase spending, vendor performance, pending approvals, and procurement activity.",
    ],
    github: "https://github.com/misfaryusaf",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    n: "01",
    title: "Full-stack development",
    body: "Modern React and Next.js interfaces paired with robust Node.js and TypeScript backends, built with clean architecture that scales without rewrites.",
  },
  {
    n: "02",
    title: "Cloud & serverless systems",
    body: "Event-driven microservices, AWS Lambda, SQS message queues, and S3 pipelines engineered for reliable asynchronous workloads and zero idle cost.",
  },
  {
    n: "03",
    title: "Real-time & WebRTC communication",
    body: "Low-latency WebSockets, Socket.IO signaling, and WebRTC peer-to-peer media streaming protocols designed for seamless live video and chat.",
  },
  {
    n: "04",
    title: "Database design & SaaS architecture",
    body: "Prisma and Mongoose schemas, MongoDB, PostgreSQL, Redis caching layers, role-based access control, and Razorpay transactional workflows.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (B.C.A.)",
    school: "Kristu Jayanti University",
    years: "2021–2024",
    location: "Bengaluru, India",
    gpa: "GPA: 7.0 / 10",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / Sass"],
  },
  {
    title: "Frontend Engineering",
    skills: ["Next.js (App Router)", "React.js", "React Native", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Real-Time",
    skills: ["Node.js", "Express.js", "RESTful APIs", "WebSockets (Socket.IO)", "WebRTC P2P", "Microservices"],
  },
  {
    title: "Databases & Caching",
    skills: ["MongoDB & Mongoose", "PostgreSQL", "Prisma ORM", "Redis Caching"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Lambda", "AWS SQS", "AWS S3", "AWS EC2", "AWS CloudWatch", "Vercel", "Git / GitHub"],
  },
  {
    title: "AI & Emerging",
    skills: ["Generative AI", "Large Language Models (LLMs)", "AI Image Moderation Pipelines", "Prompt Engineering"],
  },
  {
    title: "Workflow & Tools",
    skills: ["Figma UI/UX", "Postman", "JIRA", "VS Code", "Payment Gateways (Razorpay)"],
  },
];
