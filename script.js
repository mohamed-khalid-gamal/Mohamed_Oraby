/* =====================================================================
   MOHAMED ORABY 98  -  RETRO WINDOWS 98 DESKTOP OS SCRIPT
   Inspired by Waviboy World
   Full-Stack Developer & Computer Science Student Portfolio
   ===================================================================== */

/* =====================================================================
   ICONS  (Crisp Inline SVG)
   ===================================================================== */
const ICON = {
  flag: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="2" y="3" width="13" height="13" fill="#c0392b"/><rect x="17" y="3" width="13" height="13" fill="#27ae60"/><rect x="2" y="18" width="13" height="13" fill="#2980d6"/><rect x="17" y="18" width="13" height="13" fill="#f1c40f"/></svg>`,
  pc: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="4" y="4" width="24" height="17" fill="#d4cdb6"/><rect x="6" y="6" width="20" height="12" fill="#0a8a8a"/><rect x="9" y="22" width="14" height="4" fill="#c2bca6"/><rect x="6" y="26" width="20" height="3" fill="#a39d88"/><rect x="6" y="6" width="20" height="4" fill="#0fa3a3"/></svg>`,
  folder: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="3" y="6" width="11" height="4" fill="#d4a34b"/><rect x="3" y="9" width="26" height="17" fill="#f1c40f"/><rect x="5" y="11" width="22" height="13" fill="#ffe066"/><rect x="3" y="24" width="26" height="2" fill="#b8860b"/></svg>`,
  projects: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="3" y="6" width="11" height="4" fill="#2980b9"/><rect x="3" y="9" width="26" height="17" fill="#3498db"/><rect x="5" y="11" width="22" height="13" fill="#5dade2"/><polygon points="12,17 18,13 18,21" fill="#fff"/><rect x="19" y="13" width="4" height="8" fill="#fff"/></svg>`,
  experience: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="4" y="10" width="24" height="16" fill="#8e5a2b"/><rect x="4" y="10" width="24" height="4" fill="#a06632"/><rect x="12" y="6" width="8" height="5" fill="#553518"/><rect x="14" y="8" width="4" height="3" fill="#c0c0c0"/><rect x="14" y="14" width="4" height="3" fill="#d4af37"/></svg>`,
  skills: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="6" y="6" width="20" height="20" fill="#2c3e50"/><rect x="9" y="9" width="14" height="14" fill="#27ae60"/><rect x="4" y="10" width="2" height="3" fill="#bdc3c7"/><rect x="4" y="15" width="2" height="3" fill="#bdc3c7"/><rect x="4" y="20" width="2" height="3" fill="#bdc3c7"/><rect x="26" y="10" width="2" height="3" fill="#bdc3c7"/><rect x="26" y="15" width="2" height="3" fill="#bdc3c7"/><rect x="26" y="20" width="2" height="3" fill="#bdc3c7"/><rect x="10" y="4" width="3" height="2" fill="#bdc3c7"/><rect x="15" y="4" width="3" height="2" fill="#bdc3c7"/><rect x="20" y="4" width="3" height="2" fill="#bdc3c7"/><rect x="10" y="26" width="3" height="2" fill="#bdc3c7"/><rect x="15" y="26" width="3" height="2" fill="#bdc3c7"/><rect x="20" y="26" width="3" height="2" fill="#bdc3c7"/></svg>`,
  achievements: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="10" y="4" width="12" height="10" fill="#f1c40f"/><polygon points="8,4 10,4 10,10 8,8" fill="#d4ac0d"/><polygon points="24,4 22,4 22,10 24,8" fill="#d4ac0d"/><rect x="14" y="14" width="4" height="6" fill="#f39c12"/><rect x="10" y="20" width="12" height="4" fill="#7f8c8d"/><rect x="8" y="24" width="16" height="3" fill="#95a5a6"/><polygon points="16,6 18,9 21,9 19,11 20,14 16,12 12,14 13,11 11,9 14,9" fill="#fff"/></svg>`,
  leadership: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><circle cx="16" cy="9" r="5" fill="#e67e22"/><rect x="9" y="16" width="14" height="10" fill="#d35400"/><rect x="4" y="18" width="5" height="8" fill="#bdc3c7"/><circle cx="6.5" cy="13" r="3" fill="#95a5a6"/><rect x="23" y="18" width="5" height="8" fill="#bdc3c7"/><circle cx="25.5" cy="13" r="3" fill="#95a5a6"/><polygon points="16,2 18,5 14,5" fill="#f1c40f"/></svg>`,
  txt: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><path d="M8 3 h12 l5 5 v21 h-17 z" fill="#fff"/><path d="M20 3 v5 h5 z" fill="#b9c3cc"/><rect x="11" y="12" width="11" height="2" fill="#2980b9"/><rect x="11" y="16" width="11" height="2" fill="#888"/><rect x="11" y="20" width="8" height="2" fill="#888"/></svg>`,
  contact: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="4" y="7" width="24" height="18" fill="#fff"/><polygon points="4,7 16,17 28,7" fill="#bdc3c7"/><path d="M4 8 l12 9 l12 -9" stroke="#7f8c8d" stroke-width="1.5" fill="none"/><rect x="4" y="7" width="24" height="2" fill="#c0392b"/><rect x="4" y="23" width="24" height="2" fill="#2980b9"/></svg>`,
  resume: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><path d="M7 3 h13 l6 6 v20 h-19 z" fill="#fff"/><path d="M20 3 v6 h6 z" fill="#e74c3c"/><rect x="10" y="12" width="6" height="5" fill="#34495e"/><rect x="18" y="13" width="5" height="2" fill="#7f8c8d"/><rect x="18" y="16" width="5" height="2" fill="#7f8c8d"/><rect x="10" y="19" width="13" height="2" fill="#7f8c8d"/><rect x="10" y="23" width="13" height="2" fill="#7f8c8d"/></svg>`,
  cmd: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="3" y="5" width="26" height="22" fill="#000"/><rect x="3" y="5" width="26" height="4" fill="#7f8c8d"/><text x="6" y="17" fill="#00ff66" font-family="monospace" font-size="9" font-weight="bold">&gt;_</text></svg>`,
  bin: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="8" y="9" width="16" height="3" fill="#8a8f96"/><rect x="13" y="6" width="6" height="3" fill="#8a8f96"/><path d="M9 12 h14 l-2 16 h-10 z" fill="#aeb4bb"/><rect x="13" y="15" width="2" height="10" fill="#7c828a"/><rect x="17" y="15" width="2" height="10" fill="#7c828a"/></svg>`,
  minesweeper: `<svg viewBox="0 0 32 32" shape-rendering="crispEdges"><rect x="4" y="4" width="24" height="24" fill="#c0c0c0"/><circle cx="16" cy="16" r="9" fill="#f1c40f"/><circle cx="13" cy="14" r="1.5" fill="#000"/><circle cx="19" cy="14" r="1.5" fill="#000"/><path d="M12 18 q4 4 8 0" stroke="#000" stroke-width="1.5" fill="none"/></svg>`,
  speakerOn: `<svg viewBox="0 0 24 24" fill="#000"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8c1.5 1 1.5 7 0 8" stroke="#000" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M18 6c3 2 3 10 0 12" stroke="#000" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`,
  speakerOff: `<svg viewBox="0 0 24 24" fill="#000"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 5M21 9l-5 5" stroke="#c0392b" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  display: `<svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  scanlines: `<svg viewBox="0 0 24 24" stroke="#000" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="#181717"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="#0077b5"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="#c0392b"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="#27ae60"><path d="M6.62,10.79C8.06,13.62 10.38,15.93 13.21,17.38L15.41,15.18C15.69,14.9 16.03,14.8 16.34,14.89C18.23,15.45 20.01,15.02 21.34,13.71C22.37,12.7 22.85,11.33 22.73,10.05C22.53,8.09 21.45,6.39 19.77,5.1C18.77,4.35 17.62,3.84 16.42,3.57L14.22,5.77C14.13,6.08 14.23,6.42 14.51,6.7C17.38,9.57 17.38,14.24 14.51,17.11L12,14.6C12,14.6 15.54,11.05 15.5,11.02C15.15,10.67 14.66,10.53 14.23,10.7C13.51,10.99 12.91,11.57 12.59,12.28L10.71,14.17C9.41,11.47 7.04,9.1 4.34,7.8L6.23,5.92C6.94,5.6 7.52,5 8.01,4.29C9.32,2.61 11.02,1.53 13.07,1.33C14.35,1.21 15.72,1.69 16.73,2.72C18.04,4.05 18.51,5.83 18.07,7.72C17.98,8.03 18.08,8.37 18.36,8.65L20.56,10.85C20.65,10.94 20.75,11.02 20.84,11.1C19.55,11.45 18.37,12.03 17.34,12.81L14.33,9.8C14.6,9.52 14.7,9.17 14.61,8.86C14.33,8.02 13.75,7.29 13,6.79L10.21,9.58C10.71,10.3 11.44,10.88 12.28,11.16C12.56,11.25 12.9,11.15 13.18,10.87L16.19,13.88C15.41,14.91 14.39,15.7 13.15,16.05C13.07,16.07 13,16.08 12.92,16.08C11.95,16.08 10.98,15.67 10.26,14.95L7.25,11.94C6.97,11.66 6.52,11.56 6.24,11.75C5.2,12.43 4.3,13.33 3.59,14.37C2.38,16.06 1.84,18.1 2.1,20.18C2.28,21.61 2.88,22.94 3.82,24C4.86,25.15 6.2,25.76 7.59,25.76C8.69,25.76 9.77,25.42 10.67,24.81C11.76,24.07 12.66,23.07 13.29,21.9C13.57,21.38 13.47,20.74 13.03,20.3L10.79,18.06C10.68,17.95 10.54,17.88 10.4,17.85C9.41,17.65 8.47,17.16 7.69,16.43L10.79,13.33C11.07,13.61 11.43,13.71 11.74,13.62C13.39,13.1 14.9,12.23 16.15,11.07L18.35,13.27C18.63,13.55 19.08,13.66 19.49,13.56C20.83,13.24 22.05,12.5 23,11.41C24.05,10.21 24.64,8.69 24.64,7.14C24.64,5.59 24.05,4.07 23,2.87C21.91,1.68 20.4,0.89 18.77,0.7C17.74,0.59 16.72,0.76 15.77,1.2C14.6,1.74 13.53,2.5 12.61,3.42L10.41,1.22C10.13,0.94 9.78,0.84 9.47,0.93C6.64,1.8 4.33,4.12 2.88,6.95L6.62,10.79Z"/></svg>`,
  ext: `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  code: `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  install: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  netOnline: `<svg viewBox="0 0 24 24" width="14" height="14"><rect x="2" y="4" width="9" height="7" rx="1" fill="#27ae60"/><rect x="13" y="13" width="9" height="7" rx="1" fill="#27ae60"/><line x1="6" y1="11" x2="6" y2="15" stroke="#000" stroke-width="1.5"/><line x1="6" y1="15" x2="17" y2="15" stroke="#000" stroke-width="1.5"/><line x1="17" y1="15" x2="17" y2="13" stroke="#000" stroke-width="1.5"/></svg>`,
  netOffline: `<svg viewBox="0 0 24 24" width="14" height="14"><rect x="2" y="4" width="9" height="7" rx="1" fill="#7f8c8d"/><rect x="13" y="13" width="9" height="7" rx="1" fill="#7f8c8d"/><line x1="2" y1="2" x2="22" y2="22" stroke="#e74c3c" stroke-width="2.2"/></svg>`
};

/* =====================================================================
   DATA DEFINITIONS FOR MOHAMED ORABY
   ===================================================================== */
const PROFILE = {
  name: 'Mohamed Khalid Oraby',
  title: 'Software & AI Engineer',
  sub: 'Ain Shams University (GPA: 3.7/4.0) • 3+ Years Exp • Full-Stack (.NET/PHP/React/Angular) & AI (LLM/Vision/NLP)',
  bio: `Software & AI Engineer with 3+ years of experience delivering scalable full-stack applications and AI-powered products using .NET, Angular, React, PHP, and Python. Contributed to an enterprise SaaS ERP platform serving 1,500+ nonprofit organizations, featuring 900+ pages and 30 integrated management modules. Co-developed JobLens, an A+ AI recruitment platform combining LLMs, RAG, NLP, speech technologies, and computer vision, with models achieving up to 99% mAP50 and 98% precision and recall. Proven problem solver with strong competitive programming and machine learning achievements, plus experience teaching and mentoring 2,000+ learners. Skilled at translating complex requirements into reliable, scalable, and user-focused software solutions.`,
  phone: '+201211099674',
  email: 'mohamed.khalid.gamal@gmail.com',
  linkedin: 'https://linkedin.com/in/mohamed-khalid-gamal',
  github: 'https://github.com/mohamed-khalid-gamal',
  location: 'Cairo, Egypt'
};

const PROJECTS = [
  {
    id: 'rafed-erp',
    title: 'Rafed - Enterprise SaaS for Nonprofit Organizations',
    badge: 'Enterprise SaaS ERP • 1,500+ Nonprofits',
    category: 'enterprise fullstack',
    desc: 'Developed and maintained a large-scale SaaS ERP platform serving more than 1,500 nonprofit organizations across Saudi Arabia, enabling complete digital transformation.',
    tech: ['PHP', 'Full-Stack ERP', 'Relational DB', 'RBAC & Approvals', 'Reporting Engine', 'Modular Architecture'],
    highlights: [
      'Contributed to a comprehensive dashboard containing over 900 pages and 30 integrated management modules',
      'Supported beneficiary services, donors, finance, HR, governance, strategic planning, and admin operations',
      'Implemented configurable approval workflows, role-based permissions, reporting, and centralized data management',
      'Helped deliver a scalable, customizable solution automating non-profit workflows across Saudi Arabia'
    ]
  },
  {
    id: 'abwab-el-kheir',
    title: 'Abwab El-Kheir - Charity & Donation Management Platform',
    badge: 'Charity & Donation Platform • Full-Stack',
    category: 'dotnet fullstack enterprise',
    desc: 'Full-stack platform consisting of a public donation website and a comprehensive administration dashboard built with React.js and .NET.',
    tech: ['React.js', '.NET', 'REST APIs', 'OAuth', 'Payment Gateways', 'CAPTCHA', 'SMTP Notifications', 'SQL Server'],
    highlights: [
      'Built modules for managing campaigns, campaign types, donors, transactions, recurring donations, and fundraising targets',
      'Developed a CMS for managing pages, media, navigation, layouts, branding, sponsors, and website content',
      'Integrated multiple payment gateways with configurable live/test environments and transaction tracking',
      'Implemented analytics, OAuth authentication, CAPTCHA protection, SMTP email notifications, and reusable email templates'
    ]
  },
  {
    id: 'joblens-ai',
    title: 'JobLens – AI-Powered Recruitment Integrity Platform',
    badge: 'A+ Graduation Project • Multimodal AI Platform',
    category: 'ai fullstack',
    desc: 'Co-developed an end-to-end AI recruitment platform that automates candidate screening, semantic job matching, live AI interviewing, and candidate integrity monitoring.',
    tech: ['Angular', 'FastAPI', 'Python', 'LLMs', 'RAG', 'SBERT', 'ChromaDB', 'YOLOv8', 'MediaPipe', 'PostgreSQL', 'Docker'],
    highlights: [
      'Implemented LLM-powered CV parsing and ATS analysis providing scores, strengths, weaknesses, and actionable suggestions',
      'Built semantic job-matching engine using SBERT and ChromaDB, supported by 1,700+ scraped job listings',
      'Developed AI interview pipeline using Mistral LLM, Parakeet STT, and Coqui TTS (95% turn-taking accuracy, 0.0189 WER)',
      'Integrated YOLOv8, MediaPipe, and browser monitoring for proctoring, achieving 99% mAP50 and 98% precision and recall',
      'Generated comprehensive recruiter reports combining assessment, interview, and integrity scores to shortlist candidates'
    ]
  },
  {
    id: 'freelance-job-board',
    title: 'Freelance Platform (Ejada Intern Graduation Project)',
    badge: 'Production-Ready Marketplace • Lead Developer',
    category: 'dotnet enterprise fullstack',
    desc: 'Designed and led development of a production-ready freelance marketplace with full collaboration lifecycle: job postings, proposals, contract change requests with versioning, reviews, and real-time notifications.',
    tech: ['.NET 8', 'ASP.NET Core MVC', 'Web API', 'SignalR', 'EF Core', 'Serilog', 'Cloudinary', 'Bootstrap', 'xUnit/Moq'],
    highlights: [
      'Implemented CQRS + MediatR, Unit of Work, and clean architecture separating API from MVC (Razor) frontend via typed HttpClient',
      'Built middleware-based exception handling & structured logging with Serilog for diagnostics and request tracking',
      'Integrated Cloudinary for file uploads, JWT + Cookie authentication for multi-role access, and SignalR hubs for real-time presence',
      'Delivered production-quality testing using xUnit, Moq, and FluentAssertions'
    ],
    github: 'https://github.com/mohamed-khalid-gamal/HR-System-API',
    swagger: 'http://systemapiapp.runasp.net/swagger/index.html'
  },
  {
    id: 'elzahy-group',
    title: 'Elzahy Group - Corporate Website & Platform',
    badge: 'Enterprise Construction Firm • Full-Stack',
    category: 'dotnet fullstack enterprise',
    desc: "Designed and developed the company's full website for a leading construction firm using Angular and ASP.NET Core, implementing dynamic content management, responsive UI, and backend APIs for project showcasing and client inquiries.",
    tech: ['Angular', 'ASP.NET Core', 'C#', 'RESTful Web API', 'Dynamic CMS', 'Responsive UI', 'SQL Server'],
    highlights: [
      'Architected full-stack enterprise web application for leading construction firm',
      'Built dynamic CMS for portfolio showcases, service catalogs, and client inquiry workflows',
      'Engineered high-performance RESTful APIs with ASP.NET Core',
      'Delivered pixel-perfect responsive user interface using Angular'
    ]
  },
  {
    id: 'airbnb-ml',
    title: 'Airbnb Guest Satisfaction Predictor',
    badge: '2nd Place ASU ML Competition • Team Lead',
    category: 'ai',
    desc: 'Dual prediction ML system processing 50K+ Airbnb listings with advanced NLP sentiment analysis and an interactive dashboard built with Streamlit for real-time predictions.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'NLTK', 'Streamlit', 'Polynomial Reg (R²=0.4841)', 'KMeans', 'SMOTE'],
    highlights: [
      'Secured 2nd Place in ASU Machine Learning Competition as Team Lead',
      'Built dual regression and classification system evaluating 15 machine learning algorithms',
      'Applied advanced feature engineering, KMeans clustering, VADER and TF-IDF text analysis, and SMOTE balancing',
      'Created interactive Streamlit dashboard for real-time guest score predictions'
    ],
    github: 'https://github.com/mohamed-khalid-gamal/ML_Guest_Satisfaction'
  },
  {
    id: 'elmokhtareon',
    title: 'Elmokhtareon Coding Academy',
    badge: 'Freelance Project • Full-Stack',
    category: 'dotnet fullstack',
    desc: 'Full-stack freelance web platform built for a coding academy, featuring responsive student portal, course enrollment, and administrative dashboard.',
    tech: ['ASP.NET MVC', 'Entity Framework Core', 'LINQ', 'Bootstrap', 'JavaScript', 'jQuery', 'SweetAlert', 'Ajax', 'Swagger'],
    highlights: [
      'Developed backend MVC architecture with Entity Framework Core and LINQ',
      'Integrated SweetAlert and Ajax for dynamic async operations without page refreshes',
      'Created RESTful Web API endpoints for frontend data communication with Swagger documentation',
      'Engineered secure role-based access for students, teachers, and admins'
    ],
    github: 'https://github.com/mohamed-khalid-gamal/Innovators'
  },
  {
    id: 'caro-ecommerce',
    title: 'Caro - MVC E-Commerce Platform',
    badge: 'E-Commerce Architecture • Full Backend',
    category: 'dotnet',
    desc: 'Comprehensive e-commerce platform applying ASP.NET MVC architecture and backend concepts with catalog management, secure checkout, and role authorization.',
    tech: ['C#', 'ASP.NET MVC', 'SQL Server', 'MySQL', 'JavaScript', 'CSS', 'Bootstrap', 'LINQ', 'EF Core', 'ASP Identity'],
    highlights: [
      'Implemented secure multi-step payment gateway processing and ASP Identity authentication',
      'Engineered relational database schemas across SQL Server and MySQL with optimized queries',
      'Built product catalog with category filtering, shopping cart, and order tracking',
      'Configured role authorization for merchants and shoppers'
    ],
    github: 'https://github.com/mohamed-khalid-gamal/Caro_ECommerce_Back'
  },
  {
    id: 'voidx-nasa',
    title: 'VoidX NASA Space Project',
    badge: 'NASA API • Space Visualization',
    category: 'dotnet',
    desc: 'Backend service for an astronomical application that visualizes the night sky from exoplanets using NASA’s Exoplanet Archive and astronomical star catalogs.',
    tech: ['ASP.NET Core', 'C#', 'NASA API', 'RESTful API', 'SQL', 'Data Processing'],
    highlights: [
      'Developed high-throughput APIs processing large star catalog datasets',
      'Integrated NASA Exoplanet Archive endpoints for celestial coordinate calculations',
      'Built backend rendering services for custom exoplanet night sky generation',
      'Implemented caching mechanisms to handle high volume astronomical queries'
    ],
    github: 'https://github.com/mohamed-khalid-gamal/VoidX_-Nasa_Project-',
    swagger: 'http://voidx.runasp.net/swagger/index.html'
  },
  {
    id: 'map-routing',
    title: 'Map Routing Application',
    badge: 'Graph Theory & Dijkstra',
    category: 'systems',
    desc: 'Algorithmic route computation engine applying graph theory and super-source Dijkstra algorithm to find the optimal paths combining driving and walking segments.',
    tech: ['C#', 'Graph Theory', 'Dijkstra Algorithm', 'Visual Studio', 'Custom Drawing'],
    highlights: [
      'Implemented super-source Dijkstra graph search algorithm',
      'Solved multi-modal routing problems (walking + driving intersections)',
      'Built visual map canvas with interactive waypoint rendering',
      'Optimized priority queue performance for large node graphs'
    ],
    github: 'https://github.com/mohamed-khalid-gamal/Map'
  },
  {
    id: 'fos-os',
    title: 'FOS Operating System',
    badge: 'OS Kernel & Memory Management',
    category: 'systems',
    desc: 'Operating system implementation built in C focusing on paging, virtual memory management, process control blocks (PCB), and CPU scheduling algorithms.',
    tech: ['C', 'Operating Systems', 'Memory Management', 'CPU Scheduling', 'Assembly'],
    highlights: [
      'Implemented page replacement algorithms and page table mappings',
      'Developed preemptive CPU scheduling algorithms (Round Robin, FCFS)',
      'Designed process control block (PCB) lifecycles and context switching',
      'Created system call interfaces between kernel space and user space'
    ],
    github: 'https://github.com/mohamed-khalid-gamal/FOS-OS'
  }
];

const EXPERIENCES = [
  {
    year: '2025-NOW',
    title: 'Software Engineer',
    org: 'Prismatecs Smart Solutions, Cairo, Egypt',
    period: '11/2025 – Present',
    desc: 'Develop and maintain full-stack web applications, covering both front-end interfaces and PHP-based back-end systems. Design and integrate AI-powered features into web applications to improve functionality and user experience. Build responsive web interfaces and design scalable, efficient database architectures.',
    skills: ['PHP', 'Full-Stack', 'AI Integration', 'Database Design', 'Responsive UI']
  },
  {
    year: '2026-NOW',
    title: 'Coding Instructor',
    org: 'EYOUTH, Online',
    period: '04/2026 – Present',
    desc: 'Teaching coding and programming for teenagers; delivering Web Development and AI for students. Empowering young learners with core computer science principles and hands-on coding exercises.',
    skills: ['Python', 'Web Development', 'AI', 'Teaching', 'Curriculum Design']
  },
  {
    year: '2025-NOW',
    title: 'Freelancing Coach',
    org: 'Career 180, DEPI Program, Cairo, Egypt',
    period: '09/2025 – Present',
    desc: 'Supported students in achieving project milestones across different tech tracks. Mentored two groups of learners, helping them secure freelancing gigs and build strong profiles. Monitored progress, reported outcomes, and delivered practical insights and strategies for freelancing success based on personal experience.',
    skills: ['Freelancing Coaching', 'DEPI Program', 'Mentorship', 'Profile Optimization']
  },
  {
    year: '2025-26',
    title: 'Full Stack .NET & Angular Engineer',
    org: 'Hive Solutions Company, Cairo, Egypt',
    period: '09/2025 – 2026',
    desc: 'Developed full-stack solutions for enterprise clients. Implemented RESTful APIs with ASP.NET Core and responsive UIs with Angular. Collaborated in AGILE teams, improving system performance and delivery speed.',
    skills: ['ASP.NET Core', 'Angular', 'RESTful APIs', 'Enterprise Solutions', 'Agile']
  },
  {
    year: '2025',
    title: '.NET Engineer Intern',
    org: 'Ejada Company, Cairo, Egypt',
    period: '07/2025 – 09/2025',
    desc: 'Worked on Back-End Real Projects With ASP.NET with a strong Team in Ejada Company and mastered Microservices, SignalR, Entity Framework Core, database design, and Agile workflows.',
    skills: ['ASP.NET Core', 'Microservices', 'SignalR', 'Entity Framework', 'Database Design', 'Agile']
  },
  {
    year: '2024-25',
    title: 'DEMI Coding Instructor',
    org: 'iSchool, Cairo, Egypt',
    period: '10/2024 – 07/2025',
    desc: 'Taught Python and introductory machine learning concepts to 25+ sixth-grade students. Utilized Scratch, mBlock, and Pictoblocks to simplify AI principles for beginners.',
    skills: ['Python', 'Machine Learning', 'Scratch', 'mBlock', 'Pictoblocks']
  },
  {
    year: '2022-26',
    title: 'Bachelor of Computer and Information Sciences',
    org: 'Ain Shams University, Cairo, Egypt',
    period: '07/2022 – 05/2026 (GPA: 3.7 / 4.0)',
    desc: 'Key Coursework: Database Design, Operating Systems, Data Structures & Algorithms, Object-Oriented Programming, Machine Learning, Software Engineering, Computer Networks, Linear Algebra, Probability, Computer Vision, Computer Graphics, Deep Learning, NLP.',
    skills: ['Data Structures', 'Algorithms', 'Deep Learning', 'Computer Vision', 'NLP', 'Databases']
  }
];

const ACHIEVEMENTS = [
  {
    title: '1st Place Public / 3rd Private - Neural Network & Sentiment Analysis Competition',
    badge: '1st Place Public • 3rd Private',
    year: '2025',
    desc: 'Developed a robust ensemble model combining DeBERTa V3 Large, BiLSTM, and CNN to handle highly imbalanced ordinal sentiment data. Applied Layer-wise Learning Rate Decay (LLRD) and a custom Combined Ordinal Focal Loss to improve hard-example learning while preserving class ordering.',
    link: 'https://github.com/mohamed-khalid-gamal'
  },
  {
    title: '2nd Place - ASU Machine Learning Competition',
    badge: '2nd Place Winner & Team Lead',
    year: '2025',
    desc: 'Secured 2nd Place by developing a dual regression and classification system for predicting Airbnb guest satisfaction across 50K+ listings. Applied advanced feature engineering, KMeans clustering, VADER and TF-IDF text analysis, SMOTE, and evaluated 15 machine learning algorithms.',
    link: 'https://github.com/mohamed-khalid-gamal/ML_Guest_Satisfaction'
  },
  {
    title: 'ECPC Competitor (Egyptian Collegiate Programming Contest)',
    badge: '13th ASU • 54th / 260+ Teams',
    year: '2024 - 2025',
    desc: 'Achieved the 13th place on Ain Shams University and 54th place over 260 teams from ASU and Cairo University in the prestigious Egyptian Collegiate Programming Contest.',
    link: 'https://codeforces.com'
  },
  {
    title: 'Codeforces Specialist Rating (ACMASCIS Member)',
    badge: 'Competitive Programming Specialist',
    year: '2024 - Present',
    desc: 'Active competitive programmer with Codeforces Specialist rating with verified expertise in algorithms, data structures, dynamic programming (DP), and graph theory.',
    link: 'https://codeforces.com'
  }
];

const LEADERSHIP = [
  {
    title: 'Head of Web Development',
    org: 'Faculty of Computer Science, Ain Shams University',
    period: 'Present',
    desc: 'Leading a core team of 20 members delivering comprehensive web development education to 50+ undergraduate students. Designed complete curriculum: Level 1 (React), Level 2 (ASP.NET Core).'
  },
  {
    title: 'Web Development Workshop Organizer',
    org: 'Faculty of Computer Science, Ain Shams University',
    period: 'Jun 2024 - Feb 2025',
    desc: 'Designed and led advanced workshops on SASS, ES6, jQuery, and Bootstrap for 50+ students. Authored curriculum and published comprehensive video playlist.'
  },
  {
    title: 'Freelancing Coach',
    org: 'Career 180, DEPI Program',
    period: '09/2025 - Present',
    desc: 'Mentored two groups of learners, helping them secure freelancing gigs and build strong professional profiles while delivering practical strategies based on real-world experience.'
  },
  {
    title: 'Coding Instructor & Mentor (2,000+ Learners)',
    org: 'EYOUTH & iSchool',
    period: 'Oct 2024 - Present',
    desc: 'Taught and mentored 2,000+ learners across coding, web development, and AI fundamentals, translating complex software concepts into accessible educational material.'
  },
  {
    title: 'ACM / ASCIS Active Member',
    org: 'Ain Shams University Competitive Programming Community',
    period: 'Oct 2024 - Present',
    desc: 'Regular contestant and mentor in university programming camps, training junior students in problem-solving techniques and algorithmic optimizations.'
  }
];

const SKILL_CATEGORIES = {
  backend: [
    { name: 'C# / .NET 8 / .NET Core', pct: 94 },
    { name: 'ASP.NET Core Web API', pct: 92 },
    { name: 'ASP.NET MVC & EF Core', pct: 90 },
    { name: 'PHP & Backend Systems', pct: 88 },
    { name: 'Python (FastAPI & OOP)', pct: 90 },
    { name: 'Microservices & SignalR', pct: 86 },
    { name: 'RESTful Web APIs & JWT', pct: 92 },
    { name: 'NodeJS & Java (Core)', pct: 80 }
  ],
  frontend: [
    { name: 'Angular / Angular 10+', pct: 90 },
    { name: 'React & NextJS', pct: 90 },
    { name: 'TypeScript & JavaScript (ES6+)', pct: 92 },
    { name: 'HTML5, CSS3 & SASS', pct: 94 },
    { name: 'Bootstrap & Tailwind CSS', pct: 90 },
    { name: 'RxJS, NgRx & Redux', pct: 84 },
    { name: 'jQuery, Ajax, GSAP & ThreeJS', pct: 82 }
  ],
  ai: [
    { name: 'Agentic AI & Spec Development', pct: 90 },
    { name: 'LLMs, RAG & Prompt Engineering', pct: 92 },
    { name: 'Computer Vision (YOLOv8, MediaPipe)', pct: 92 },
    { name: 'NLP (SBERT, DeBERTa, NLTK)', pct: 90 },
    { name: 'Speech Tech (Parakeet STT, Coqui TTS)', pct: 86 },
    { name: 'Deep Learning & Neural Networks', pct: 88 },
    { name: 'Vibe Coding & Rapid Prototyping', pct: 95 }
  ],
  data: [
    { name: 'SQL Server (Optimization & Stored Procs)', pct: 90 },
    { name: 'PostgreSQL & ChromaDB (Vector DB)', pct: 88 },
    { name: 'MySQL & MongoDB', pct: 85 },
    { name: 'Pandas & NumPy', pct: 90 },
    { name: 'Scikit-learn & XGBoost', pct: 88 },
    { name: 'Feature Engineering & Clustering', pct: 88 }
  ],
  tools: [
    { name: 'Git & GitHub', pct: 94 },
    { name: 'Docker', pct: 84 },
    { name: 'Visual Studio 2022 & VS Code', pct: 92 },
    { name: 'PyCharm, Cursor & Postman', pct: 90 },
    { name: 'Swagger & REST API Testing', pct: 90 },
    { name: 'AGILE & Scrum Methodologies', pct: 90 },
    { name: 'Wamp Server & Cpanel', pct: 84 }
  ]
};

/* =====================================================================
   AUDIO ENGINE  (Web Audio API - Fully Synthesized)
   ===================================================================== */
const Audio98 = (() => {
  let ctx = null, master = null, enabled = true;

  function init() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.4;
    master.connect(ctx.destination);
  }

  function resume() {
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }

  function tone(freq, start, dur, type = 'sine', peak = 0.15) {
    if (!enabled) return;
    init(); resume();
    if (!ctx) return;
    const o = ctx.createOscillator(), g = ctx.createGain();
    const t = ctx.currentTime + start;
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(peak, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(master);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  function noise(start, dur, peak = 0.08) {
    if (!enabled) return;
    init(); resume();
    if (!ctx) return;
    const n = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const g = ctx.createGain();
    const t = ctx.currentTime + start;
    g.gain.setValueAtTime(peak, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(g);
    g.connect(master);
    src.start(t);
  }

  return {
    unlock() { init(); resume(); },
    toggleMute() {
      enabled = !enabled;
      if (master) master.gain.value = enabled ? 0.4 : 0;
      return enabled;
    },
    click() { tone(800, 0, 0.03, 'sine', 0.12); },
    open() {
      tone(440, 0, 0.08, 'sine', 0.14);
      tone(780, 0.05, 0.09, 'sine', 0.14);
    },
    close() {
      tone(640, 0, 0.07, 'sine', 0.14);
      tone(360, 0.04, 0.09, 'sine', 0.14);
    },
    error() {
      tone(392, 0, 0.18, 'square', 0.12);
      tone(294, 0.12, 0.28, 'square', 0.12);
    },
    powerOn() {
      tone(120, 0, 0.25, 'sawtooth', 0.16);
      noise(0.02, 0.18, 0.07);
    },
    startup() {
      // Windows 98 inspired ascending polyphonic chime
      const chords = [
        [523.25, 0],     // C5
        [659.25, 0.15],  // E5
        [783.99, 0.30],  // G5
        [1046.5, 0.48],  // C6
        [1318.5, 0.65]   // E6
      ];
      chords.forEach(([f, t]) => {
        tone(f, t, 0.85, 'triangle', 0.2);
        tone(f * 2, t, 0.85, 'sine', 0.06);
      });
    },
    shutdown() {
      const chords = [
        [783.99, 0],
        [587.33, 0.16],
        [392.00, 0.32]
      ];
      chords.forEach(([f, t]) => tone(f, t, 0.75, 'triangle', 0.18));
    }
  };
})();

/* =====================================================================
   DOM REFERENCES
   ===================================================================== */
const $ = s => document.querySelector(s);
const screenEl = $('#screen');
const powerScreen = $('#power-screen');
const biosEl = $('#bios'), biosText = $('#bios-text');
const splashEl = $('#splash');
const desktop = $('#desktop');
const windowsLayer = $('#windows-layer');
const taskEntries = $('#task-entries');
const startBtn = $('#start-btn'), startMenu = $('#start-menu'), startList = $('#start-list');
const muteBtn = $('#mute-btn'), clockEl = $('#clock');
const shutdownEl = $('#shutdown');
const crtToggleBtn = $('#crt-toggle-btn');
const scanlinesEl = $('#scanlines');

let zTop = 220;
const openWindows = {}; // key -> {el, taskEl}
let bootTimers = [];

/* =====================================================================
   BOOT SEQUENCE & POWER
   ===================================================================== */
function clearBootTimers() {
  bootTimers.forEach(clearTimeout);
  bootTimers = [];
}

function powerOn() {
  Audio98.unlock();
  Audio98.powerOn();
  $('#power-led').classList.add('on');
  powerScreen.style.display = 'none';
  screenEl.classList.add('powering');
  setTimeout(() => screenEl.classList.remove('powering'), 750);
  runBios();
}

const BIOS_LINES = [
  'Mohamed Oraby BIOS v9.8.0  (C) 1998-2026 Systems Corp.',
  'Ain Shams University Faculty of Computer Science Edition',
  '',
  'Processor   : Intel Pentium II @ 450 MHz',
  'Memory Test : 65536K OK (Cumulative GPA: 3.7 / 4.0)',
  '',
  'Detecting IDE Devices ...',
  '  Primary Master   : ASP.NET CORE / .NET 8 / PHP / C# [READY]',
  '  Primary Slave    : LLM / RAG / COMPUTER VISION / AI [READY]',
  '  Secondary Master : SQL SERVER / POSTGRESQL / MONGO [READY]',
  '  Secondary Slave  : ANGULAR & REACT TS FRONTEND [READY]',
  '  Audio Controller : SOUND BLASTER 16 [ACTIVE]',
  '',
  'Starting Mohamed Oraby OS 98 ...'
];

function runBios() {
  clearBootTimers();
  biosEl.style.display = 'block';
  biosText.innerHTML = '';
  let i = 0;
  (function step() {
    if (i < BIOS_LINES.length) {
      biosText.innerHTML += BIOS_LINES[i] + '\n';
      Audio98.click();
      i++;
      bootTimers.push(setTimeout(step, 110));
    } else {
      biosText.innerHTML += '<span class="blink"></span>';
      bootTimers.push(setTimeout(runSplash, 450));
    }
  })();
}

function runSplash() {
  biosEl.style.display = 'none';
  splashEl.style.display = 'flex';
  const bar = $('#splash-bar');
  if (bar) {
    bar.style.animation = 'none';
    void bar.offsetWidth;
    bar.style.animation = 'loadProgress 1.5s ease-in-out forwards';
  }
  bootTimers.push(setTimeout(enterDesktop, 1600));
}

function enterDesktop() {
  clearBootTimers();
  splashEl.style.display = 'none';
  biosEl.style.display = 'none';
  powerScreen.style.display = 'none';
  desktop.classList.add('show');
  Audio98.startup();
  if (!openWindows.home) {
    setTimeout(() => openWindow('home'), 200);
  }
}

function skipBoot() {
  if (biosEl.style.display === 'block' || splashEl.style.display === 'flex') {
    enterDesktop();
  }
}

biosEl.addEventListener('click', skipBoot);
splashEl.addEventListener('click', skipBoot);
powerScreen.addEventListener('click', powerOn);
$('#power-btn-hw').addEventListener('click', () => {
  if (powerScreen.style.display !== 'none') {
    powerOn();
  } else {
    doShutdown();
  }
});

/* CRT / Fullscreen toggle */
function toggleFullscreenMode() {
  document.body.classList.toggle('fullscreen-mode');
  Audio98.click();
}
if (crtToggleBtn) crtToggleBtn.addEventListener('click', toggleFullscreenMode);
const hwDeCrt = $('#hw-decrt-btn');
if (hwDeCrt) hwDeCrt.addEventListener('click', toggleFullscreenMode);

/* Scanlines toggle */
const scanlineToggleBtn = $('#scanline-toggle-btn');
if (scanlineToggleBtn) {
  scanlineToggleBtn.addEventListener('click', () => {
    scanlinesEl.classList.toggle('off');
    Audio98.click();
  });
}

/* =====================================================================
   WINDOW DEFINITIONS & TEMPLATES
   ===================================================================== */
const WIN_CONFIG = {
  home: { title: 'Mohamed Oraby - Welcome', icon: ICON.flag, w: 480 },
  projects: { title: 'Featured Projects', icon: ICON.projects, w: 600 },
  experience: { title: 'Professional Experience', icon: ICON.experience, w: 540 },
  skills: { title: 'Technical Skills Properties', icon: ICON.skills, w: 540 },
  achievements: { title: 'Key Achievements & Competitions', icon: ICON.achievements, w: 520 },
  leadership: { title: 'Leadership & Student Activities', icon: ICON.leadership, w: 520 },
  readme: { title: 'About_Mohamed.txt - Notepad', icon: ICON.txt, w: 490 },
  contact: { title: 'Compose Message - Outlook 98', icon: ICON.contact, w: 460 },
  cmd: { title: 'MS-DOS Prompt', icon: ICON.cmd, w: 540 },
  minesweeper: { title: 'Minesweeper', icon: ICON.minesweeper, w: 260 },
  resume: { title: 'Mohamed_Oraby_CV.pdf', icon: ICON.resume, w: 620 },
  pc: { title: 'My Computer', icon: ICON.pc, w: 380 },
  bin: { title: 'Recycle Bin', icon: ICON.bin, w: 320 }
};

function homeBodyHTML() {
  return `
    <div class="win-body silver" style="padding: 10px;">
      <div class="home-hero bevel-in">
        <div class="home-profile-row">
          <div class="home-avatar-frame">
            <img class="home-avatar-img" src="public/mo Oraby (1).png" alt="Mohamed Oraby" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='mo Oraby (1).png';}else if(this.dataset.fallback==='1'){this.dataset.fallback='2';this.src='/mo Oraby (1).png';}" />
          </div>
          <div class="home-hero-text">
            <h2 class="home-hero-title">MOHAMED ORABY</h2>
            <p class="home-hero-subtitle">Software & AI Engineer</p>
            <span class="home-hero-badge">Ain Shams University '26 • GPA 3.7 • 3+ Years Exp • Full-Stack & AI</span>
          </div>
        </div>
      </div>

      <div class="home-menu-grid">
        <button class="menu-tile" data-open="projects">
          <span class="ico">${ICON.projects}</span>
          <div class="mt-txt">
            <b>Featured Projects</b>
            <small>11 enterprise, AI & web apps</small>
          </div>
        </button>

        <button class="menu-tile" data-open="experience">
          <span class="ico">${ICON.experience}</span>
          <div class="mt-txt">
            <b>Experience</b>
            <small>Prismatecs, Hive, DEPI, Ejada</small>
          </div>
        </button>

        <button class="menu-tile" data-open="skills">
          <span class="ico">${ICON.skills}</span>
          <div class="mt-txt">
            <b>Tech Skills</b>
            <small>.NET, Angular, React, PHP, AI</small>
          </div>
        </button>

        <button class="menu-tile" data-open="achievements">
          <span class="ico">${ICON.achievements}</span>
          <div class="mt-txt">
            <b>Achievements</b>
            <small>1st Place Neural Net, ASU ML</small>
          </div>
        </button>

        <button class="menu-tile" data-open="leadership">
          <span class="ico">${ICON.leadership}</span>
          <div class="mt-txt">
            <b>Leadership</b>
            <small>Head of Web Dev, 2000+ Learners</small>
          </div>
        </button>

        <button class="menu-tile" data-open="contact">
          <span class="ico">${ICON.contact}</span>
          <div class="mt-txt">
            <b>Contact Me</b>
            <small>Get in touch / Hire</small>
          </div>
        </button>
      </div>

      <div class="social-strip">
        <div class="lbl">Direct Contacts & Profiles</div>
        <div class="social-row">
          <a class="social-btn" href="${PROFILE.github}" target="_blank" rel="noopener" title="GitHub Profile">
            ${ICON.github}
          </a>
          <a class="social-btn" href="${PROFILE.linkedin}" target="_blank" rel="noopener" title="LinkedIn Profile">
            ${ICON.linkedin}
          </a>
          <a class="social-btn" href="mailto:${PROFILE.email}" title="Email Mohamed">
            ${ICON.mail}
          </a>
          <a class="social-btn" href="tel:${PROFILE.phone}" title="Call Mohamed">
            ${ICON.phone}
          </a>
          <button class="social-btn" data-open="resume" title="View Resume">
            ${ICON.resume}
          </button>
          <button class="social-btn" id="home-install-pwa-btn" title="Install App to Desktop / Home Screen (PWA)">
            ${ICON.install}
          </button>
        </div>
      </div>
    </div>
    <div class="statusbar">
      <span class="cell grow">Mohamed Oraby • Software & AI Engineer</span>
      <span class="cell">Cairo, Egypt</span>
    </div>`;
}

function projectsBodyHTML() {
  const cards = PROJECTS.map(p => `
    <div class="project-card-98" data-category="${p.category}">
      <div class="project-header-row">
        <div>
          <h3 class="project-title">${p.title}</h3>
          <span class="project-badge">${p.badge}</span>
        </div>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tech-tags">
        ${p.tech.map(t => `<span class="tech-tag-98">${t}</span>`).join('')}
      </div>
      <ul class="project-highlights-list">
        ${p.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="project-btn-row">
        ${p.github ? `<a class="btn98" href="${p.github}" target="_blank" rel="noopener">${ICON.code} View on GitHub ${ICON.ext}</a>` : ''}
        ${p.swagger ? `<a class="btn98 btn98-primary" href="${p.swagger}" target="_blank" rel="noopener">${ICON.ext} Live Swagger API</a>` : ''}
      </div>
    </div>`).join('');

  return `
    <div class="win-menubar">
      <span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>H</u>elp</span>
    </div>
    <div class="win-body">
      <div class="projects-filter-bar">
        <button class="filter-btn active" data-filter="all">All Projects (${PROJECTS.length})</button>
        <button class="filter-btn" data-filter="ai">AI & ML</button>
        <button class="filter-btn" data-filter="enterprise">Enterprise & SaaS</button>
        <button class="filter-btn" data-filter="dotnet">.NET & Full-Stack</button>
        <button class="filter-btn" data-filter="systems">Systems & Core</button>
      </div>
      <div id="projects-container">
        ${cards}
      </div>
    </div>
    <div class="statusbar">
      <span class="cell grow">${PROJECTS.length} Projects Loaded • Enterprise, AI & Production</span>
      <span class="cell">Local Disk (C:)</span>
    </div>`;
}

function experienceBodyHTML() {
  const expItems = EXPERIENCES.map(e => `
    <div class="tl-item-98">
      <div class="tl-badge">${e.year}</div>
      <div class="tl-body-98">
        <h4>${e.title}</h4>
        <div class="tl-org"><b>${e.org}</b> • ${e.period}</div>
        <p>${e.desc}</p>
        <div class="project-tech-tags">
          ${e.skills.map(s => `<span class="tech-tag-98">${s}</span>`).join('')}
        </div>
      </div>
    </div>`).join('');

  return `
    <div class="win-menubar">
      <span><u>F</u>ile</span><span><u>V</u>iew</span><span><u>H</u>elp</span>
    </div>
    <div class="win-body">
      <h3 style="margin: 0 0 10px; font-size: 13.5px; color: #000082;">Professional Career & Education</h3>
      <div class="timeline-98">
        ${expItems}
      </div>
    </div>
    <div class="statusbar">
      <span class="cell grow">Experience & Academic Background</span>
      <span class="cell">Verified</span>
    </div>`;
}

function skillsBodyHTML() {
  function renderSkills(list) {
    return list.map(s => `
      <div class="skill-row-98">
        <div class="skill-info">
          <span class="skill-name">${s.name}</span>
          <span class="skill-pct">${s.pct}%</span>
        </div>
        <div class="progress-track-98">
          <div class="progress-fill-98" style="width: ${s.pct}%;"></div>
        </div>
      </div>`).join('');
  }

  return `
    <div class="win-body silver" style="padding: 8px;">
      <div class="tab-bar">
        <button class="tab-btn active" data-tab="tab-backend">Backend</button>
        <button class="tab-btn" data-tab="tab-frontend">Frontend</button>
        <button class="tab-btn" data-tab="tab-ai">AI & ML</button>
        <button class="tab-btn" data-tab="tab-data">Database & Data</button>
        <button class="tab-btn" data-tab="tab-tools">DevOps & Tools</button>
      </div>

      <div class="win-body" style="margin-top: 0; min-height: 250px;">
        <div id="tab-backend" class="tab-content active">
          <p style="margin: 0 0 10px; color: #555; font-size: 11px;">Core backend frameworks, API design, distributed systems, and microservices:</p>
          ${renderSkills(SKILL_CATEGORIES.backend)}
        </div>

        <div id="tab-frontend" class="tab-content">
          <p style="margin: 0 0 10px; color: #555; font-size: 11px;">Modern single-page applications, Angular, React, TypeScript, responsive layouts:</p>
          ${renderSkills(SKILL_CATEGORIES.frontend)}
        </div>

        <div id="tab-ai" class="tab-content">
          <p style="margin: 0 0 10px; color: #555; font-size: 11px;">Agentic AI, LLMs & RAG, Computer Vision (YOLOv8, MediaPipe), Speech tech, Deep Learning:</p>
          ${renderSkills(SKILL_CATEGORIES.ai)}
        </div>

        <div id="tab-data" class="tab-content">
          <p style="margin: 0 0 10px; color: #555; font-size: 11px;">Relational & vector databases, SQL query optimization, data science, feature engineering:</p>
          ${renderSkills(SKILL_CATEGORIES.data)}
        </div>

        <div id="tab-tools" class="tab-content">
          <p style="margin: 0 0 10px; color: #555; font-size: 11px;">Developer tooling, containerization, API testing suites, and Agile collaboration:</p>
          ${renderSkills(SKILL_CATEGORIES.tools)}
        </div>
      </div>
    </div>
    <div class="statusbar">
      <span class="cell grow">System Properties: 35+ Verified Competencies</span>
      <span class="cell">100% Functional</span>
    </div>`;
}

function achievementsBodyHTML() {
  const achCards = ACHIEVEMENTS.map(a => `
    <div class="project-card-98">
      <div class="project-header-row">
        <div>
          <h3 class="project-title">${a.title}</h3>
          <span class="project-badge">${a.badge} • ${a.year}</span>
        </div>
      </div>
      <p class="project-desc">${a.desc}</p>
      <div class="project-btn-row">
        <a class="btn98" href="${a.link}" target="_blank" rel="noopener">${ICON.code} View Details ${ICON.ext}</a>
      </div>
    </div>`).join('');

  return `
    <div class="win-menubar"><span><u>F</u>ile</span><span><u>V</u>iew</span><span><u>H</u>elp</span></div>
    <div class="win-body">
      <h3 style="margin: 0 0 10px; font-size: 13.5px; color: #000082;">Awards, Competitions & Ratings</h3>
      ${achCards}
    </div>
    <div class="statusbar">
      <span class="cell grow">Achievements & Competitions</span>
      <span class="cell">Honors</span>
    </div>`;
}

function leadershipBodyHTML() {
  const leadCards = LEADERSHIP.map(l => `
    <div class="project-card-98">
      <h3 class="project-title">${l.title}</h3>
      <div class="tl-org"><b>${l.org}</b> • ${l.period}</div>
      <p class="project-desc">${l.desc}</p>
    </div>`).join('');

  return `
    <div class="win-menubar"><span><u>F</u>ile</span><span><u>V</u>iew</span><span><u>H</u>elp</span></div>
    <div class="win-body">
      <h3 style="margin: 0 0 10px; font-size: 13.5px; color: #000082;">Student Leadership & Community Workshops</h3>
      ${leadCards}
    </div>
    <div class="statusbar">
      <span class="cell grow">Ain Shams University Leadership</span>
      <span class="cell">Active</span>
    </div>`;
}

function readmeBodyHTML() {
  return `
    <div class="win-menubar"><span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>S</u>earch</span><span><u>H</u>elp</span></div>
    <div class="win-body" style="font-family: var(--mono); font-size: 15px; line-height: 1.4; white-space: pre-wrap; color: #000; padding: 12px;">
MOHAMED KHALID ORABY
===================================================
Software & AI Engineer
Ain Shams University, Faculty of Computer Science
Class of 2026 | Cumulative GPA: 3.7 / 4.0
Cairo, Egypt

PROFESSIONAL SUMMARY
--------------------
Software & AI Engineer with 3+ years of experience delivering
scalable full-stack applications and AI-powered products using
.NET, Angular, React, PHP, and Python. Contributed to an enterprise
SaaS ERP platform serving 1,500+ nonprofit organizations, featuring
900+ pages and 30 integrated management modules. Co-developed JobLens,
an A+ AI recruitment platform combining LLMs, RAG, NLP, speech
technologies, and computer vision (99% mAP50, 98% precision/recall).
Proven problem solver with strong competitive programming and machine
learning achievements, plus experience teaching and mentoring 2,000+
learners. Skilled at translating complex requirements into reliable,
scalable, and user-focused software solutions.

CURRENT ROLES & ACTIVITIES:
- Software Engineer @ Prismatecs Smart Solutions
- Coding Instructor @ EYOUTH (Web Dev & AI for students)
- Freelancing Coach @ Career 180, DEPI Program
- Full Stack .NET & Angular Engineer @ Hive Solutions Company
- Former .NET Engineer Intern @ Ejada Company
- Former DEMI Coding Instructor @ iSchool

KEY ACHIEVEMENTS:
- 1st Place Public / 3rd Private: Neural Network & Sentiment Analysis (DeBERTa + BiLSTM + CNN)
- 2nd Place: ASU Machine Learning Competition (Airbnb satisfaction predictor, Team Lead)
- ECPC Competitor: 13th place ASU, 54th over 260 teams from ASU & Cairo University
- ACMASCIS Member: Codeforces Specialist rating in algorithms and data structures
- Head of Web Development @ Ain Shams University FCIS (Team of 20, 50+ students)

CONTACT:
- Email    : mohamed.khalid.gamal@gmail.com
- Phone    : +201211099674
- LinkedIn : linkedin.com/in/mohamed-khalid-gamal
- GitHub   : github.com/mohamed-khalid-gamal
===================================================
    </div>
    <div class="statusbar">
      <span class="cell grow">About_Mohamed.txt</span>
      <span class="cell">Ln 38, Col 1</span>
    </div>`;
}

function contactBodyHTML() {
  return `
    <div class="win-menubar">
      <span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>I</u>nsert</span><span><u>H</u>elp</span>
    </div>
    <div class="win-body">
      <form class="form98" id="contact-form-98">
        <div class="form-group-98">
          <label>To:</label>
          <input class="input98" type="text" value="mohamed.khalid.gamal@gmail.com" readonly style="background: #e9e9e9;" />
        </div>
        <div class="form-group-98">
          <label>Your Name:</label>
          <input class="input98" type="text" id="sender-name" name="name" placeholder="John Doe" required />
        </div>
        <div class="form-group-98">
          <label>Your Email:</label>
          <input class="input98" type="email" id="sender-email" name="email" placeholder="john@example.com" required />
        </div>
        <div class="form-group-98">
          <label>Subject:</label>
          <input class="input98" type="text" id="sender-subject" name="subject" placeholder="Project collaboration / Opportunity" required />
        </div>
        <div class="form-group-98">
          <label>Message:</label>
          <textarea class="input98" id="sender-msg" name="message" rows="4" placeholder="Hello Mohamed, I would like to discuss..." required></textarea>
        </div>
        <div id="contact-feedback" class="form-feedback">
          Message sent successfully! Opening mail client as backup...
        </div>
        <div style="display: flex; gap: 8px; margin-top: 6px;">
          <button type="submit" class="btn98 btn98-primary">Send Mail</button>
          <button type="reset" class="btn98">Clear</button>
          <a class="btn98" href="tel:${PROFILE.phone}">${ICON.phone} Call: ${PROFILE.phone}</a>
        </div>
      </form>
    </div>
    <div class="statusbar">
      <span class="cell grow">Outlook Express 98 • Ready</span>
      <span class="cell">Online</span>
    </div>`;
}

function cmdBodyHTML() {
  return `
    <div class="terminal-window" id="terminal-screen">
      <div class="terminal-history" id="terminal-history">Microsoft(R) Windows 98
(C)Copyright Microsoft Corp 1981-1998.
Mohamed Oraby Command Prompt [Version 4.10.1998]

Type "help" to view available commands.
</div>
      <div class="terminal-input-row">
        <span class="terminal-prompt">C:\\ORABY&gt;</span>
        <input type="text" class="terminal-input" id="terminal-input" autocomplete="off" spellcheck="false" />
      </div>
    </div>`;
}

function minesweeperBodyHTML() {
  return `
    <div class="win-body silver" style="padding: 6px; display: flex; justify-content: center;">
      <div class="ms-container">
        <div class="ms-header">
          <div class="ms-lcd" id="ms-mines">010</div>
          <button class="ms-face-btn" id="ms-face">🙂</button>
          <div class="ms-lcd" id="ms-timer">000</div>
        </div>
        <div class="ms-grid" id="ms-grid"></div>
      </div>
    </div>
    <div class="statusbar">
      <span class="cell grow">Minesweeper 98</span>
      <span class="cell">Skill: 8x8</span>
    </div>`;
}

function resumeBodyHTML() {
  return `
    <div class="win-menubar"><span><u>F</u>ile</span><span><u>V</u>iew</span><span><u>P</u>rint</span><span><u>H</u>elp</span></div>
    <div class="win-body" style="line-height: 1.45; font-size: 12px; color: #111; max-height: 480px; overflow-y: auto; padding: 14px;">
      <!-- CV Header -->
      <div style="border-bottom: 2px solid #000082; padding-bottom: 10px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
        <div>
          <h1 style="margin: 0; font-size: 22px; color: #000082; letter-spacing: 0.5px;">Mohamed Oraby</h1>
          <div style="font-size: 13px; font-weight: bold; color: #333; margin-top: 2px;">Software & AI Engineer</div>
          <div style="font-size: 11px; color: #555; margin-top: 4px; display: flex; flex-wrap: wrap; gap: 12px;">
            <span>📧 <a href="mailto:${PROFILE.email}">${PROFILE.email}</a></span>
            <span>📱 <a href="tel:${PROFILE.phone}">${PROFILE.phone}</a></span>
            <span>📍 Egypt, Cairo</span>
          </div>
          <div style="font-size: 11px; margin-top: 4px; display: flex; flex-wrap: wrap; gap: 12px;">
            <span>🌐 <a href="#home">Portfolio</a></span>
            <span>💼 <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn Profile</a></span>
            <span>🐙 <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a></span>
          </div>
        </div>
        <div>
          <button class="btn98 btn98-primary" onclick="window.print()" style="font-weight: bold;">${ICON.resume} Print / Save PDF</button>
        </div>
      </div>

      <!-- Summary -->
      <div style="margin-bottom: 14px;">
        <h3 style="margin: 0 0 4px; font-size: 13px; background: #e0e4f0; padding: 3px 6px; color: #000082; border-left: 3px solid #000082;">SUMMARY</h3>
        <p style="margin: 4px 0 0; font-size: 11.5px; line-height: 1.5; color: #222;">
          Software & AI Engineer with 3+ years of experience delivering scalable full-stack applications and AI-powered products using .NET, Angular, React, PHP, and Python. Contributed to an enterprise SaaS ERP platform serving 1,500+ nonprofit organizations, featuring 900+ pages and 30 integrated management modules. Co-developed JobLens, an A+ AI recruitment platform combining LLMs, RAG, NLP, speech technologies, and computer vision, with models achieving up to 99% mAP50 and 98% precision and recall. Proven problem solver with strong competitive programming and machine learning achievements, plus experience teaching and mentoring 2,000+ learners. Skilled at translating complex requirements into reliable, scalable, and user-focused software solutions.
        </p>
      </div>

      <!-- Education -->
      <div style="margin-bottom: 14px;">
        <h3 style="margin: 0 0 6px; font-size: 13px; background: #e0e4f0; padding: 3px 6px; color: #000082; border-left: 3px solid #000082;">EDUCATION</h3>
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <b>Bachelor of Computer and Information Sciences</b>
          <span style="font-size: 11px; color: #555;">07/2022 – 05/2026 | Cairo, Egypt</span>
        </div>
        <div style="font-size: 11.5px; color: #333;">Ain Shams University • <b>GPA: 3.7 / 4.0</b></div>
        <div style="font-size: 11px; color: #444; margin-top: 3px;">
          <b>Key Coursework:</b> Database Design, Operating Systems, Data Structures & Algorithms, Object-Oriented Programming, Machine Learning, Software Engineering, Computer Networks, Linear Algebra, Probability, Computer Vision, Computer Graphics, Deep Learning, NLP.
        </div>
      </div>

      <!-- Relative Experience and Activities -->
      <div style="margin-bottom: 14px;">
        <h3 style="margin: 0 0 6px; font-size: 13px; background: #e0e4f0; padding: 3px 6px; color: #000082; border-left: 3px solid #000082;">RELATIVE EXPERIENCE AND ACTIVITIES</h3>
        
        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <b>Software Engineer</b>
            <span style="font-size: 11px; color: #555;">11/2025 – Present | Cairo, Egypt</span>
          </div>
          <div style="font-size: 11px; color: #000082;">Prismatecs Smart Solutions</div>
          <ul style="margin: 3px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.45;">
            <li>Develop and maintain full-stack web applications, covering both front-end interfaces and PHP-based back-end systems.</li>
            <li>Design and integrate AI-powered features into web applications to improve functionality and user experience.</li>
            <li>Build responsive web interfaces and design scalable, efficient database architectures.</li>
          </ul>
        </div>

        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <b>Coding Instructor</b>
            <span style="font-size: 11px; color: #555;">04/2026 – Present | Online</span>
          </div>
          <div style="font-size: 11px; color: #000082;">EYOUTH</div>
          <ul style="margin: 3px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.45;">
            <li>Teaching coding and programming for teenagers.</li>
            <li>Delivering Web Development and AI for students.</li>
          </ul>
        </div>

        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <b>Freelancing Coach</b>
            <span style="font-size: 11px; color: #555;">09/2025 – Present | Cairo, Egypt</span>
          </div>
          <div style="font-size: 11px; color: #000082;">Career 180, DEPI Program</div>
          <ul style="margin: 3px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.45;">
            <li>Supported students in achieving project milestones across different tech tracks.</li>
            <li>Mentored two groups of learners, helping them secure freelancing gigs and build strong profiles.</li>
            <li>Monitored progress, reported outcomes, and provided feedback to the project team.</li>
            <li>Delivered practical insights and strategies for freelancing success based on personal experience.</li>
          </ul>
        </div>

        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <b>Full Stack .NET & Angular Engineer</b>
            <span style="font-size: 11px; color: #555;">09/2025 – 2026 | Cairo, Egypt</span>
          </div>
          <div style="font-size: 11px; color: #000082;">Hive Solutions Company</div>
          <ul style="margin: 3px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.45;">
            <li>Developed full-stack solutions for enterprise clients.</li>
            <li>Implemented RESTful APIs with ASP.NET Core and responsive UIs with Angular.</li>
            <li>Collaborated in AGILE teams, improving system performance and delivery speed.</li>
          </ul>
        </div>

        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <b>.NET Engineer Intern</b>
            <span style="font-size: 11px; color: #555;">07/2025 – 09/2025 | Cairo, Egypt</span>
          </div>
          <div style="font-size: 11px; color: #000082;">Ejada Company</div>
          <ul style="margin: 3px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.45;">
            <li>Work on Back-End Real Projects With ASP.NET with a strong Team in Ejada Company and learn a lot of things Like: Microservices, SignalR, Entity Framework Core, etc.</li>
            <li>Work With AGILE, GITHUB, DESIGN Databases.</li>
          </ul>
        </div>

        <div style="margin-bottom: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <b>DEMI Coding Instructor</b>
            <span style="font-size: 11px; color: #555;">10/2024 – 07/2025 | Cairo, Egypt</span>
          </div>
          <div style="font-size: 11px; color: #000082;">iSchool</div>
          <ul style="margin: 3px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.45;">
            <li>Taught Python and introductory machine learning concepts to 25+ sixth-grade students.</li>
            <li>Utilized Scratch, mBlock, and Pictoblocks to simplify AI principles for beginners.</li>
          </ul>
        </div>
      </div>

      <!-- Technical Skills -->
      <div style="margin-bottom: 14px;">
        <h3 style="margin: 0 0 6px; font-size: 13px; background: #e0e4f0; padding: 3px 6px; color: #000082; border-left: 3px solid #000082;">TECHNICAL SKILLS</h3>
        <ul style="margin: 0 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.55;">
          <li><b>Backend Development:</b> PHP, C#, Python, Java, ASP.NET Core, ASP.NET MVC, Entity Framework Core, RESTful Web API, JWT Authentication, Microservices, SignalR, NodeJS</li>
          <li><b>Frontend Development:</b> JavaScript (ES6+), React, TypeScript, Angular, HTML5, CSS3, Bootstrap, jQuery, SASS, Ajax, GSAP, ThreeJS, Angular 10+, RxJS, NgRx, NextJS, Redux</li>
          <li><b>AI Skills:</b> Agentic AI, Prompt Engineering, Computer Vision, NLP, Deep Learning, Neural Networks, Vibe Coding, Spec development</li>
          <li><b>Database & Data Science:</b> MongoDB, SQL Server, MySQL, Pandas, NumPy, Scikit-learn, XGBoost, NLTK, Feature Engineering, SQL Optimization, Database Design, Stored Procedures</li>
          <li><b>Tools & DevOps:</b> Git, GitHub, Visual Studio 2022, VS Code, PyCharm, Postman, Swagger, AGILE, PowerPoint, Word, Excel, Wamp Server, Cpanel</li>
        </ul>
      </div>

      <!-- Projects -->
      <div style="margin-bottom: 14px;">
        <h3 style="margin: 0 0 6px; font-size: 13px; background: #e0e4f0; padding: 3px 6px; color: #000082; border-left: 3px solid #000082;">PROJECTS</h3>
        
        <div style="margin-bottom: 10px;">
          <b>Rafed</b> — <i>Enterprise SaaS for Nonprofit Organizations</i>
          <p style="margin: 2px 0; font-size: 11px; color: #444;">Developed and maintained a large-scale SaaS ERP platform serving more than 1,500 nonprofit organizations across Saudi Arabia.</p>
          <ul style="margin: 2px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.4;">
            <li>Contributed to a comprehensive dashboard containing over 900 pages and 30 integrated management modules.</li>
            <li>Supported beneficiary services, donors, finance, HR, governance, strategic planning, administrative workflows, and organizational operations.</li>
            <li>Implemented configurable approval workflows, role-based permissions, reporting, and centralized data management.</li>
            <li>Helped deliver a scalable and customizable solution that enables nonprofit organizations to automate operations and achieve complete digital transformation.</li>
          </ul>
        </div>

        <div style="margin-bottom: 10px;">
          <b>Abwab El-Kheir</b> — <i>Charity & Donation Management Platform</i>
          <ul style="margin: 2px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.4;">
            <li>Developed a full-stack platform consisting of a public donation website and a comprehensive administration dashboard using React.js and .NET.</li>
            <li>Built modules for managing campaigns, campaign types, donors, transactions, recurring donations, and fundraising targets.</li>
            <li>Developed a CMS for managing pages, media, navigation, layouts, branding, sponsors, and website content.</li>
            <li>Integrated multiple payment gateways with configurable live/test environments and transaction tracking.</li>
            <li>Implemented analytics, OAuth authentication, CAPTCHA protection, SMTP email notifications, and reusable email templates.</li>
          </ul>
          <div style="font-size: 10.5px; color: #666; margin-top: 2px;"><b>Tech Stack:</b> React.js, .NET, REST APIs, OAuth, CAPTCHA, Payment Gateways, SMTP.</div>
        </div>

        <div style="margin-bottom: 10px;">
          <b>JobLens – AI-Powered Recruitment Integrity Platform</b> — <i>A+ Graduation Project</i>
          <p style="margin: 2px 0; font-size: 11px; color: #444;">Co-developed an end-to-end AI recruitment platform automating candidate screening, job matching, interviewing, integrity monitoring, and hiring recommendations.</p>
          <ul style="margin: 2px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.4;">
            <li>Implemented LLM-powered CV parsing and ATS analysis, providing scores, strengths, weaknesses, and actionable improvement suggestions.</li>
            <li>Built a semantic job-matching engine using SBERT and ChromaDB, supported by more than 1,700 scraped job listings.</li>
            <li>Developed an AI interview pipeline using Mistral LLM, Parakeet STT, and Coqui TTS, achieving 95% turn-taking accuracy and a 0.0189 word error rate.</li>
            <li>Integrated YOLOv8, MediaPipe, and browser monitoring to detect suspicious behavior, achieving 99% mAP50 and 98% precision and recall.</li>
            <li>Generated comprehensive recruiter reports combining assessment, interview, and integrity scores to rank and shortlist candidates.</li>
          </ul>
          <div style="font-size: 10.5px; color: #666; margin-top: 2px;"><b>Tech Stack:</b> Angular, FastAPI, Python, LLMs, RAG, SBERT, ChromaDB, YOLOv8, MediaPipe, PostgreSQL, Docker.</div>
        </div>

        <div style="margin-bottom: 10px;">
          <b>Freelance Platform</b> — <i>Ejada Intern Graduation Project</i>
          <ul style="margin: 2px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.4;">
            <li>Designed and led development of a production-ready freelance marketplace with full collaboration lifecycle: job postings, proposals, contract change requests with versioning, reviews, and real-time notifications.</li>
            <li>Implemented CQRS + MediatR, Unit of Work, and clean architecture separating API (JWT, REST, SignalR) from MVC (Razor) frontend via typed HttpClient.</li>
            <li>Built middleware-based exception handling & structured logging with Serilog: enabled diagnostics and request/response tracking.</li>
            <li>Integrated Cloudinary for secure file uploads, JWT + Cookie authentication for multi-role access, and SignalR hubs for real-time notifications and user presence.</li>
            <li>Delivered production-quality testing using xUnit, Moq, and FluentAssertions.</li>
          </ul>
          <div style="font-size: 10.5px; color: #666; margin-top: 2px;"><b>Tech Stack:</b> .NET 8, ASP.NET Core MVC, Web API, SignalR, EF Core (SQL Server), Serilog, Cloudinary, Bootstrap, jQuery.</div>
        </div>

        <div style="margin-bottom: 10px;">
          <b>Elzahy Group</b> — <i>Elzahy Group portfolio</i>
          <p style="margin: 2px 0; font-size: 11px; color: #333;">Designed and developed the company's full website for a leading construction firm using Angular and ASP.NET Core, implementing dynamic content management, responsive UI, and backend APIs for project showcasing and client inquiries.</p>
        </div>

        <div style="margin-bottom: 10px;">
          <b>Airbnb Guest Satisfaction Predictor</b> — <i>Team Lead | 2nd Place in ML Competition</i>
          <ul style="margin: 2px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.4;">
            <li>Achievement: 2nd place in Machine Learning Competition.</li>
            <li>Built dual prediction system processing 50K+ Airbnb listings with advanced NLP sentiment analysis.</li>
            <li>Created interactive dashboard with Streamlit for real-time predictions.</li>
          </ul>
          <div style="font-size: 10.5px; color: #666; margin-top: 2px;"><b>Tech Stack:</b> Python, Scikit-learn, XGBoost, NLTK, Streamlit.</div>
        </div>

        <div style="margin-bottom: 10px;">
          <b>Elmokhtareon</b> — <i>Freelance Project For Coding Academy</i>
          <p style="margin: 2px 0; font-size: 11px; color: #333;">Full-stack freelance project for a coding academy with student portal and admin dashboard.</p>
          <div style="font-size: 10.5px; color: #666; margin-top: 2px;"><b>Tools/Technologies:</b> VS Code, Cursor, Bootstrap, HTML, CSS, JavaScript, jQuery, SweetAlert, Ajax, RESTful Web API, EF Core, LINQ, Swagger, Postman.</div>
        </div>

        <div style="margin-bottom: 10px;">
          <b>Caro</b> — <i>MVC Ecommerce Project</i>
          <p style="margin: 2px 0; font-size: 11px; color: #333;">E-Commerce Project applying ASP.NET MVC and Backend concepts with catalog, cart, and authentication.</p>
          <div style="font-size: 10.5px; color: #666; margin-top: 2px;"><b>Tools/Technologies:</b> Visual Studio, SQL Server, MySQL, JavaScript, CSS, Bootstrap, C#, ASP.NET MVC, LINQ, EF Core, ASP Identity.</div>
        </div>
      </div>

      <!-- Leadership & Activities -->
      <div style="margin-bottom: 14px;">
        <h3 style="margin: 0 0 6px; font-size: 13px; background: #e0e4f0; padding: 3px 6px; color: #000082; border-left: 3px solid #000082;">LEADERSHIP & ACTIVITIES</h3>
        
        <div style="margin-bottom: 8px;">
          <b>Neural Network & Sentiment Analysis Competition</b>
          <ul style="margin: 2px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.4;">
            <li>Secured 1st Place on the Public Leaderboard and 3rd Place on the Private Leaderboard.</li>
            <li>Developed a robust ensemble model combining DeBERTa V3 Large, BiLSTM, and CNN to handle highly imbalanced ordinal sentiment data.</li>
            <li>Applied Layer-wise Learning Rate Decay (LLRD) and a custom Combined Ordinal Focal Loss to improve hard-example learning while preserving class ordering.</li>
          </ul>
        </div>

        <div style="margin-bottom: 8px;">
          <b>ECPC Competitor</b>
          <p style="margin: 2px 0; font-size: 11px; color: #333;">Achieved the 13th place on Ain Shams University and the fifty-fourth place over 260 teams from ASU and Cairo University.</p>
        </div>

        <div style="margin-bottom: 8px;">
          <b>ACMASCIS Member</b>
          <p style="margin: 2px 0; font-size: 11px; color: #333;">Codeforces Specialist rating with expertise in algorithms, data structures, DP, graph theory.</p>
        </div>

        <div style="margin-bottom: 8px;">
          <b>Web Development Workshop Organizer</b> — <i>Faculty of Computer Science, Ain Shams University</i>
          <p style="margin: 2px 0; font-size: 11px; color: #333;">Designed and led advanced workshops on SASS, ES6, jQuery, and Bootstrap for 50+ students.</p>
        </div>

        <div style="margin-bottom: 8px;">
          <b>Head of Web Development</b> — <i>Faculty of Computer Science, Ain Shams University</i>
          <p style="margin: 2px 0; font-size: 11px; color: #333;">Leading team of 20 members delivering web development education to 50+ students. Curriculum design: Level 1 (React), Level 2 (ASP.NET).</p>
        </div>

        <div style="margin-bottom: 8px;">
          <b>Ain Shams University Machine Learning Competition</b>
          <ul style="margin: 2px 0 0 18px; padding: 0; font-size: 11px; color: #333; line-height: 1.4;">
            <li>Secured 2nd Place by developing a dual regression and classification system for predicting Airbnb guest satisfaction.</li>
            <li>Applied advanced feature engineering, KMeans clustering, VADER and TF-IDF text analysis, SMOTE, and multiple encoding techniques while evaluating 15 machine learning algorithms.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="statusbar">
      <span class="cell grow">Mohamed_Oraby_CV.pdf (Official 3-Page CV Verified)</span>
      <span class="cell">100%</span>
    </div>`;
}

function pcBodyHTML() {
  return `
    <div class="win-menubar"><span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>H</u>elp</span></div>
    <div class="win-body" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; text-align: center;">
      <div style="cursor: pointer;" data-open="projects">
        <div style="width: 38px; height: 38px; margin: 0 auto;">${ICON.projects}</div>
        <small style="display: block; margin-top: 4px;">Projects (C:)</small>
      </div>
      <div style="cursor: pointer;" data-open="experience">
        <div style="width: 38px; height: 38px; margin: 0 auto;">${ICON.experience}</div>
        <small style="display: block; margin-top: 4px;">Career (D:)</small>
      </div>
      <div style="cursor: pointer;" data-open="skills">
        <div style="width: 38px; height: 38px; margin: 0 auto;">${ICON.skills}</div>
        <small style="display: block; margin-top: 4px;">Stack (E:)</small>
      </div>
      <div style="cursor: pointer;" data-open="achievements">
        <div style="width: 38px; height: 38px; margin: 0 auto;">${ICON.achievements}</div>
        <small style="display: block; margin-top: 4px;">Honors (F:)</small>
      </div>
      <div style="cursor: pointer;" data-open="cmd">
        <div style="width: 38px; height: 38px; margin: 0 auto;">${ICON.cmd}</div>
        <small style="display: block; margin-top: 4px;">MS-DOS</small>
      </div>
      <div style="cursor: pointer;" data-open="contact">
        <div style="width: 38px; height: 38px; margin: 0 auto;">${ICON.contact}</div>
        <small style="display: block; margin-top: 4px;">Mail</small>
      </div>
    </div>
    <div class="statusbar">
      <span class="cell grow">My Computer • 6 Drives</span>
      <span class="cell">3.7 GPA Free Space</span>
    </div>`;
}

function binBodyHTML() {
  return `
    <div class="win-menubar"><span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>H</u>elp</span></div>
    <div class="win-body">
      <div style="margin-bottom: 8px;">
        <button class="btn98" id="empty-bin-btn">Empty Recycle Bin</button>
      </div>
      <div id="bin-items" style="display: flex; flex-direction: column; gap: 6px; font-family: monospace; font-size: 11px;">
        <div>📄 null_pointer_exception_final.bak (0 KB)</div>
        <div>📄 caffeine_deprivation_warning.log (404 KB)</div>
        <div>📄 legacy_code_do_not_touch.js (1,998 KB)</div>
        <div>📄 merge_conflict_head_resolved.diff (12 KB)</div>
      </div>
    </div>
    <div class="statusbar">
      <span class="cell grow">4 Items in Recycle Bin</span>
      <span class="cell">2.4 MB</span>
    </div>`;
}

/* =====================================================================
   WINDOW MANAGER
   ===================================================================== */
function bringToFront(el) {
  el.style.zIndex = ++zTop;
  document.querySelectorAll('.window').forEach(w => w.classList.add('inactive'));
  el.classList.remove('inactive');
  Object.values(openWindows).forEach(o => o.taskEl.classList.remove('active'));
  const key = el.dataset.key;
  if (openWindows[key]) openWindows[key].taskEl.classList.add('active');
}

function makeWindowHTML(key, cfg) {
  const body = key === 'home' ? homeBodyHTML()
    : key === 'projects' ? projectsBodyHTML()
    : key === 'experience' ? experienceBodyHTML()
    : key === 'skills' ? skillsBodyHTML()
    : key === 'achievements' ? achievementsBodyHTML()
    : key === 'leadership' ? leadershipBodyHTML()
    : key === 'readme' ? readmeBodyHTML()
    : key === 'contact' ? contactBodyHTML()
    : key === 'cmd' ? cmdBodyHTML()
    : key === 'minesweeper' ? minesweeperBodyHTML()
    : key === 'resume' ? resumeBodyHTML()
    : key === 'pc' ? pcBodyHTML()
    : key === 'bin' ? binBodyHTML()
    : `<div class="win-body"><p>Window: ${cfg.title}</p></div>`;

  return `
    <div class="titlebar">
      <span class="tb-ico">${cfg.icon}</span>
      <span class="tb-title">${cfg.title}</span>
      <span class="tb-btns">
        <button class="tb-btn min" data-act="min" title="Minimize">_</button>
        <button class="tb-btn max" data-act="max" title="Maximize">□</button>
        <button class="tb-btn close" data-act="close" title="Close">✕</button>
      </span>
    </div>
    ${body}`;
}

function openWindow(key) {
  try { history.replaceState(null, '', key === 'home' ? './' : '#' + key); } catch (e) {}
  if (openWindows[key]) {
    const o = openWindows[key];
    o.el.classList.remove('min');
    bringToFront(o.el);
    Audio98.click();
    return;
  }

  const cfg = WIN_CONFIG[key] || { title: key, icon: ICON.txt, w: 400 };
  const win = document.createElement('div');
  win.className = 'window opening';
  win.dataset.key = key;
  const sr = screenEl.getBoundingClientRect();
  const targetW = Math.min(cfg.w || 400, Math.max(200, sr.width - 12));
  win.style.width = targetW + 'px';
  if (key === 'home') win.id = 'win-home';

  const offset = (Object.keys(openWindows).length % 6) * 20;
  win.innerHTML = makeWindowHTML(key, cfg);
  windowsLayer.appendChild(win);

  const ww = win.offsetWidth, wh = win.offsetHeight;
  let left = (sr.width - ww) / 2 + offset;
  let top = Math.max(8, (sr.height - wh) / 2 - 20) + offset;
  left = Math.max(6, Math.min(left, sr.width - ww - 6));
  top = Math.max(6, Math.min(top, sr.height - wh - 34));
  win.style.left = left + 'px';
  win.style.top = top + 'px';

  // Taskbar item
  const te = document.createElement('button');
  te.className = 'task-entry active';
  te.innerHTML = `<span class="ti">${cfg.icon}</span><span>${cfg.title}</span>`;
  taskEntries.appendChild(te);

  te.addEventListener('click', () => {
    Audio98.click();
    if (win.classList.contains('min')) {
      win.classList.remove('min');
      bringToFront(win);
    } else if (win.classList.contains('inactive')) {
      bringToFront(win);
    } else {
      win.classList.add('min');
      te.classList.remove('active');
    }
  });

  openWindows[key] = { el: win, taskEl: te };

  // Titlebar controls
  win.querySelectorAll('.tb-btn').forEach(b => {
    b.addEventListener('click', e => {
      e.stopPropagation();
      const act = b.dataset.act;
      if (act === 'close') closeWindow(key);
      else if (act === 'min') {
        Audio98.click();
        win.classList.add('min');
        te.classList.remove('active');
      } else if (act === 'max') {
        Audio98.click();
        toggleMax(win, screenEl.getBoundingClientRect());
      }
    });
  });

  // Double click titlebar to maximize
  const titlebar = win.querySelector('.titlebar');
  if (titlebar) {
    titlebar.addEventListener('dblclick', e => {
      if (e.target.closest('.tb-btn')) return;
      toggleMax(win, screenEl.getBoundingClientRect());
    });
  }

  win.addEventListener('mousedown', () => bringToFront(win));
  enableDrag(win);
  wireWindow(key, win);
  bringToFront(win);
  Audio98.open();
  setTimeout(() => win.classList.remove('opening'), 150);
}

function closeWindow(key) {
  const o = openWindows[key];
  if (!o) return;
  Audio98.close();
  o.el.classList.add('closing');
  o.taskEl.remove();
  setTimeout(() => { o.el.remove(); }, 120);
  delete openWindows[key];
}

function toggleMax(win, sr) {
  if (win.dataset.max) {
    win.style.left = win.dataset.ox;
    win.style.top = win.dataset.oy;
    win.style.width = win.dataset.ow;
    win.style.height = '';
    delete win.dataset.max;
  } else {
    win.dataset.ox = win.style.left;
    win.dataset.oy = win.style.top;
    win.dataset.ow = win.style.width;
    win.style.left = '2px';
    win.style.top = '2px';
    win.style.width = (sr.width - 4) + 'px';
    win.style.height = (sr.height - 34) + 'px';
    win.dataset.max = '1';
  }
}

function enableDrag(win) {
  const tb = win.querySelector('.titlebar');
  if (!tb) return;
  let isDragging = false, startX = 0, startY = 0, initL = 0, initT = 0;

  function onDown(e) {
    if (e.target.closest('.tb-btn')) return;
    if (win.dataset.max) return;
    isDragging = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    startX = clientX;
    startY = clientY;
    initL = parseInt(win.style.left, 10) || 0;
    initT = parseInt(win.style.top, 10) || 0;
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  }

  function onMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const dx = clientX - startX, dy = clientY - startY;
    const sr = screenEl.getBoundingClientRect();
    const maxL = sr.width - win.offsetWidth - 2;
    const maxT = sr.height - win.offsetHeight - 32;
    win.style.left = Math.max(2, Math.min(initL + dx, maxL)) + 'px';
    win.style.top = Math.max(2, Math.min(initT + dy, maxT)) + 'px';
  }

  function onUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onUp);
  }

  tb.addEventListener('mousedown', onDown);
  tb.addEventListener('touchstart', onDown, { passive: true });
}

/* =====================================================================
   WIRE WINDOW SPECIFIC INTERACTIONS
   ===================================================================== */
function wireWindow(key, win) {
  // Wire Projects filtering
  if (key === 'projects') {
    win.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Audio98.click();
        win.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        win.querySelectorAll('.project-card-98').forEach(card => {
          const cats = (card.dataset.category || '').split(' ');
          if (filter === 'all' || cats.includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Wire Skills tabs
  if (key === 'skills') {
    win.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Audio98.click();
        win.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        win.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const target = win.querySelector('#' + btn.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
  }

  // Wire Contact form
  if (key === 'contact') {
    const form = win.querySelector('#contact-form-98');
    const feedback = win.querySelector('#contact-feedback');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        Audio98.open();
        const name = form.querySelector('#sender-name').value;
        const email = form.querySelector('#sender-email').value;
        const subject = form.querySelector('#sender-subject').value;
        const msg = form.querySelector('#sender-msg').value;

        feedback.style.display = 'block';
        feedback.textContent = `Thanks ${name}! Preparing email to Mohamed...`;

        setTimeout(() => {
          const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${msg}`)}`;
          window.location.href = mailto;
        }, 600);
      });
    }
  }

  // Wire Recycle Bin
  if (key === 'bin') {
    const emptyBtn = win.querySelector('#empty-bin-btn');
    const items = win.querySelector('#bin-items');
    if (emptyBtn && items) {
      emptyBtn.addEventListener('click', () => {
        Audio98.open();
        items.innerHTML = '<div style="color: #666; font-style: italic;">Recycle Bin is empty.</div>';
        emptyBtn.disabled = true;
      });
    }
  }

  // Wire Terminal (MS-DOS)
  if (key === 'cmd') {
    initTerminal(win);
  }

  // Wire Minesweeper
  if (key === 'minesweeper') {
    initMinesweeper(win);
  }
}

/* =====================================================================
   MINESWEEPER LOGIC
   ===================================================================== */
function initMinesweeper(win) {
  const gridEl = win.querySelector('#ms-grid');
  const faceBtn = win.querySelector('#ms-face');
  const timerEl = win.querySelector('#ms-timer');
  const minesEl = win.querySelector('#ms-mines');
  if (!gridEl) return;

  const ROWS = 8, COLS = 8, MINES = 10;
  let board = [], revealed = 0, flags = 0, timer = 0, interval = null, gameOver = false;

  function reset() {
    clearInterval(interval);
    interval = null;
    timer = 0;
    revealed = 0;
    flags = 0;
    gameOver = false;
    faceBtn.textContent = '🙂';
    timerEl.textContent = '000';
    minesEl.textContent = String(MINES).padStart(3, '0');
    gridEl.innerHTML = '';
    board = [];

    // Initialize board
    for (let r = 0; r < ROWS; r++) {
      board[r] = [];
      for (let c = 0; c < COLS; c++) {
        board[r][c] = { mine: false, count: 0, rev: false, flag: false };
      }
    }

    // Place random mines
    let placed = 0;
    while (placed < MINES) {
      const rr = Math.floor(Math.random() * ROWS);
      const cc = Math.floor(Math.random() * COLS);
      if (!board[rr][cc].mine) {
        board[rr][cc].mine = true;
        placed++;
      }
    }

    // Compute numbers
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (board[r][c].mine) continue;
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc].mine) count++;
          }
        }
        board[r][c].count = count;
      }
    }

    // Render cells
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cell = document.createElement('div');
        cell.className = 'ms-cell';
        cell.dataset.r = r;
        cell.dataset.c = c;
        gridEl.appendChild(cell);

        cell.addEventListener('click', () => clickCell(r, c, cell));
        cell.addEventListener('contextmenu', e => {
          e.preventDefault();
          flagCell(r, c, cell);
        });
      }
    }
  }

  function startTimer() {
    if (interval) return;
    interval = setInterval(() => {
      timer = Math.min(999, timer + 1);
      timerEl.textContent = String(timer).padStart(3, '0');
    }, 1000);
  }

  function clickCell(r, c, el) {
    if (gameOver || board[r][c].flag || board[r][c].rev) return;
    startTimer();
    Audio98.click();

    if (board[r][c].mine) {
      // Hit a mine!
      gameOver = true;
      clearInterval(interval);
      faceBtn.textContent = '😵';
      Audio98.error();
      revealAllMines();
      return;
    }

    reveal(r, c);
    checkWin();
  }

  function reveal(r, c) {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || board[r][c].rev || board[r][c].flag) return;
    board[r][c].rev = true;
    revealed++;
    const idx = r * COLS + c;
    const el = gridEl.children[idx];
    el.classList.add('revealed');

    if (board[r][c].count > 0) {
      el.textContent = board[r][c].count;
      el.classList.add('c-' + board[r][c].count);
    } else {
      // Flood fill empty neighbors
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          reveal(r + dr, c + dc);
        }
      }
    }
  }

  function flagCell(r, c, el) {
    if (gameOver || board[r][c].rev) return;
    Audio98.click();
    board[r][c].flag = !board[r][c].flag;
    flags += board[r][c].flag ? 1 : -1;
    el.textContent = board[r][c].flag ? '🚩' : '';
    minesEl.textContent = String(Math.max(0, MINES - flags)).padStart(3, '0');
  }

  function revealAllMines() {
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (board[r][c].mine) {
          const el = gridEl.children[r * COLS + c];
          el.textContent = '💣';
          el.classList.add('revealed');
          el.style.background = '#e74c3c';
        }
      }
    }
  }

  function checkWin() {
    if (revealed === ROWS * COLS - MINES) {
      gameOver = true;
      clearInterval(interval);
      faceBtn.textContent = '😎';
      Audio98.open();
    }
  }

  faceBtn.addEventListener('click', () => {
    Audio98.click();
    reset();
  });

  reset();
}

/* =====================================================================
   TERMINAL (MS-DOS PROMPT) LOGIC
   ===================================================================== */
function initTerminal(win) {
  const input = win.querySelector('#terminal-input');
  const history = win.querySelector('#terminal-history');
  if (!input || !history) return;

  const COMMANDS = {
    help: `Available commands:
  help       - Display this list of commands
  about      - Display Mohamed Oraby's bio
  skills     - List technical stack & competencies
  projects   - Show major project portfolio
  contact    - View contact numbers and email
  experience - Show internships & education
  achieve    - Show competition awards
  clear      - Clear terminal screen
  matrix     - Toggle green matrix mode
  gui        - Open welcome window
  date       - Show current system date & time
  exit       - Close terminal window`,

    about: `MOHAMED KHALID ORABY
Software & AI Engineer
Ain Shams University, Faculty of Computer Science (Class of 2026, GPA: 3.7 / 4.0)
Software Engineer @ Prismatecs Smart Solutions
Coding Instructor @ EYOUTH & iSchool (2,000+ learners)
Freelancing Coach @ Career 180, DEPI Program
Full Stack .NET & Angular Engineer @ Hive Solutions Company
.NET Engineer Intern @ Ejada Company`,

    skills: `CORE TECHNICAL STACK:
  Backend  : C#, .NET 8, ASP.NET Core, ASP.NET MVC, EF Core, PHP, Python, RESTful Web APIs, JWT, Microservices, SignalR, NodeJS, Java
  Frontend : Angular, React, NextJS, TypeScript, JavaScript (ES6+), HTML5/CSS3/SASS, Bootstrap, RxJS, NgRx, Redux, GSAP, ThreeJS
  AI & ML  : Agentic AI, LLMs, RAG, Prompt Engineering, Computer Vision (YOLOv8, MediaPipe), NLP (SBERT, DeBERTa), Deep Learning
  Database : SQL Server (Optimization, Stored Procs), PostgreSQL, ChromaDB (Vector DB), MySQL, MongoDB, Pandas, NumPy, Scikit-learn
  DevOps   : Git, GitHub, Docker, Visual Studio 2022, VS Code, PyCharm, Postman, Swagger, AGILE, Wamp Server, Cpanel`,

    projects: `PORTFOLIO HIGHLIGHTS:
  1. Rafed (Enterprise SaaS ERP, 1,500+ Nonprofits, 900+ Pages, 30 Modules)
  2. Abwab El-Kheir (Charity & Donation Management Platform, React.js & .NET)
  3. JobLens (A+ AI Recruitment Platform, Mistral LLM, RAG, YOLOv8 99% mAP50)
  4. Freelance Platform (Ejada Intern Graduation Project, .NET 8, CQRS, SignalR)
  5. Elzahy Group (Construction Firm Full Website, Angular & ASP.NET Core)
  6. Airbnb Guest Satisfaction ML (Python, Scikit-learn, XGBoost, Streamlit)
  7. Elmokhtareon (Full-Stack Coding Academy Platform, ASP.NET MVC, EF Core)
  8. Caro (MVC E-Commerce Platform, ASP.NET MVC, EF Core, ASP Identity)
  9. VoidX NASA Project (ASP.NET Core, NASA Exoplanet APIs)
  10. Map Routing Algorithm (C#, Dijkstra Graph Theory)
  11. FOS Operating System (C, Memory Paging & CPU Scheduling)`,

    contact: `GET IN TOUCH:
  Email    : mohamed.khalid.gamal@gmail.com
  Phone    : +201211099674
  LinkedIn : https://linkedin.com/in/mohamed-khalid-gamal
  GitHub   : https://github.com/mohamed-khalid-gamal
  Location : Cairo, Egypt`,

    experience: `PROFESSIONAL EXPERIENCE:
  - Software Engineer @ Prismatecs Smart Solutions (11/2025 - Present)
  - Coding Instructor @ EYOUTH (04/2026 - Present)
  - Freelancing Coach @ Career 180, DEPI Program (09/2025 - Present)
  - Full Stack .NET & Angular Engineer @ Hive Solutions (09/2025 - 2026)
  - .NET Engineer Intern @ Ejada Company (07/2025 - 09/2025)
  - DEMI Coding Instructor @ iSchool (10/2024 - 07/2025)
  - Ain Shams University B.Sc. Computer Science (07/2022 - 05/2026, GPA 3.7)`,

    achieve: `AWARDS & COMPETITIONS:
  - 1st Place Public / 3rd Private: Neural Network & Sentiment Analysis Competition
  - 2nd Place: ASU Machine Learning Competition (Team Lead, Airbnb Satisfaction)
  - ECPC Competitor: 13th ASU, 54th / 260+ teams
  - Codeforces Specialist rating in competitive programming (ACMASCIS)`,

    date: () => new Date().toString()
  };

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      history.innerHTML += `\nC:\\ORABY&gt; ${input.value}\n`;
      Audio98.click();

      if (cmd === 'clear') {
        history.innerHTML = '';
      } else if (cmd === 'exit') {
        closeWindow('cmd');
      } else if (cmd === 'gui') {
        openWindow('home');
      } else if (cmd === 'matrix') {
        history.style.color = history.style.color === 'rgb(0, 255, 0)' ? '#00ff66' : '#00ff00';
        history.innerHTML += 'Matrix mode engaged.\n';
      } else if (COMMANDS[cmd]) {
        const out = typeof COMMANDS[cmd] === 'function' ? COMMANDS[cmd]() : COMMANDS[cmd];
        history.innerHTML += out + '\n';
      } else if (cmd !== '') {
        history.innerHTML += `Bad command or file name: "${cmd}". Type "help" for a list of commands.\n`;
        Audio98.error();
      }

      input.value = '';
      const scroller = win.querySelector('#terminal-screen');
      if (scroller) scroller.scrollTop = scroller.scrollHeight;
    }
  });

  setTimeout(() => input.focus(), 150);
}

/* =====================================================================
   DESKTOP ICONS & START MENU BUILDERS
   ===================================================================== */
function buildDesktopIcons() {
  const di = $('#desk-icons');
  if (!di) return;

  const icons = [
    { key: 'home', label: 'Welcome', icon: ICON.flag },
    { key: 'projects', label: 'Projects', icon: ICON.projects },
    { key: 'experience', label: 'Experience', icon: ICON.experience },
    { key: 'skills', label: 'Skills.exe', icon: ICON.skills },
    { key: 'achievements', label: 'Awards', icon: ICON.achievements },
    { key: 'leadership', label: 'Leadership', icon: ICON.leadership },
    { key: 'readme', label: 'About_Me.txt', icon: ICON.txt },
    { key: 'contact', label: 'Contact', icon: ICON.contact },
    { key: 'resume', label: 'Resume.pdf', icon: ICON.resume },
    { key: 'cmd', label: 'MS-DOS Prompt', icon: ICON.cmd },
    { key: 'minesweeper', label: 'Minesweeper', icon: ICON.minesweeper },
    { key: 'pc', label: 'My Computer', icon: ICON.pc },
    { key: 'bin', label: 'Recycle Bin', icon: ICON.bin }
  ];

  di.innerHTML = icons.map(i => `
    <div class="desk-icon" data-open="${i.key}">
      <span class="ico">${i.icon}</span>
      <span class="lbl">${i.label}</span>
    </div>`).join('');

  let lastOpen = 0;
  di.querySelectorAll('.desk-icon').forEach(el => {
    el.addEventListener('click', () => {
      di.querySelectorAll('.desk-icon').forEach(x => x.classList.remove('sel'));
      el.classList.add('sel');
      const now = performance.now();
      if (now - lastOpen < 260) return;
      lastOpen = now;
      openWindow(el.dataset.open);
    });
  });
}

function buildStartMenu() {
  const items = [
    { key: 'home', label: 'Welcome Launcher', icon: ICON.flag },
    { key: 'projects', label: 'Featured Projects', icon: ICON.projects },
    { key: 'experience', label: 'Professional Experience', icon: ICON.experience },
    { key: 'skills', label: 'Technical Stack', icon: ICON.skills },
    { key: 'achievements', label: 'Key Achievements', icon: ICON.achievements },
    { key: 'leadership', label: 'Leadership & Activities', icon: ICON.leadership },
    { key: 'contact', label: 'Contact / Hire Me', icon: ICON.contact },
    { key: 'resume', label: 'Download Resume (CV)', icon: ICON.resume },
    { sep: true },
    { link: PROFILE.github, label: 'GitHub Profile', icon: ICON.github },
    { link: PROFILE.linkedin, label: 'LinkedIn Profile', icon: ICON.linkedin },
    { link: `mailto:${PROFILE.email}`, label: 'Send Direct Email', icon: ICON.mail },
    { sep: true },
    { key: 'cmd', label: 'MS-DOS Prompt', icon: ICON.cmd },
    { key: 'minesweeper', label: 'Play Minesweeper', icon: ICON.minesweeper },
    { key: 'readme', label: 'About_Mohamed.txt', icon: ICON.txt },
    { install: true, label: 'Install Oraby 98 App...', icon: ICON.install },
    { shutdown: true, label: 'Shut Down...', icon: ICON.pc }
  ];

  startList.innerHTML = items.map(i => {
    if (i.sep) return '<div class="sm-sep"></div>';
    if (i.link) return `<div class="sm-item" data-link="${i.link}"><span class="ico">${i.icon}</span>${i.label}</div>`;
    if (i.install) return `<div class="sm-item" data-install="1"><span class="ico">${i.icon}</span>${i.label}</div>`;
    if (i.shutdown) return `<div class="sm-item" data-shutdown="1"><span class="ico">${i.icon}</span>${i.label}</div>`;
    return `<div class="sm-item" data-open="${i.key}"><span class="ico">${i.icon}</span>${i.label}</div>`;
  }).join('');

  startList.querySelectorAll('.sm-item').forEach(el => {
    el.addEventListener('click', () => {
      closeStartMenu();
      if (el.dataset.open) openWindow(el.dataset.open);
      else if (el.dataset.link) {
        Audio98.click();
        window.open(el.dataset.link, '_blank', 'noopener');
      } else if (el.dataset.install) {
        Audio98.click();
        promptInstallPWA();
      } else if (el.dataset.shutdown) {
        doShutdown();
      }
    });
  });
}

function openStartMenu() {
  startMenu.classList.add('show');
  startBtn.classList.add('active');
  Audio98.click();
}

function closeStartMenu() {
  startMenu.classList.remove('show');
  startBtn.classList.remove('active');
}

startBtn.addEventListener('click', e => {
  e.stopPropagation();
  startMenu.classList.contains('show') ? closeStartMenu() : openStartMenu();
});

document.addEventListener('click', e => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
    closeStartMenu();
  }
});

/* =====================================================================
   GLOBAL DELEGATED CLICKS
   ===================================================================== */
document.addEventListener('click', e => {
  const opener = e.target.closest('[data-open]');
  if (opener) {
    openWindow(opener.dataset.open);
    return;
  }
  const btn = e.target.closest('.btn98, .menu-tile, .social-btn, .tab-btn, .filter-btn');
  if (btn && !e.target.closest('a')) {
    Audio98.click();
  }
});

/* =====================================================================
   SHUTDOWN & REBOOT
   ===================================================================== */
function doShutdown() {
  Audio98.shutdown();
  $('#power-led').classList.remove('on');
  desktop.classList.remove('show');
  shutdownEl.style.display = 'flex';
}

shutdownEl.addEventListener('click', () => {
  shutdownEl.style.display = 'none';
  powerScreen.style.display = 'flex';
  Audio98.click();
});

/* =====================================================================
   CLOCK & TRAY
   ===================================================================== */
function updateClock() {
  const d = new Date();
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  if (clockEl) clockEl.textContent = `${h}:${m} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

muteBtn.innerHTML = ICON.speakerOn;
muteBtn.addEventListener('click', () => {
  const on = Audio98.toggleMute();
  muteBtn.innerHTML = on ? ICON.speakerOn : ICON.speakerOff;
  muteBtn.title = on ? 'Sound: On' : 'Sound: Off';
});

/* =====================================================================
   PWA & OFFLINE ENGINE
   ===================================================================== */
let deferredPrompt = null;
const pwaInstallBtn = $('#pwa-install-btn');
const netStatusEl = $('#net-status');
const trayBalloon = $('#tray-balloon');
const balloonBody = $('#balloon-body');
const balloonClose = $('#balloon-close');
let balloonTimer = null;

function showBalloonTip(title, text, duration = 6000) {
  if (!trayBalloon || !balloonBody) return;
  const titleEl = trayBalloon.querySelector('.balloon-title');
  if (titleEl) titleEl.textContent = title;
  balloonBody.textContent = text;
  trayBalloon.style.display = 'block';
  Audio98.open();

  if (balloonTimer) clearTimeout(balloonTimer);
  if (duration > 0) {
    balloonTimer = setTimeout(() => {
      trayBalloon.style.display = 'none';
    }, duration);
  }
}

if (balloonClose) {
  balloonClose.addEventListener('click', () => {
    if (trayBalloon) trayBalloon.style.display = 'none';
    if (balloonTimer) clearTimeout(balloonTimer);
  });
}

function updateNetworkStatus() {
  const isOnline = navigator.onLine;
  if (netStatusEl) {
    netStatusEl.innerHTML = isOnline ? ICON.netOnline : ICON.netOffline;
    netStatusEl.title = isOnline ? 'Network: Online' : 'Network: Offline (Running in Local Mode)';
    netStatusEl.classList.toggle('offline', !isOnline);
  }
}

window.addEventListener('online', () => {
  updateNetworkStatus();
  showBalloonTip('Network Connection', 'Connection restored! Live external links and APIs available.', 5000);
});

window.addEventListener('offline', () => {
  updateNetworkStatus();
  showBalloonTip('Offline Mode Active', 'Operating System running offline. All cached portfolio apps and projects are fully accessible.', 6000);
});

function promptInstallPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        showBalloonTip('Installation', 'Mohamed Oraby 98 is installing on your device!', 4000);
      }
      deferredPrompt = null;
      if (pwaInstallBtn) pwaInstallBtn.classList.remove('ready');
    });
  } else {
    showBalloonTip('App Installation', 'To install this portfolio as a standalone app, use your browser menu ("Install App" or "Add to Home Screen").', 6000);
  }
}

function initPWA() {
  updateNetworkStatus();

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('[PWA] Service Worker registered in scope:', reg.scope);
        })
        .catch(err => {
          console.warn('[PWA] Service Worker registration failed:', err);
        });
    });
  }

  // Handle BeforeInstallPrompt
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    if (pwaInstallBtn) {
      pwaInstallBtn.classList.add('ready');
    }
    setTimeout(() => {
      if (desktop && desktop.classList.contains('show')) {
        showBalloonTip('Install Oraby 98', 'Click "Install" in the taskbar tray to add this OS directly to your home screen or desktop.', 7000);
      }
    }, 3500);
  });

  if (pwaInstallBtn) {
    pwaInstallBtn.addEventListener('click', () => {
      Audio98.click();
      promptInstallPWA();
    });
  }

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    if (pwaInstallBtn) pwaInstallBtn.classList.remove('ready');
    showBalloonTip('Installation Complete', 'Mohamed Oraby 98 has been installed successfully. You can launch it anytime offline!', 6000);
  });

  // Delegated click for in-window install buttons
  document.addEventListener('click', e => {
    if (e.target.closest('#home-install-pwa-btn')) {
      Audio98.click();
      promptInstallPWA();
    }
  });
}

/* =====================================================================
   INITIALIZATION
   ===================================================================== */
buildDesktopIcons();
buildStartMenu();
initPWA();
$('#start-flag').innerHTML = ICON.flag;

function openFromHash() {
  const h = (location.hash || '').replace(/^#/, '').toLowerCase();
  if (!h) return;
  if (WIN_CONFIG[h]) {
    if (powerScreen.style.display !== 'none') {
      enterDesktop();
    }
    setTimeout(() => openWindow(h), 100);
  }
}
window.addEventListener('hashchange', openFromHash);

// Start straight into power-on gate or hash
window.addEventListener('load', () => {
  updateClock();
  if (location.hash && location.hash.length > 1) {
    powerOn();
    setTimeout(openFromHash, 600);
  }
});
