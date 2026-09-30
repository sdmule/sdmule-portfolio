export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/sdmule" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sdmule" },
];

export const profile = {
  name: "Saurabh Mule",
  role: ".NET Full-Stack Developer",
  summary:
    "I build scalable web applications and RESTful APIs with .NET, C#, and React.",
  image: "https://avatars.githubusercontent.com/u/211701787?v=4",
};

export const contactDetails = {
  email: "mulesaurabh45@gmail.com",
  phone: "+91-7666727302",
};
export const resumeFile = "/Saurabh%20Mule.pdf";

export const resumeSummary =
  "Senior Software (.NET) Developer with around 4 years of experience designing, developing, and deploying web applications and RESTful APIs using .NET Core, ASP.NET MVC, C#, ReactJS, and SQL Server. Experienced with Azure services, microservices architecture, Entity Framework, and CI/CD pipelines, with a focus on performance, secure systems, SOLID, and Clean Architecture.";

export const experience = [
  {
    company: "ZIGRAM Data Technologies Pvt. Ltd.",
    title: "Senior Software Developer",
    period: "Sep 2025 - Apr 2026",
    description:
      "Designed and maintained scalable .NET Core applications and REST APIs, developed React interfaces, and contributed to Azure-integrated services.",
    highlights: [
      "Built REST APIs with authentication, logging, exception handling, and versioning.",
      "Improved application performance and refactored legacy .NET code.",
      "Led sprint planning and code reviews, coordinating delivery with developers, QA, and business stakeholders.",
    ],
    technologies: [
      ".NET Core",
      "ASP.NET Core Web API",
      "C#",
      "React",
      "JavaScript",
      "Azure",
    ],
  },
  {
    company: "Rising Phoenix Infotech Solutions",
    title: "Software Engineer",
    period: "Nov 2023 - Sep 2025",
    description:
      "Developed and maintained web applications and enterprise solutions through the full software development lifecycle.",
    highlights: [
      "Built applications with ASP.NET MVC, .NET Core, SQL Server, jQuery, and JavaScript.",
      "Resolved technical issues and improved application performance and stability.",
      "Worked with cross-functional teams to translate requirements into user-focused features.",
    ],
    technologies: [
      "ASP.NET MVC",
      ".NET Core",
      "SQL Server",
      "jQuery",
      "JavaScript",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "Assistant System Engineer",
    period: "Jul 2022 - Nov 2023",
    description:
      "Worked on product, customer, and order management capabilities across backend APIs, MVC applications, and data access.",
    highlights: [
      "Designed, developed, and consumed REST APIs for product, customer, and order workflows.",
      "Built MVC controllers, models, and views for responsive web applications.",
      "Optimized queries, stored procedures, and indexes, and integrated backend services with frontend components and third-party APIs.",
    ],
    technologies: [
      "ASP.NET MVC",
      "C#",
      "SQL Server",
      "REST APIs",
      "Stored Procedures",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend & UI",
    skills: [
      "ReactJS",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material UI",
      "jQuery",
    ],
  },
  {
    title: "Backend",
    skills: [
      "C#",
      ".NET Core",
      "ASP.NET Core Web API",
      "ASP.NET MVC",
      "LINQ",
      "JWT Authentication",
      "Clean Architecture",
      "Microservices",
    ],
  },
  {
    title: "Data & Storage",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Entity Framework Core",
      "Dapper",
      "ADO.NET",
      "Stored Procedures",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest", "NUnit", "xUnit", "Moq"],
  },
  {
    title: "Cloud & Delivery",
    skills: [
      "Microsoft Azure",
      "Docker",
      "Jenkins",
      "Azure DevOps CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Tools & Collaboration",
    skills: [
      "Git",
      "GitHub",
      "Swagger",
      "Postman",
      "Visual Studio",
      "VS Code",
      "JIRA",
      "Agile",
    ],
  },
  {
    title: "AI-assisted development",
    skills: [
      "ChatGPT",
      "GitHub Copilot",
      "Claude Code",
      "AI-assisted coding workflows",
    ],
  },
];

export const hobbies = [
  { title: "Reading books", detail: "A little time with a good book." },
  { title: "Running", detail: "Keeping a steady pace, on and off screen." },
  {
    title: "Developing scalable applications",
    detail: "Exploring how systems grow and stay maintainable.",
  },
  {
    title: "Listening to music",
    detail: "A soundtrack for focused work and downtime.",
  },
];

export const education = [
  {
    qualification: "Bachelor of Technology (B. Tech)",
    institution: "Solapur University, Maharashtra",
    period: "Jul 2018 - Aug 2022",
  },
];

const noCaseStudy = {
  problem: "",
  solution: "",
  architecture: "",
  technologies: [],
  keyFeatures: [],
  technicalDecisions: [],
  challenges: [],
  outcome: "",
};

export const projects = [
  {
    name: "Mini Order Management",
    category: "Full-stack application",
    description:
      "Order-management platform with a .NET 10 REST API and a React interface for customer and order workflows.",
    technologies: [
      ".NET 10",
      "ASP.NET Core Web API",
      "React",
      "EF Core 10",
      "SQL Server",
      "MediatR",
      "FluentValidation",
    ],
    features: [
      "Customer and order read workflows",
      "CQRS with MediatR",
      "Layered Clean Architecture",
    ],
    githubUrl: "https://github.com/sdmule/MiniOrderManagement",
    frontendUrl: "https://github.com/sdmule/MiniOrderManagementUI",
    liveUrl: "",
    caseStudy: {
      ...noCaseStudy,
      solution:
        "A C# and .NET 10 REST API paired with a React client for customer and order management.",
      architecture:
        "Clean Architecture with API, Application, Domain, Infrastructure, and test projects; the README also documents DDD, CQRS, SOLID, Repository Pattern, and Unit of Work.",
      technologies: [
        ".NET 10",
        "ASP.NET Core Web API",
        "Entity Framework Core 10",
        "SQL Server",
        "MediatR",
        "FluentValidation",
        "Swagger / OpenAPI",
        "React",
      ],
      keyFeatures: [
        "Customer and order read endpoints",
        "Customer and order forms and tables in the React UI",
        "Request validation with FluentValidation",
      ],
      technicalDecisions: [
        "Separated responsibilities into Clean Architecture layers",
        "Used CQRS with MediatR",
      ],
    },
  },
  {
    name: "Profile Builder",
    category: "Full-stack application",
    description:
      "A profile data-management platform for politically exposed persons, supporting compliance and risk-assessment workflows.",
    technologies: [
      "ReactJS",
      "ASP.NET Core Web API",
      "C#",
      "PostgreSQL",
      "EF Core",
      "Dapper",
      "Clean Architecture",
      "JWT",
    ],
    features: [
      "Create and manage structured profiles",
      "Support compliance and risk-assessment workflows",
    ],
    githubUrl: "",
    frontendUrl: "",
    liveUrl: "",
    caseStudy: {
      ...noCaseStudy,
      solution:
        "A full-stack data-management platform for creating and maintaining structured profiles of globally identified politically exposed persons.",
      architecture:
        "The resume identifies a React client and ASP.NET Core Web API using Clean Architecture.",
      technologies: [
        "ReactJS",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "C#",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "PostgreSQL",
        "Dapper",
        "LINQ",
        "JWT Authentication",
        "Swagger",
        "Postman",
      ],
      keyFeatures: [
        "Create and manage structured PEP profiles",
        "Support compliance and risk-assessment work",
      ],
    },
  },
  {
    name: "ShopSphere",
    category: "E-commerce platform",
    description:
      "An e-commerce platform focused on product, inventory, and order management, built with ASP.NET Core MVC.",
    technologies: [
      "C#",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "LINQ",
      "Dependency Injection",
    ],
    features: ["Product management", "Inventory management", "Order workflows"],
    githubUrl: "",
    frontendUrl: "",
    liveUrl: "",
    caseStudy: {
      ...noCaseStudy,
      solution:
        "An ASP.NET Core MVC e-commerce application using Entity Framework Core and SQL Server.",
      technologies: [
        "C#",
        "ASP.NET Core",
        "ASP.NET Core MVC",
        "Entity Framework Core",
        "LINQ",
        "SQL Server",
        "Dependency Injection",
        "Swagger",
        "Git",
        "Agile",
      ],
      keyFeatures: ["Product, inventory, and order management"],
    },
  },
  {
    name: "Avis Budget Group",
    category: "Enterprise platform",
    description:
      "Backend work on an ASP.NET MVC car-rental platform supporting booking, customer, and vehicle-rental workflows across global regions.",
    technologies: [
      "C#",
      "ASP.NET MVC",
      "SQL Server",
      "ADO.NET",
      "REST APIs",
      "Postman",
    ],
    features: [
      "Booking-management modules",
      "Customer operations",
      "Vehicle-rental workflows",
    ],
    githubUrl: "",
    frontendUrl: "",
    liveUrl: "",
    caseStudy: {
      ...noCaseStudy,
      solution:
        "Backend modules for an ASP.NET MVC car-rental platform supporting booking, customer, and vehicle-rental workflows.",
      technologies: [
        "C#",
        "ASP.NET",
        "ASP.NET MVC",
        "SQL Server",
        "ADO.NET",
        "RESTful APIs",
        "Visual Studio",
        "Postman",
        "Git",
      ],
      keyFeatures: [
        "Booking management",
        "Customer operations",
        "Vehicle-rental workflows",
      ],
    },
  },
  {
    name: "DapperDemo",
    category: "ASP.NET Core MVC",
    description:
      "A company and employee management app that demonstrates repository-based data access with Dapper, Dapper.Contrib, EF Core, and stored procedures.",
    technologies: [
      ".NET 10",
      "ASP.NET Core MVC",
      "Dapper",
      "Dapper.Contrib",
      "EF Core",
      "SQL Server",
    ],
    features: [
      "Company and employee CRUD",
      "Repository interfaces",
      "Stored-procedure data access",
    ],
    githubUrl: "https://github.com/sdmule/DapperDemo",
    frontendUrl: "",
    liveUrl: "",
    caseStudy: {
      ...noCaseStudy,
      solution:
        "A company and employee management app with MVC screens and multiple repository implementations.",
      architecture:
        "Repository interfaces with implementations using Dapper, Dapper.Contrib, EF Core, and stored procedures.",
      technologies: [
        ".NET 10",
        "ASP.NET Core MVC",
        "Dapper",
        "Dapper.Contrib",
        "Entity Framework Core",
        "SQL Server",
      ],
      keyFeatures: [
        "Company and employee create, read, update, and delete flows",
        "Stored-procedure repository",
        "Alternate Dapper and EF Core access paths",
      ],
    },
  },
  {
    name: "IdentityManager",
    category: "Identity & access management",
    description:
      "An ASP.NET Core Identity application covering account flows, role and claim administration, and policy-based access checks.",
    technologies: [
      "C#",
      "ASP.NET Core MVC",
      "ASP.NET Core Identity",
      "Entity Framework Core",
      "SQL Server",
      "Claims-based authorization",
    ],
    features: [
      "Account recovery and two-factor flows",
      "User and role management",
      "Claims and policy authorization",
    ],
    githubUrl: "https://github.com/sdmule/IdentityManager",
    frontendUrl: "",
    liveUrl: "",
    caseStudy: {
      ...noCaseStudy,
      solution:
        "An ASP.NET Core MVC application using Identity for account, user, and role management.",
      architecture:
        "ASP.NET Core MVC with Identity-backed user data, role controllers, claim handlers, and policy-based access checks.",
      technologies: [
        "C#",
        "ASP.NET Core MVC",
        "ASP.NET Core Identity",
        "Entity Framework Core",
        "Bootstrap",
      ],
      keyFeatures: [
        "Forgot-password and reset-password flows",
        "Authenticator setup and verification",
        "User and role management",
        "Custom claim and policy-based authorization",
      ],
    },
  },
];
