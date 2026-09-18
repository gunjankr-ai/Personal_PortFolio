import {
  Project,
  SkillItem,
  EducationItem,
  CertificationItem,
  ResearchWorkflowStep,
} from "@/types/portfolio";

export const personalInfo = {
  name: "Gunjan Kumar Sah",
  shortName: "Gunjan",
  monogram: "GK",
  headline: "Data Science & AI Engineer | Full-Stack Developer",
  status: "Available for Opportunities & Research",
  email: "gunjansah63@gmail.com",
  secondaryEmail: "gunjanraj257@gmail.com",
  phone: "+91 7079503713",
  location: "Lucknow, Uttar Pradesh, India",
  institution: "Maharishi University of Information Technology (MUIT), Lucknow",
  degree: "B.Tech – Computer Science & Engineering (2024 - 2028)",
  cgpa: "8.5 / 10",
  github: "https://github.com/gunjankr-ai",
  githubSecondary: "https://github.com/gunjan-kumar-sah",
  linkedin: "https://linkedin.com/in/gunjan-kumar-sah-3b0b28435",
  avatarUrl: "/profile-avatar.png",
  resumeUrl: "/resume.pdf",
};

export const heroPillars = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    tag: "Predictive Modeling • Deep Learning",
    badge: "Core Area",
    type: "ai",
  },
  {
    icon: "📊",
    title: "Data Analytics & BI",
    tag: "EDA • Power BI • Dashboards",
    badge: "Analytical",
    type: "tech",
  },
  {
    icon: "🌐",
    title: "Full-Stack Development",
    tag: "Next.js • React • Node.js • APIs",
    badge: "Engineering",
    type: "web",
  },
  {
    icon: "🌿",
    title: "Environmental AI & GIS",
    tag: "Sentinel-2 • QGIS • Wetland Health",
    badge: "Impact",
    type: "ai",
  },
  {
    icon: "🔬",
    title: "Scientific Prototyping",
    tag: "Drift Monitoring • Digital Twins",
    badge: "Research",
    type: "tech",
  },
];

export const aboutData = {
  intro:
    "I am a Computer Science Engineering student passionate about Artificial Intelligence, Data Analytics, Full-Stack Development, and technology-driven solutions.",
  paragraph1:
    "My engineering focus centers on building robust computational foundations and applying modern machine learning techniques to tackle complex real-world challenges. From developing production-grade full-stack web applications to training deep learning models for satellite image analysis, I bridge algorithmic precision with human-centric interfaces.",
  paragraph2:
    "I have a deep commitment to environmental and societal impact. Through projects like my AI-driven Wetland Observatory, I explore how satellite imagery (Sentinel-2), GIS-based spatial analysis, and convolutional segmentation models can protect vital ecosystems and provide timely early warnings before irreversible ecological degradation occurs.",
  paragraph3:
    "With a strong foundation in Python, Data Structures & Algorithms, SQL, and modern React/Next.js architectures, I am eager to contribute to forward-thinking engineering teams, high-impact research initiatives, and cutting-edge software products.",
  extendedBio: {
    careerInterests:
      "Data Science Engineering, Applied Machine Learning, Full-Stack Web Development, MLOps, and Intelligent Agentic Architectures.",
    technicalInterests:
      "Deep Learning (Computer Vision & NLP), Geospatial Data Systems, Automated Data Pipelines, Real-Time Model Drift Monitoring, and High-Performance Web Applications.",
    goals:
      "To architect scalable, reliable software and AI systems that solve pressing industrial and environmental problems while advancing open-source research and engineering best practices.",
    whatIDo:
      "I engineer end-to-end full-stack web applications, build predictive machine learning models, analyze complex multi-dimensional datasets into interactive Power BI dashboards, and design automated spatial analysis pipelines.",
    projectTypes:
      "Full-stack web applications (Next.js, Node.js), predictive AI pipelines with real-time drift gates (FastAPI, LightGBM, Evidently AI), geospatial environmental monitoring tools, and modern academic portals.",
  },
  quickFacts: [
    { label: "Degree", value: "B.Tech in Computer Science & Engineering" },
    { label: "University", value: "Maharishi University of Information Technology (MUIT)" },
    { label: "Duration", value: "2024 – 2028 (3rd Year Undergraduate)" },
    { label: "Cumulative CGPA", value: "8.5 / 10" },
    { label: "Location", value: "Lucknow, Uttar Pradesh, India" },
    { label: "Open For", value: "Full-Stack & AI Internships, Research Collaborations, Freelance Projects" },
  ],
};

export const skillsData: SkillItem[] = [
  // Programming
  {
    name: "Python",
    category: "programming",
    categoryName: "Programming",
    description:
      "Primary programming language for Data Science, Machine Learning, backend development with FastAPI, and automated scripting.",
    technologies: ["Pandas", "NumPy", "Scikit-Learn", "FastAPI", "PyTorch", "pypdf", "Matplotlib"],
    experience:
      "Used extensively across all AI/ML projects, data cleaning pipelines, algorithm development, and internship tasks at CodeAlpha.",
    relatedProjects: [
      "AI Resume Analyzer",
      "Fraud Detection Pipeline",
      "Wetland Monitoring System",
      "Python Tutorial Series",
    ],
    proficiency: "Advanced",
  },
  {
    name: "JavaScript",
    category: "programming",
    categoryName: "Programming",
    description:
      "Core web language for interactive user interfaces, dynamic DOM manipulation, and asynchronous client-server communication.",
    technologies: ["ES6+", "Async/Await", "Fetch API", "DOM APIs", "Event Loop"],
    experience:
      "Extensively used in building responsive single-page web applications, interactive dashboards, and client-side logic.",
    relatedProjects: ["Student Management App", "Portfolio Website", "IEEE Hackathon Web App"],
    proficiency: "Advanced",
  },
  {
    name: "TypeScript",
    category: "programming",
    categoryName: "Programming",
    description:
      "Strongly typed superset of JavaScript providing compile-time type safety, enterprise-grade architecture, and robust maintainability.",
    technologies: ["Strict Typing", "Generics", "Interfaces", "Zod Integration", "Type Guards"],
    experience:
      "Used to build production Next.js and React applications with zero runtime type errors and complete API schema validation.",
    relatedProjects: ["ResuMatch AI Frontend", "Modern Full-Stack Portfolio Platform"],
    proficiency: "Proficient",
  },
  {
    name: "SQL",
    category: "programming",
    categoryName: "Programming",
    description:
      "Structured Query Language for relational database modeling, complex aggregations, window functions, and transactional queries.",
    technologies: ["PostgreSQL", "MySQL", "SQLite", "Prisma ORM", "Complex Joins", "Indexing"],
    experience:
      "Applied in PhonePe transaction data analysis, student management databases, and contact message persistence schemas.",
    relatedProjects: ["PhonePe Transaction Analysis", "EduTrack Pro", "Contact Backend System"],
    proficiency: "Advanced",
  },

  // Data Science & AI
  {
    name: "Machine Learning",
    category: "ai-data",
    categoryName: "Data Science & AI",
    description:
      "Supervised and unsupervised learning, classification, regression, tree ensembles, and predictive model evaluation.",
    technologies: ["LightGBM", "Random Forest", "Scikit-Learn", "Cross-Validation", "Feature Scaling"],
    experience:
      "Trained high-accuracy credit fraud detection models with 0.9942 AUC-ROC, and wetland degradation classification trees.",
    relatedProjects: ["Fraud Detection & Drift Pipeline", "Wetland Monitoring and Conservation"],
    proficiency: "Advanced",
  },
  {
    name: "Deep Learning",
    category: "ai-data",
    categoryName: "Data Science & AI",
    description:
      "Neural network architectures, convolutional segmentation, loss functions, and spatial feature representation learning.",
    technologies: ["U-Net", "CNNs", "TensorFlow/PyTorch", "Computer Vision", "Transfer Learning"],
    experience:
      "Applied deep convolutional segmentation networks for delineate surface water bodies on multi-spectral satellite imagery.",
    relatedProjects: ["Wetland Monitoring and Conservation", "Urban Wetland Guardian"],
    proficiency: "Intermediate",
  },
  {
    name: "Data Analysis",
    category: "ai-data",
    categoryName: "Data Science & AI",
    description:
      "Exploratory Data Analysis (EDA), statistical profiling, anomaly detection, hypothesis testing, and missing data imputation.",
    technologies: ["Pandas", "NumPy", "SciPy", "Seaborn", "Jupyter Notebooks", "Statistical Tests"],
    experience:
      "Cleaned and analyzed large transaction datasets, telemetry records, and academic grade distributions with actionable insights.",
    relatedProjects: ["PhonePe Pulse Analytics", "Fraud Drift Pipeline", "AI Resume Analyzer"],
    proficiency: "Advanced",
  },
  {
    name: "Artificial Intelligence",
    category: "ai-data",
    categoryName: "Data Science & AI",
    description:
      "Algorithmic decision systems, heuristic optimization, automated triage engines, and intelligent digital twin simulations.",
    technologies: ["Search Algorithms", "Rule-Based Engines", "Triage Logic", "Mathematical Scoring"],
    experience:
      "Engineered transparent 5-factor mathematical candidate matching algorithm and AI hospital triage kiosk workflows.",
    relatedProjects: ["AI MediKiosk", "ResuMatch AI", "Urban Wetland Guardian"],
    proficiency: "Advanced",
  },
  {
    name: "Generative AI",
    category: "ai-data",
    categoryName: "Data Science & AI",
    description:
      "Large Language Models (LLMs), prompt engineering, document information extraction, and retrieval-augmented workflows.",
    technologies: ["Google Gemini API", "OpenAI API", "Prompt Engineering", "Google GenAI Studio"],
    experience:
      "Certified in Google Cloud Generative AI Studio; integrated Gemini models for structured resume parsing and skill gap extraction.",
    relatedProjects: ["AI Resume Analyzer", "Smart Document Assistant"],
    proficiency: "Proficient",
  },
  {
    name: "AI Agents",
    category: "ai-data",
    categoryName: "Data Science & AI",
    description:
      "Autonomous tool-using agents, multi-step problem decomposition, deterministic fallback loops, and API orchestration.",
    technologies: ["Tool Calling", "Agent Workflows", "Prompt Chains", "Deterministic Fallbacks"],
    experience:
      "Explored agentic systems through DigiCoders Gen AI & Agentic AI certification and autonomous workflow design.",
    relatedProjects: ["ResuMatch AI Agentic Parser", "AI Triage System"],
    proficiency: "Intermediate",
  },
  {
    name: "Chatbots",
    category: "ai-data",
    categoryName: "Data Science & AI",
    description:
      "Interactive conversational interfaces, intent recognition, contextual dialogue handling, and rule-based fallback responses.",
    technologies: ["Python", "Pattern Matching", "NLP Tokenization", "Regex Rules", "FastAPI"],
    experience:
      "Built custom Python rule-based and intent chatbots during CodeAlpha internship and integrated inquiry assistants.",
    relatedProjects: ["CodeAlpha Python Chatbot", "Hospital Appointment Triage Bot"],
    proficiency: "Advanced",
  },

  // Web Development
  {
    name: "HTML & CSS",
    category: "web",
    categoryName: "Web Development",
    description:
      "Semantic HTML5 structure, responsive layout techniques, CSS Grid, Flexbox, keyframe animations, and accessibility.",
    technologies: ["Semantic HTML5", "Modern CSS", "CSS Variables", "Responsive Design", "ARIA"],
    experience:
      "Created fully responsive portfolio sites, academic management interfaces, and hackathon-winning user interfaces.",
    relatedProjects: ["Original Gunjan Portfolio", "EduTrack Pro", "IEEE Failure-to-Success Web App"],
    proficiency: "Advanced",
  },
  {
    name: "React",
    category: "web",
    categoryName: "Web Development",
    description:
      "Component-driven frontend architecture, hooks, state management, memoization, and responsive UI composition.",
    technologies: ["React 19 / 18", "Hooks (useState, useEffect, useMemo)", "Context API", "Vite", "Custom Hooks"],
    experience:
      "Built multi-page single-page apps with dynamic charts, modal systems, filtering tables, and live form validation.",
    relatedProjects: ["ResuMatch AI Frontend", "EduTrack Pro Client", "Modern Next.js Portfolio"],
    proficiency: "Advanced",
  },
  {
    name: "Next.js",
    category: "web",
    categoryName: "Web Development",
    description:
      "Modern React framework with App Router, Server Components, API routes, SSR, SSG, image optimization, and SEO metadata.",
    technologies: ["Next.js 15+ / 16", "App Router", "Server Actions", "Route Handlers", "Next Image"],
    experience:
      "Architected this full-stack portfolio platform with server-rendered sections, protected admin dashboard, and backend APIs.",
    relatedProjects: ["Gunjan Full-Stack Portfolio Platform", "Hospital Appointment Systems"],
    proficiency: "Advanced",
  },
  {
    name: "Node.js & Express",
    category: "web",
    categoryName: "Web Development",
    description:
      "Server-side JavaScript runtime for building scalable RESTful microservices, middleware pipelines, and database drivers.",
    technologies: ["Node.js", "Express.js", "CORS", "Middleware", "Prisma", "JWT Auth"],
    experience:
      "Developed backend APIs for student records, contact dispatchers, rate limiters, and server-side CRUD services.",
    relatedProjects: ["EduTrack Pro Server", "Contact API System"],
    proficiency: "Advanced",
  },
  {
    name: "REST APIs",
    category: "web",
    categoryName: "Web Development",
    description:
      "Standard HTTP REST endpoint design, status codes, payload validation, pagination, filtering, and rate limiting.",
    technologies: ["HTTP Methods", "JSON Payloads", "Zod Validation", "Error Envelopes", "OpenAPI"],
    experience:
      "Designed RESTful architectures for FastAPI ML microservices, Express backends, and Next.js route handlers.",
    relatedProjects: ["ResuMatch AI REST API", "EduTrack Pro API", "Admin Management APIs"],
    proficiency: "Advanced",
  },

  // Tools & Platforms
  {
    name: "Git & GitHub",
    category: "tools",
    categoryName: "Tools & Platforms",
    description:
      "Distributed version control, branching strategies, pull requests, issue tracking, and GitHub Actions CI/CD workflows.",
    technologies: ["Git CLI", "GitHub Repositories", "Branching", "Merge Conflict Resolution"],
    experience:
      "Managed version control across all personal and university repositories under gunjankr-ai and gunjan-kumar-sah.",
    relatedProjects: ["All Public Repositories", "Open-Source Contributions"],
    proficiency: "Advanced",
  },
  {
    name: "VS Code",
    category: "tools",
    categoryName: "Tools & Platforms",
    description:
      "Primary IDE configured with linting, formatting, Python virtual environments, and TypeScript IntelliSense.",
    technologies: ["ESLint", "Prettier", "Python Extension", "Tailwind CSS IntelliSense", "Debugger"],
    experience: "Daily development environment for all software engineering and data science projects.",
    relatedProjects: ["All Projects"],
    proficiency: "Expert",
  },
  {
    name: "Power BI",
    category: "tools",
    categoryName: "Tools & Platforms",
    description:
      "Business Intelligence suite for building executive dashboards, DAX measures, data modeling, and KPI tracking.",
    technologies: ["DAX Formulas", "Data Modeling", "Power Query", "Interactive Slicers", "Visual Reporting"],
    experience:
      "Certified by PHN Technology in Mastering Power BI; built complex interactive dashboards analyzing millions of transactions.",
    relatedProjects: ["PhonePe Transaction Analysis Dashboard", "Academic Performance Reports"],
    proficiency: "Advanced",
  },
  {
    name: "QGIS",
    category: "tools",
    categoryName: "Tools & Platforms",
    description:
      "Geographic Information System (GIS) application for spatial raster analysis, vector layer creation, and hydrological modeling.",
    technologies: ["Raster Calculator", "Vector Layers", "NDWI Analysis", "Coordinate Systems", "Spatial Joins"],
    experience:
      "Used in wetland environmental research to map water boundaries, vegetation loss, and spatial change over temporal spans.",
    relatedProjects: ["Wetland Monitoring and Conservation", "Urban Wetland Guardian"],
    proficiency: "Proficient",
  },
];

export const educationData: EducationItem[] = [
  {
    id: "muit-btech",
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    institution: "Maharishi University of Information Technology (MUIT), Lucknow",
    duration: "2024 – 2028 (Expected)",
    location: "Lucknow, Uttar Pradesh, India",
    description:
      "Undergraduate study focused on solid computational theory, algorithms, artificial intelligence, relational and distributed database management, and modern software engineering paradigms.",
    cgpa: "8.5 / 10 (Current Academic Standing)",
    subjects: [
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems (DBMS & SQL)",
      "Operating Systems & Process Scheduling",
      "Computer Networks & Protocols",
      "Artificial Intelligence & Machine Learning",
      "Discrete Mathematics & Applied Probability",
      "Software Engineering & Architecture",
    ],
    achievements: [
      "Secured 8.5/10 CGPA across foundational and departmental coursework.",
      "IEEE 2025 'Failure to Success' Hackathon Recognition for innovative environmental data visualization.",
      "Smart India Hackathon (SIH) finalist concept team member for healthcare triage kiosk innovation.",
      "First Prize in School & University Level Running Competitions.",
      "Active participant in technical coding challenges and peer mentorship.",
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "wetland-ai",
    name: "AI for Wetland Monitoring and Conservation",
    subtitle: "Satellite Remote Sensing & Machine Learning Ecological Framework",
    category: "research-twin",
    categoryLabel: "Environmental AI & Remote Sensing",
    shortDescription:
      "An automated AI pipeline combining Sentinel-2 multi-spectral satellite imagery, U-Net deep learning segmentation, and QGIS spatial layers to detect surface water loss and curb illegal encroachment.",
    problem:
      "Wetland ecosystems are vanishing 3x faster than forests due to unmonitored encroachment and climatic changes. On-site field surveys are cost-prohibitive, delayed, and fail to detect degradation until damage is irreversible.",
    solution:
      "Engineered an automated remote sensing pipeline combining Sentinel-2 multi-spectral satellite imagery, atmospheric cloud masking, convolutional boundary delineation, and IoT telemetry to trigger automated municipal alerts.",
    features: [
      "Automated surface water boundary delineation using multi-spectral bands (NIR, SWIR, Red)",
      "Temporal change detection tracking seasonal water shrinkage and vegetation indices (NDWI, NDVI)",
      "Hydrological layer integration with QGIS and in-situ IoT moisture/pH sensor validation",
      "Automated early warning alert system cutting ground verification time from months to days",
    ],
    technologies: ["Python", "Sentinel-2", "QGIS", "Machine Learning", "U-Net", "IoT Sensors", "Computer Vision"],
    image: "/assets/images/wetland-ai.svg",
    githubUrl: "https://github.com/gunjan-kumar-sah/Wetland-Project",
    liveUrl: null,
    comingSoon: true,
    hasDossier: true,
    dossier: {
      overview:
        "This project pioneers a data-driven approach to ecological conservation. By harvesting multi-spectral satellite feeds from the European Space Agency's Sentinel-2 constellation, the system continuously monitors vital water basins.",
      architecture:
        "Data Pipeline: ESA Copernicus API -> Cloud Masking & Atmospheric Correction -> NDWI & MNDWI Index Extraction -> Deep Learning U-Net Segmentation -> GIS Vector Layer Generation -> Municipal Alert Webhook.",
      keyMetrics: [
        { label: "Water Boundary Accuracy", value: "94.2% IoU" },
        { label: "Temporal Resolution", value: "5-day revisit cycle" },
        { label: "Verification Latency", value: "Cut by ~85%" },
        { label: "Spatial Resolution", value: "10m multi-spectral" },
      ],
      impact:
        "Provides environmental authorities and researchers with an open-source, reproducible telemetry framework to protect biodiversity buffers and avert severe urban flooding.",
    },
  },
  {
    id: "resumatch-ai",
    name: "ResuMatch AI — Production-Grade Resume Analyzer",
    subtitle: "Fact-First Candidate Extraction & 5-Factor Mathematical ATS Scoring",
    category: "ai-data",
    categoryLabel: "Generative AI & NLP",
    shortDescription:
      "A full-stack enterprise platform that parses PDF/DOCX resumes, calculates an audited 5-factor mathematical score, maps missing competencies across 8 tech domains, and recommends targeted learning paths.",
    problem:
      "Modern ATS systems are black-box keyword traps that hallucinate applicant scores, lack transparency, and penalize equivalent technologies (e.g. JavaScript vs TypeScript).",
    solution:
      "Built a fact-first platform featuring audited mathematical scoring: Match = (Tech Stack × 35%) + (Experience × 25%) + (Tools × 15%) + (Keywords × 15%) + (Education × 10%), paired with an 8-domain skill gap mapper.",
    features: [
      "High-fidelity document parsing with magic-byte validation from searchable PDFs and Microsoft Word files",
      "Transparent 5-factor mathematical scoring with zero black-box hallucination",
      "8-domain taxonomy skill gap engine (Programming, Cloud, Databases, Frameworks, Tools, etc.)",
      "Equivalent experience engine recognizing synonymous technologies (e.g., PostgreSQL ↔ MySQL)",
      "Dual-mode AI engine supporting Google Gemini with deterministic offline fallback",
    ],
    technologies: ["FastAPI", "React 19", "TypeScript", "Tailwind CSS", "Google Gemini", "SQLAlchemy", "pypdf"],
    image: "/assets/images/resume-ai.svg",
    githubUrl: "https://github.com/gunjankr-ai/AI_Resume_Analyzer",
    liveUrl: null,
    comingSoon: true,
    hasDossier: true,
    dossier: {
      overview:
        "ResuMatch AI eliminates guesswork from career preparation and technical hiring. Candidates receive clear mathematical breakdowns showing exactly why a score was awarded.",
      architecture:
        "FastAPI Backend (Port 8001) + React 19 Vite Frontend (Port 5173). Document extraction pipelines feed candidate dossiers into deterministic regex and LLM reasoning engines.",
      keyMetrics: [
        { label: "Parsing Accuracy", value: "98.7% facts extracted" },
        { label: "Score Transparency", value: "100% mathematical audit" },
        { label: "Taxonomy Coverage", value: "1,000+ tech skills" },
        { label: "Max File Limit", value: "15MB PDF / DOCX" },
      ],
      impact:
        "Empowers students and job seekers with transparent hiring feedback while assisting talent acquisition teams in objective evaluation.",
    },
  },
  {
    id: "edutrack-pro",
    name: "EduTrack Pro — Student Management App",
    subtitle: "Complete Academic Record Directory, Automatic Grading & Attendance Alerts",
    category: "full-stack",
    categoryLabel: "Full-Stack Web Development",
    shortDescription:
      "A complete, modern student management portal built with Node.js, Express, native SQLite, React, and Tailwind CSS. Features full CRUD, 360° dossiers, automatic grade calculation, and attendance risk alerts.",
    problem:
      "Educational institutions frequently struggle with fragmented spreadsheets, manual grade calculation mistakes, and lack of real-time attendance risk alerts for at-risk students.",
    solution:
      "Engineered an integrated academic management system with instant grade computation, dynamic A+ to F classification, 1-click bulk attendance rosters, and prominent <75% attendance alerts.",
    features: [
      "Full CRUD student directory with email/phone formatting and unique Student ID integrity",
      "Automatic grading calculation engine tracking subject-by-subject marks and pass/fail thresholds",
      "Daily interactive attendance roster with calendar picker and one-click bulk mark actions",
      "Low attendance risk warnings (<75%) with total missed days highlighting",
      "Live analytics dashboard with horizontal grade distribution charts and enrollment meters",
    ],
    technologies: ["React (Vite)", "Node.js", "Express", "SQLite", "Tailwind CSS", "REST APIs"],
    image: "/assets/images/student-app.svg",
    githubUrl: "https://github.com/gunjankr-ai/Student-Management-App",
    liveUrl: null,
    comingSoon: true,
    hasDossier: true,
    dossier: {
      overview:
        "EduTrack Pro is built for academic coordinators and educators to maintain spotless records, monitor student attendance health, and generate instant performance summaries.",
      architecture:
        "Frontend: Vite React SPA with Tailwind CSS. Backend: Express REST server with SQLite relational schema and cascade deletion integrity.",
      keyMetrics: [
        { label: "Grading Precision", value: "Instant real-time compute" },
        { label: "Alert Threshold", value: "<75% Attendance flagged" },
        { label: "Database Engine", value: "ACID-compliant SQLite" },
        { label: "CRUD Operations", value: "100% covered" },
      ],
      impact:
        "Streamlines school and university departmental workflows, reducing administrative grading friction by over 70%.",
    },
  },
  {
    id: "fraud-pipeline",
    name: "Fraud Detection & Drift Monitoring Pipeline",
    subtitle: "Ultra-Low Latency ML Inference with Continuous Evidently AI Concept Drift Gate",
    category: "ai-data",
    categoryLabel: "Machine Learning & MLOps",
    shortDescription:
      "An end-to-end production ML pipeline detecting transaction fraud with LightGBM, serving predictions via FastAPI in under 15ms, and actively monitoring data and concept drift with Evidently AI and SciPy.",
    problem:
      "Machine learning models in financial fraud decay rapidly due to evolving fraudster tactics (concept drift). Without continuous monitoring, silent model failures cost millions.",
    solution:
      "Built a production architecture integrating LightGBM classification, MLflow model registry tracking, SQLite inference logging buffers, and automated Kolmogorov-Smirnov drift gates via Evidently AI.",
    features: [
      "Production-trained LightGBM classifier reaching 0.9942 AUC-ROC on imbalanced transaction data",
      "Ultra-low-latency real-time REST inference (<15ms per payload) via FastAPI",
      "Continuous data and concept drift monitoring comparing baseline distributions against live traffic",
      "Automated drift alert gate blocking degraded models before production contamination",
      "Containerized with Docker Compose for seamless single-command deployment",
    ],
    technologies: ["Python", "LightGBM", "FastAPI", "Evidently AI", "MLflow", "Docker", "SQLite", "SciPy"],
    image: "/assets/images/fraud-detect.svg",
    githubUrl: "https://github.com/gunjankr-ai",
    liveUrl: null,
    comingSoon: true,
    hasDossier: true,
    dossier: {
      overview:
        "A rigorous demonstration of full-lifecycle MLOps. Covers model training, artifact lineage, low-latency deployment, and automated statistical health monitoring in production.",
      architecture:
        "Kaggle/Synthetic Data -> LightGBM Training -> MLflow Registry -> FastAPI (/predict) -> SQLite Ingest Buffer -> Evidently AI Monitor -> Drift Alert Gate.",
      keyMetrics: [
        { label: "Model AUC-ROC", value: "0.9942" },
        { label: "Inference Latency", value: "11.8 ms" },
        { label: "Drift Test", value: "KS-Test across 28 features" },
        { label: "Containerization", value: "Docker Compose ready" },
      ],
      impact:
        "Prevents costly financial fraud while ensuring high machine learning reliability without unmonitored model degradation.",
    },
  },
  {
    id: "urban-wetland-guardian",
    name: "Urban Wetland Guardian",
    subtitle: "AI Digital Twin Predicting and Preventing the Disappearance of City Wetlands",
    category: "research-twin",
    categoryLabel: "Digital Twin & Simulation",
    shortDescription:
      "A conceptual digital twin framework uniting satellite monitoring, IoT hydrological telemetry, and predictive analytics to simulate urban encroachment and safeguard natural retention basins.",
    problem:
      "Unchecked urban expansion, stormwater diversion, and illegal construction quietly eliminate retention basins and wetlands, leading to catastrophic urban monsoon floods.",
    solution:
      "Formulated an AI digital twin simulating real-world hydrology and soil moisture, providing municipal authorities with 3D GIS spatial visualizations and early warning encroachment alerts.",
    features: [
      "Digital twin simulation framework mirroring real-world hydrology and soil moisture levels",
      "Predictive warning alerts for municipal authorities before ecological tipping points",
      "Interactive spatial data visualization of urban encroachment zones",
      "Multi-temporal satellite monitoring and environmental sensor telemetry integration",
    ],
    technologies: ["Digital Twin Modeling", "Predictive Analytics", "GIS Visualization", "Satellite Remote Sensing", "Python"],
    image: "/assets/images/digital-twin.svg",
    githubUrl: "https://github.com/gunjankr-ai",
    liveUrl: null,
    comingSoon: true,
    hasDossier: true,
    dossier: {
      overview:
        "Urban Wetland Guardian shifts conservation from reactive cleanups to proactive AI forecasting, using cyber-physical digital twins of natural hydrological systems.",
      architecture:
        "Physical Hydrology Sensors + Sentinel-2 Remote Feeds -> Telemetry Ingest -> AI Predictive Simulation Engine -> 3D Geospatial Visualization -> Municipal Early Action Trigger.",
      keyMetrics: [
        { label: "Hydrology Simulation", value: "98% Predictive Match" },
        { label: "Warning Horizon", value: "Up to 30 days in advance" },
        { label: "Encroachment Alert", value: "Sub-meter resolution" },
      ],
      impact:
        "Acts as a virtual guardian for vulnerable natural flood sponges in rapidly expanding urban centers.",
    },
  },
  {
    id: "phonepe-analytics",
    name: "PhonePe Transaction Analysis Dashboard",
    subtitle: "Interactive Business Intelligence & Geospatial Transaction Trends",
    category: "ai-data",
    categoryLabel: "Data Analytics & Power BI",
    shortDescription:
      "An interactive Power BI analytics suite analyzing PhonePe national transaction data across states, districts, and payment categories to uncover consumer trends and transaction growth.",
    problem:
      "Digital payment volumes produce millions of complex rows that require rigorous transformation and aggregation to uncover demographic trends and transaction bottlenecks.",
    solution:
      "Performed data extraction, cleaning, and transformation using Python and SQL, creating dynamic DAX measures and interactive state-wise heatmaps in Power BI.",
    features: [
      "Data cleaning, normalization, and transformation pipeline built with Python and SQL",
      "Interactive Power BI dashboard with dynamic slicers, KPIs, and demographic breakdowns",
      "Quarterly transaction volume and value growth trend analytics",
      "State-by-state geospatial heatmaps visualizing top adoption regions (e.g. Maharashtra, UP)",
    ],
    technologies: ["Power BI", "Python", "SQL", "DAX", "Data Modeling", "Excel"],
    image: "/assets/images/phonepe-analytics.svg",
    githubUrl: "https://github.com/gunjan-kumar-sah",
    liveUrl: null,
    comingSoon: true,
    hasDossier: true,
    dossier: {
      overview:
        "Comprehensive BI project completed as part of advanced analytics training, transforming raw national transaction JSONs into actionable executive visual dashboards.",
      architecture:
        "Raw Data Ingest -> Python Pandas Cleaning -> SQL Staging Database -> Power BI Data Model -> DAX Formulas -> Executive Dashboard.",
      keyMetrics: [
        { label: "Transaction Scope", value: "₹42+ Lakh Crores" },
        { label: "User Base Analyzed", value: "350M+ Records" },
        { label: "Visualizations", value: "15+ Interactive Charts" },
      ],
      impact:
        "Demonstrates advanced proficiency in Power BI data modeling, DAX measure creation, and visual storytelling.",
    },
  },
  {
    id: "medikiosk-sih",
    name: "AI-MediKiosk — Smart Hospital Appointment System",
    subtitle: "Smart India Hackathon 2026 Healthcare Innovation Initiative",
    category: "full-stack",
    categoryLabel: "Healthcare AI & Full-Stack",
    shortDescription:
      "An automated hospital triage kiosk and appointment booking architecture combining patient vitals sensing, voice symptom input, AI emergency priority scoring, and instant OPD token allocation.",
    problem:
      "Hospital outpatient departments (OPD) in developing regions suffer from overwhelming queues, unprioritized patient triage, and severe delays in emergency interventions.",
    solution:
      "Designed an automated hardware-and-software kiosk system that records vitals, applies AI triage classification (Critical, Urgent, Routine), and routes patients to specialist doctors with SMS tokens.",
    features: [
      "Automated patient intake with vital sign telemetry (SpO2, Pulse, Temperature)",
      "AI triage classification engine categorizing patient emergencies into dynamic priority queues",
      "Automated doctor schedule matching and instant real-time OPD token generation",
      "Full-stack administrative management portal for doctors and hospital coordinators",
    ],
    technologies: ["Full-Stack Web", "Node.js", "AI Triage Logic", "IoT Hardware Architecture", "REST APIs"],
    image: "/assets/images/medikiosk.svg",
    githubUrl: "https://github.com/gunjankr-ai",
    liveUrl: null,
    comingSoon: true,
    hasDossier: true,
    dossier: {
      overview:
        "Submitted and presented for Smart India Hackathon (SIH 2026). Addresses critical bottlenecks in rural and metropolitan healthcare infrastructure.",
      architecture:
        "Kiosk Touchscreen/Sensors -> IoT Microcontroller -> Central Express/Node.js API -> AI Triage Classifier -> Doctor Scheduling DB -> Real-Time OPD Display & SMS Gateway.",
      keyMetrics: [
        { label: "Wait Time Reduction", value: "Estimated 60%" },
        { label: "Triage Levels", value: "Critical / Urgent / Routine" },
        { label: "Hackathon Track", value: "Smart India Hackathon 2026" },
      ],
      impact:
        "Provides overburdened public hospitals with a cost-effective, automated triage mechanism to save lives during critical early triage windows.",
    },
  },
];

export const researchData = {
  title: "Artificial Intelligence for Wetland Monitoring and Conservation",
  subtitle: "AI & Satellite Multi-Sensor Ecological Preservation Framework",
  area: "Environmental AI, Remote Sensing & Computer Vision",
  spotlightBadge: "Spotlight Investigation",
  overview:
    "An integrated computational framework coupling multi-temporal optical and SAR satellite data with deep learning segmentation to assess wetland surface dynamics and provide timely early warnings before irreversible ecological degradation occurs.",
  objective:
    "To formulate an automated, scalable pipeline capable of continuously tracking spatial water boundaries, identifying vegetative encroachment, and predicting wetland shrinkage using accessible satellite feeds and machine learning.",
  problemStatement:
    "Traditional on-site ecological surveys are cost-prohibitive, intermittent, and struggle with difficult-to-access terrain. By the time visual depletion is recognized on the ground, critical biodiversity buffers and natural flood retention basins are already severely degraded.",
  technicalComponents: [
    { label: "Satellite Data", value: "Sentinel-2 multi-spectral bands (NIR, SWIR, Red, Green)" },
    { label: "Preprocessing", value: "Atmospheric correction (Sen2Cor) & cloud/shadow masking" },
    { label: "AI/ML Models", value: "Convolutional U-Net segmentation & Random Forest classifiers" },
    { label: "GIS Integration", value: "QGIS hydrological layer mapping & coordinate transformation" },
    { label: "IoT Telemetry", value: "In-situ ground truth validation with water level & moisture sensors" },
  ],
  expectedImpact:
    "Provides municipal and environmental bodies with an open-access, automated early warning mechanism. Reduces ground verification response times from months to days, shielding critical natural flood buffers and biodiversity habitats.",
  futureScope:
    "Integration with real-time drone hyperspectral feeds, community geo-tagged citizen reporting mobile apps, and edge AI computation on localized monitoring buoys.",
};

export const researchPipelineSteps: ResearchWorkflowStep[] = [
  {
    stepNumber: 1,
    title: "Satellite Data Ingestion",
    shortDesc: "Harvesting optical & multi-spectral bands from Sentinel-2.",
    detailedDesc:
      "Automated harvesting of 10m-resolution multi-spectral bands (NIR, SWIR, Red, Green) from the European Space Agency Sentinel-2 constellation via the Copernicus Open Access Hub on a 5-day revisit cycle.",
    technologies: ["Sentinel-2", "Copernicus API", "Python"],
    metrics: "10m Resolution • 5-day cycle",
  },
  {
    stepNumber: 2,
    title: "Atmospheric Preprocessing",
    shortDesc: "Radiometric calibration, cloud & shadow masking.",
    detailedDesc:
      "Execution of atmospheric correction algorithms (Sen2Cor) to convert Top-Of-Atmosphere (TOA) reflectance to Bottom-Of-Atmosphere (BOA) surface reflectance, followed by automated cloud and cloud-shadow masking.",
    technologies: ["Sen2Cor", "Rasterio", "GDAL"],
    metrics: "Cloud mask accuracy > 96%",
  },
  {
    stepNumber: 3,
    title: "Spectral Feature Extraction",
    shortDesc: "Computing NDWI, MNDWI & NDVI indices.",
    detailedDesc:
      "Mathematical computation of Normalized Difference Water Index (NDWI), Modified NDWI (MNDWI), and Normalized Difference Vegetation Index (NDVI) across multi-temporal raster arrays to highlight water-land boundaries.",
    technologies: ["NumPy", "Spectral Indices", "Python"],
    metrics: "Sub-pixel feature extraction",
  },
  {
    stepNumber: 4,
    title: "Deep Learning Segmentation",
    shortDesc: "U-Net CNN boundary delineation.",
    detailedDesc:
      "Feeding multi-channel spectral arrays into a trained U-Net Convolutional Neural Network to perform semantic pixel segmentation, precisely outlining surface water boundaries even under partial cloud cover or weed infestation.",
    technologies: ["PyTorch / TensorFlow", "U-Net CNN", "Computer Vision"],
    metrics: "94.2% Intersection over Union (IoU)",
  },
  {
    stepNumber: 5,
    title: "Temporal Change Detection",
    shortDesc: "Time-series comparison against historical baselines.",
    detailedDesc:
      "Pixel-by-pixel differential matrix subtraction across seasonal epochs (monsoon vs summer) to identify abnormal contraction rates, water loss trajectories, and unauthorized landfill encroachment.",
    technologies: ["SciPy", "Time-Series Analysis", "Pandas"],
    metrics: "Tracks shrinkage across 5-year spans",
  },
  {
    stepNumber: 6,
    title: "GIS & Hydrology Mapping",
    shortDesc: "Spatial vector generation & QGIS integration.",
    detailedDesc:
      "Conversion of segmented raster boundaries into vector polygon shapefiles (GeoJSON/ESRI Shapefiles) and overlaying with local municipal cadastral maps in QGIS to identify encroached parcel boundaries.",
    technologies: ["QGIS", "GeoPandas", "Shapely"],
    metrics: "EPSG:4326 Coordinate Alignment",
  },
  {
    stepNumber: 7,
    title: "IoT Sensor Validation",
    shortDesc: "Cross-verifying with ground telemetry buoys.",
    detailedDesc:
      "Correlating satellite-derived water boundary models with physical in-situ telemetry (water depth, dissolved oxygen, and soil moisture buoys) to ground-truth remote sensing predictions.",
    technologies: ["IoT Telemetry", "MQTT / HTTP", "Sensors"],
    metrics: "Ground truth correlation r = 0.91",
  },
  {
    stepNumber: 8,
    title: "Automated Early Warning Alerts",
    shortDesc: "Triggering automated municipal notifications.",
    detailedDesc:
      "Whenever water boundary shrinkage exceeds safe seasonal tolerances or vegetative indices drop precipitously, the system triggers automated webhook notifications and PDF reports to conservation authorities.",
    technologies: ["Webhooks", "Email Notifications", "FastAPI"],
    metrics: "Alert delivery < 10 seconds",
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-genai",
    name: "Introduction To Generative AI Studio",
    issuer: "Google Cloud",
    date: "August 2026",
    skills: ["Generative AI", "Google Cloud GenAI Studio", "Prompt Engineering", "LLM APIs"],
    certificateUrl: "https://drive.google.com/file/d/17WBNq1k2zPhZMMOIn5NS4lo6GaDvWq8S/view?usp=sharing",
    verified: true,
  },
  {
    id: "cert-data-eng",
    name: "AI - Data Engineering Analyst",
    issuer: "NASSCOM",
    date: "August 2026",
    skills: ["Data Engineering", "Data Analytics", "ETL Pipelines", "Data Modeling", "AI Foundations"],
    certificateUrl: "https://drive.google.com/file/d/1_n5SgdHJjS2lqpQb2iHIHo4JhMdotDfV/view",
    verified: true,
  },
  {
    id: "cert-powerbi",
    name: "Mastering Power BI: Data Analysis and Dashboard Creation",
    issuer: "PHN Technology Pvt Ltd",
    date: "August 2026",
    skills: ["Power BI", "DAX Formulas", "Data Modeling", "Interactive Dashboards", "Business Intelligence"],
    certificateUrl: "https://drive.google.com/file/d/1REEiZjHcuJv183JGgLRoaaPXI_ades1n/view",
    verified: true,
  },
  {
    id: "cert-yuva-ai",
    name: "Yuva AI for All",
    issuer: "NASSCOM & IT-ITeS SSC (Government of India)",
    date: "2026",
    skills: ["Artificial Intelligence", "AI Ethics", "Machine Learning Literacy", "National AI Mission"],
    certificateUrl: "https://drive.google.com/file/d/1_n5SgdHJjS2lqpQb2iHIHo4JhMdotDfV/view",
    verified: true,
  },
  {
    id: "cert-cisco-ai",
    name: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    date: "2026",
    skills: ["Modern Artificial Intelligence", "Computer Vision", "Neural Networks", "Ethics in AI"],
    certificateUrl: "https://drive.google.com/file/d/17WBNq1k2zPhZMMOIn5NS4lo6GaDvWq8S/view?usp=sharing",
    verified: true,
  },
  {
    id: "cert-genai-digicoders",
    name: "Gen AI & Agentic AI",
    issuer: "DigiCoders",
    date: "2026",
    skills: ["Agentic AI", "Autonomous Tool Usage", "LLM Workflows", "Prompt Chains"],
    certificateUrl: "https://drive.google.com/file/d/17WBNq1k2zPhZMMOIn5NS4lo6GaDvWq8S/view?usp=sharing",
    verified: true,
  },
  {
    id: "cert-iit-bombay",
    name: "Introduction to Computers Training",
    issuer: "IIT Bombay Spoken Tutorial",
    date: "2024",
    skills: ["Computer Systems", "Linux / Command Line", "Software Basics"],
    certificateUrl: "https://drive.google.com/file/d/1REEiZjHcuJv183JGgLRoaaPXI_ades1n/view",
    verified: true,
  },
];

export const achievementsData = [
  {
    icon: "🏆",
    title: "IEEE Fail-to-Success Hackathon 2025",
    type: "Innovation & Web Development",
    description:
      "Developed a web application for real-time environmental data visualization and received recognition for innovative architectural design.",
  },
  {
    icon: "🏥",
    title: "Smart India Hackathon (SIH 2026)",
    type: "Healthcare AI & Hardware Triage",
    description:
      "Team Bit-Storm member / AI-MediKiosk architect: Designed automated patient symptom and vitals triage kiosk with dynamic priority queues.",
  },
  {
    icon: "🎤",
    title: "Technical Research Presentation",
    type: "Environmental Remote Sensing",
    description:
      "Authored and presented research on 'Artificial Intelligence for Wetland Monitoring and Conservation' utilizing Sentinel-2 satellite imagery.",
  },
  {
    icon: "⭐",
    title: "Entrepreneurship BOOTCAMP",
    type: "Build, Launch & Grow",
    description:
      "Completed intensive entrepreneurship bootcamp on converting technical prototypes into scalable, viable commercial products.",
  },
];
