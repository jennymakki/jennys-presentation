export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  liveDemo?: string;
  slug: string;
  shortDescription: string;
  tags: string[];
  goal: string;
  keyFeatures: string[];
  snapshots: { imageUrl: string; description: string }[];
  roleAndLearning: string;
  featured?: boolean;
  accent?: string;
  uiArchitecture?: string[];
};

export const projects: Project[] = [
  {
    title: "Project Manager System",
    description:
      "A full-stack project management application built with React, TypeScript, Spring Boot and JWT authentication. Users can manage boards, lists, tasks and comments through a modern drag-and-drop interface. The project follows a clean layered architecture and demonstrates full-stack development, API design and scalable application structure.",

    imageUrl: "/project-manager-system.png",

    link: "https://github.com/jennymakki/project-manager-system",
    liveDemo: "https://project-manager-system-tawny.vercel.app",

    slug: "project-manager-system",

    shortDescription:
      "A full-stack project management tool built with React and Spring Boot.",

    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "JWT",
      "REST API",
      "Full-Stack",
      "Drag & Drop",
    ],

    goal: "The goal of this project was to deepen my understanding of full-stack development by building a complete project management system with authentication, scalable architecture, reusable frontend patterns and a secure backend API.",

    keyFeatures: [
      "JWT authentication with Spring Security",
      "User registration and login",
      "Protected routes and secure API access",
      "Create, edit and delete project boards",
      "Task management with drag-and-drop functionality",
      "Comments on tasks",
      "Responsive design with light and dark mode",
      "Reusable UI components and custom design system",
      "Layered backend architecture using Controller, Service and Repository layers",
    ],

    uiArchitecture: [
      "Feature-based frontend architecture",
      "Reusable UI components and design tokens",
      "Custom React hooks for shared logic",
      "Context API for authentication and session management",
      "ProtectedRoute pattern for route security",
      "Scalable folder structure focused on maintainability",
    ],

    snapshots: [
      {
        imageUrl: "/project-manager-system.png",
        description:
          "Dashboard displaying user-specific project boards after authentication.",
      },
      {
        imageUrl: "/snapshots/ProjectManagerBoard.png",
        description:
          "Project board with drag-and-drop task management across multiple lists.",
      },
/*       {
        imageUrl: "/snapshots/TaskComments.png",
        description:
          "Task details with comment functionality and collaborative workflow support.",
      }, */
    ],

    roleAndLearning:
      "I designed and built the entire application independently, including both the React frontend and Spring Boot backend. Through this project I gained hands-on experience with JWT authentication, Spring Security, REST API design, layered architecture, drag-and-drop interactions, state management and full-stack application development. It also strengthened my understanding of clean code practices, testing principles and building scalable software systems.",

    featured: true,
    accent: "blue",
  },


  {
    title: "Grocery Helper",
    description:
      "Grocery Helper is a full-stack web application that helps users manage recipes and grocery lists. Users can create grocery lists manually or add ingredients directly from recipes. The app features secure authentication, recipe management, and seamless integration between recipes and grocery lists.",
    imageUrl: "/Groceryhelper.png",
    link: "https://github.com/jennymakki/grocery-helper-examensarbete",
    liveDemo: "https://grocery-helper-examensarbete.vercel.app",
    slug: "grocery-helper",
    shortDescription:
      "A full-stack recipe and grocery list manager with Google authentication.",
    tags: [
      "Next.js",
      "Cloudinary",
      "MongoDB",
      "NextAuth",
      "Full-Stack",
      "Responsive",
    ],
    goal: "The goal of this project was to create a personal productivity tool for managing recipes and grocery shopping. The focus was on integrating recipe creation with grocery list management, providing a smooth and flexible user experience while ensuring secure, user-specific data storage.",
    keyFeatures: [
      "Google OAuth authentication with NextAuth.js",
      "Create, edit, and delete recipes",
      "Manage grocery lists manually or via recipes",
      "Check/uncheck items while shopping",
      "Seamless recipe-to-grocery list integration",
      "Prevents duplicate items in grocery lists",
      "Responsive design for mobile and desktop",
    ],
    uiArchitecture: [
      "Built using a component-based architecture with reusable React components",
      "Separated UI concerns into components such as form handling, ingredient lists, and list items",
      "Implemented state-driven UI logic to manage dynamic interactions and user input",
      "Designed reusable patterns for handling forms, lists, and user interactions consistently across the app",
      "Focused on building reusable UI patterns rather than isolated features, aligning with design system principles",
    ],
    snapshots: [
      {
        imageUrl: "/snapshots/Recipecard.png",
        description:
          "Recipe card allowing users to upload images, link to the recipe, list ingredients, and generate a shopping list directly from the recipe.",
      },
      {
        imageUrl: "/snapshots/Grocerylistcard.png",
        description:
          "Grocery list interface where users can edit the list title, add or remove items, and automatically combine quantities for duplicate items with the same unit.",
      },
    ],
    roleAndLearning:
      "I built the project as a full-stack application using Next.js with server-side API routes and MongoDB for storage. I implemented Google authentication with NextAuth.js and focused on creating a seamless integration between recipes and grocery lists. This project strengthened my skills in building component-based UI, managing complex state, and designing consistent interaction patterns across the application.",
  },

  {
    title: "Kino Movie Theatre",
    description:
      "Kino is a movie browsing app built with Next.js. It lets users search for movies, view details like ratings and overviews, and navigate between pages using server-side rendering and dynamic routes. The design is responsive and user-friendly.",
    imageUrl: "/Kino.png",
    link: "https://github.com/alfredbrannare/kino-nextjs-app",
    liveDemo: "https://kino-nextjs-app.onrender.com",
    slug: "kino-movie-theatre",
    shortDescription:
      "A responsive movie browsing app built with Next.js and The Movie DB API",
    tags: ["Next.js", "MongoDB", "API", "Cloudinary", "Responsive", "Figma"],
    goal: "The goal of this project was to create a sleek, easy-to-use movie search and event booking app that pulls real-time data from an API. My team and I wanted to build a system that not only lets users browse and explore movies, but also allows for live event listings, screenings, and ticket bookings — all backed by a structured database. On the admin side, the goal was to implement a secure and intuitive section for theater staff to easily manage: Events, Members, Screenings, Bookings, Movie info. The focus was on creating a smooth user experience, a maintainable backend, and a scalable structure that could realistically support a small cinema's digital needs.",
    keyFeatures: [
      "Live movie search with API integration",
      "Admin panel for managing content",
      "Booking system with real-time validation",
      "Dynamic membership levels",
      "Editable profile with Cloudinary image upload",
      "Filter function for the movies",
      "Responsive design for mobile and desktop",
    ],
    snapshots: [
      {
        imageUrl: "/snapshots/KinoMember.png",
        description:
          "Membership page created using Tailwind. The profile picture can be changed and is stored in Cloudinary. The tickets the member buys is displayed and the amount of tickets will decide the membership level.",
      },
      {
        imageUrl: "/snapshots/KinoAdmin.png",
        description:
          "Admin section where the workers at the movie theatre can add offers and remove them. The offers are stored in MongoDB.",
      },
    ],
    roleAndLearning:
      "I worked as part of a five-person team to develop this project. I collaborated closely on maintaining UI consistency and participated actively in code reviews. Working effectively in a Git-based team environment, I used Cloudinary to ensure secure and scalable image uploads. I also handled conditional logic for features such as membership tiers, while promoting clear communication and shared documentation within the team.",
  },
  {
    title: "Wordle Game",
    description:
      "Wordle Game is a word-guessing game built with React. It lets users guess a hidden word within six tries, providing real-time feedback on the accuracy and position of each letter. The game includes an interactive keyboard, color-coded hints, and a high score list where players can post and track their best results.",
    imageUrl: "/Wordle.png",
    link: "https://github.com/jennymakki/Wordle-Game",
    liveDemo: "https://wordle-game-duu9.onrender.com/",
    slug: "wordle-game",
    shortDescription:
      "A Wordle clone with feedback, keyboard input, and a high score tracker.",
    tags: ["React", "JavaScript", "Game", "Interactive UI", "MongoDB"],
    goal: "The goal of this project was to recreate the popular Wordle game while adding features like high scores and keyboard interaction. The focus was on dynamic user interaction, clean logic for word comparison, and creating a fun, responsive UI.",
    keyFeatures: [
      "Word comparison logic with color-coded feedback",
      "Virtual keyboard with letter status",
      "High score tracking with player names",
      "Replay options",
      "Responsive design for all screen sizes",
    ],
    snapshots: [
      {
        imageUrl: "/snapshots/Wordle.png",
        description:
          "Start page where the player enters their name, selects word length, and optionally chooses to allow only unique letters.",
      },
      {
        imageUrl: "/snapshots/WordleGuess.png",
        description:
          "After winning a game, players can save their result to the high score list. Scores are stored in MongoDB.",
      },
      {
        imageUrl: "/snapshots/WordleScore.png",
        description:
          "The high score page displays all saved results along with player information and game details.",
      },
    ],
    roleAndLearning:
      "I implemented the full logic for comparing guesses with the solution word and color-coding results. I also built the interactive keyboard from scratch and designed the score tracking functionality. This project strengthened my understanding of React component state and conditional rendering.",
  },
{
  title: "Teacher's Site",
  description:
    "A modern educational science platform built with Next.js, React, TypeScript, and Tailwind CSS. The website provides structured learning materials in Biology, Chemistry, and Natural Science, allowing students to easily navigate courses and download lesson resources through a clean and responsive interface.",

  imageUrl: "/Vetenskapsrum.png",

  link: "https://github.com/jennymakki/Makkis-vetenskaps-rum",

  liveDemo: "https://makkis-vetenskaps-rum-1.vercel.app/",

  slug: "teachers-site",

  shortDescription:
    "A modern science learning platform with downloadable lesson materials, built using Next.js and TypeScript.",

  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Education",
    "Responsive Design",
    "Vercel",
    "Frontend",
  ],

  goal:
    "The goal of this project was to create a modern digital learning platform where students can easily access and download educational resources. The focus was on improving usability, responsiveness, and maintainability through reusable components and a scalable Next.js architecture.",

  keyFeatures: [
    "Built with Next.js App Router",
    "Responsive design for mobile and desktop",
    "Structured navigation between science subjects",
    "Downloadable lesson materials and presentations",
    "Reusable React components",
    "Modern UI built with Tailwind CSS",
    "SEO-friendly metadata configuration",
  ],

  snapshots: [
    {
      imageUrl: "/snapshots/SciStart.png",
      description:
        "The landing page introduces students to the platform with clear subject navigation, modern card-based layouts, and a science-inspired visual design.",
    },
    {
      imageUrl: "/snapshots/SciSubject.png",
      description:
        "Each subject page presents available courses and learning materials in a structured and easy-to-navigate format.",
    },
  ],

  roleAndLearning:
    "I designed and developed the entire application, including the UI, component architecture, routing structure, and content organization. During the project, I strengthened my skills in Next.js, TypeScript, Tailwind CSS, responsive design, component-based development, and modern deployment workflows using Vercel.",
},
  {
    title: "Author's Portfolio Website",
    description:
      "A modern portfolio website built for a client using React and Next.js. The site focuses on clean presentation, responsive layouts, and clear content structure to showcase professional services and projects.",

    imageUrl: "/anderseklund.png",

    link: "https://github.com/jennymakki/anderseklund",
    liveDemo: "https://anderseklund.vercel.app/",

    slug: "anders-eklund-portfolio",

    shortDescription:
      "A responsive portfolio website built with Next.js and React.",

    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive",
      "Portfolio",
    ],

    goal: "The goal of this project was to create a professional and responsive portfolio website with a strong visual structure and reusable UI patterns. The focus was on performance, clean design, and a smooth user experience across devices.",

    keyFeatures: [
      "Responsive design for desktop and mobile",
      "Reusable UI components",
      "Modern layout and typography",
      "Optimized image handling",
      "Clear project and content presentation",
      "Fast and accessible user experience",
    ],

    snapshots: [],

    roleAndLearning:
      "I designed and developed the project independently, focusing on reusable component architecture, responsive layouts, and clean UI structure. This project strengthened my skills in modern frontend development, component composition, and building production-ready portfolio experiences.",

    featured: true,
    accent: "blue",
  },

    {
    title: "UI System / Component Library",
    description:
      "A reusable UI system built with React and TypeScript, focusing on component architecture, variants, and state-driven design. It demonstrates how to build scalable and consistent user interfaces using a design system approach.",

    imageUrl: "/JennyUISystem.png",

    link: "https://github.com/jennymakki/jenny-makki-ui",
    liveDemo: "https://jenny-makki-ui.vercel.app/",

    slug: "ui-system",

    shortDescription:
      "A reusable UI system with components, variants, and state-driven UI.",

    tags: ["React", "TypeScript", "Design System", "UI", "Components"],

    goal: "The goal of this project was to explore how to build a scalable UI system using reusable components, consistent patterns, and state-driven interactions.",

    keyFeatures: [
      "Reusable Button, Input, Card, and Modal components",
      "Component variants for size, style, and states",
      "State-driven UI interactions",
      "Chat demo showing real-world component usage",
      "Interactive playground for testing UI behavior",
      "Consistent styling with Tailwind CSS",
    ],
    snapshots: [
      {
        imageUrl: "/JennyUISystem.png",
        description:
          "Overview of the UI system homepage and component structure.",
      },
      {
        imageUrl: "/snapshots/ButtonPlayground.png",
        description:
          "Interactive playground where button variants and states are tested.",
      },
      {
        imageUrl: "/snapshots/Chat.png",
        description:
          "Chat demo showing real-world usage of components in an app context.",
      },
    ],

    roleAndLearning:
      "I built this project independently to deepen my understanding of component architecture and design systems. It strengthened my ability to create reusable UI patterns, manage component state, and design scalable frontend structures.",
    featured: true,
    accent: "red",
  },

  {
    title: "To Do App – Frontend Version (v1)",
    description:
      "This is the first version of a To Do application, built as a frontend-focused project using HTML, CSS, and vanilla JavaScript. The goal was to create a clean and intuitive task manager while deepening my understanding of DOM manipulation, UI state, and event handling without relying on frameworks.",
    imageUrl: "/Todolist.png",
    link: "https://github.com/jennymakki/To-do-applikation",
    liveDemo: "https://jennymakki.github.io/To-do-applikation/",
    slug: "To-do-app",
    shortDescription:
      "Frontend-focused To Do application built with vanilla JavaScript (Version 1).",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Frontend",
      "DOM Manipulation",
      "Versioned Project",
    ],
    goal: "To build a lightweight, no-login to-do application that works on both desktop and mobile, while focusing on core frontend concepts such as DOM manipulation, event handling, and UI state management.",
    keyFeatures: [
      "Add, complete, and delete tasks",
      "Interactive UI with basic animations",
      "Client-side state management",
      "Responsive mobile-first design",
    ],
    snapshots: [],
    roleAndLearning:
      "I built the entire application independently. This project strengthened my understanding of frontend fundamentals and helped me identify limitations in a purely client-side solution, which later motivated me to rebuild the application as a fullstack version using Java and Spring Boot.",
  },
  {
    title: "To Do App – Fullstack Version (Java, v2)",
    description:
      "This is a fullstack rebuild of my earlier frontend-only To Do application. The project was rebuilt to add backend logic, persistence, and authentication, and to explore how a scalable application can be structured using Java and Spring Boot.",
    imageUrl: "/Todolist2.png",
    link: "https://github.com/fungover/exercise2025/pull/204",
    slug: "To-do-app-java",
    shortDescription:
      "Fullstack To Do application built with Java and Spring Boot as a rebuild of an earlier frontend version.",
    tags: [
      "Java",
      "Spring Boot",
      "REST API",
      "JPA",
      "Spring Security",
      "Backend",
      "Fullstack",
    ],
    goal: "To rebuild an existing frontend application as a fullstack solution by adding a backend, database persistence, authentication, and a clear application structure using Java and Spring Boot.",
    keyFeatures: [
      "REST API built with Spring Boot",
      "Persistent data storage using JPA and a relational database",
      "User authentication and authorization with Spring Security",
      "Layered architecture (controllers, services, repositories)",
      "Input validation and error handling",
      "Basic testing and development best practices",
    ],
    snapshots: [],
    roleAndLearning:
      "I rebuilt the application independently, using this project to deepen my understanding of backend development, RESTful APIs, authentication, and application architecture. The project helped me move from a purely frontend mindset to thinking in terms of data flow, security, and scalability.",
  },
  {
    title: "Hacker Escape Room",
    description:
      "Hacker Escape Room is a themed booking platform built with HTML, CSS, and vanilla JavaScript. It allows users to explore available escape rooms, filter them based on preferences, and book a room directly through the site. The interface is responsive and crafted to provide a smooth user experience across all devices.",
    imageUrl: "/ESC.png",
    link: "https://github.com/Jorlindstrom/HACKER-ESCAPEROOM",
    liveDemo: "https://jorlindstrom.github.io/HACKER-ESCAPEROOM/",
    slug: "ESC",
    shortDescription:
      "An escape room booking site built with HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Booking", "Figma"],
    goal: "The goal was to simulate a functioning escape room booking platform with styled elements and room data filtering.",
    keyFeatures: [
      "Booking simulation with form validation",
      "Filterable room categories",
      "Smooth navigation and scroll",
      "Mobile responsiveness",
    ],
    snapshots: [
      {
        imageUrl: "/snapshots/ESCFilter.png",
        description:
          "Users can filter challenges by rating, type, keyword, and tags to quickly find what they're looking for.",
      },
      {
        imageUrl: "/snapshots/ESCBook.png",
        description:
          "When users click 'Take Challenge Online' or 'Book this room,' a modal opens where they can proceed with the booking.",
      },
    ],
    roleAndLearning:
      "I contributed to building the filtering logic and helped style the UI according to the theme. I collaborated with my team and used GitHub to give and recieve feedback.",
  },
  {
    title: "Java Exercise – Object Manipulation",
    description:
      "A Java exercise focused on object-oriented programming concepts and structured logic. This task demonstrates how to design and manipulate objects in Java while following clean code principles.",
    imageUrl: "/Exercise1.png",
    link: "https://github.com/fungover/exercise2025/pull/40",
    liveDemo: "",
    slug: "java-exercise-object-manipulation",
    shortDescription:
      "An exercise showing object-oriented design and data manipulation in Java.",
    tags: ["Java", "OOP", "Backend", "Clean Code"],
    goal: "To practice object-oriented design and core Java principles by creating and manipulating structured data models.",
    keyFeatures: [
      "Object-oriented design and implementation",
      "Data structuring and manipulation",
      "Clean code practices",
      "Problem-solving with Java",
    ],
    snapshots: [],
    roleAndLearning:
      "I completed this exercise independently as part of structured Java practice. It strengthened my understanding of object-oriented programming, class design, and clean code structure.",
  },
  {
    title: "Java Exercise – Collections & Logic",
    description:
      "A Java exercise focused on working with collections, control flow, and logical problem solving. This task highlights how to handle data through arrays/lists and implement solutions using core Java constructs.",
    imageUrl: "/Exercise2.png",
    link: "https://github.com/fungover/exercise2025/pull/64",
    liveDemo: "",
    slug: "java-exercise-collections-logic",
    shortDescription:
      "A backend-focused Java exercise demonstrating collections and logic handling.",
    tags: ["Java", "Collections", "Backend", "Problem Solving"],
    goal: "To practice working with Java collections and logic statements while solving structured backend problems.",
    keyFeatures: [
      "Java collections handling",
      "Conditional logic and loops",
      "Problem solving in backend context",
      "Clear and maintainable structure",
    ],
    snapshots: [],
    roleAndLearning:
      "I completed this task independently as part of strengthening core Java skills. The exercise improved my ability to work with collections and logical flows in backend development.",
  },
  {
    title: "Java Exercise – Algorithms & Structures",
    description:
      "A Java exercise centered around implementing algorithms and data structure logic, with emphasis on efficient solutions and clean implementation. This task deals with problem-solving patterns common in backend projects.",
    imageUrl: "/Exercise3.png",
    link: "https://github.com/fungover/exercise2025/pull/91",
    liveDemo: "",
    slug: "java-exercise-algorithms-structures",
    shortDescription:
      "An exercise showcasing Java-based algorithm and data structure implementation.",
    tags: ["Java", "Algorithms", "Backend", "Problem Solving"],
    goal: "To practice implementing algorithmic logic and data structure handling in Java, focusing on clarity and maintainability.",
    keyFeatures: [
      "Algorithm implementation in Java",
      "Data structure handling",
      "Backend logic and problem solving",
      "Clean and readable code",
    ],
    snapshots: [],
    roleAndLearning:
      "This exercise was completed independently to deepen my understanding of algorithm design and data handling in Java. It improved my problem-solving skills and backend programming confidence.",
  },
  {
    title: "OICAN/LAYR – B2B Shopify Website (Internship)",
    description:
      "During my internship at OICAN/LAYR, I designed and developed a full B2B e-commerce website from scratch using Shopify. The project focused on creating a professional, scalable storefront tailored for business customers with emphasis on UX/UI and conversion-focused design.",
    imageUrl: "/oican.png",
    link: "",
    liveDemo: "https://layrprotection.com/",
    slug: "oican-b2b-shopify",
    shortDescription:
      "A B2B Shopify website designed and built during internship at OICAN.",
    tags: [
      "Shopify",
      "Liquid",
      "UX/UI",
      "B2B",
      "E-commerce",
      "Figma",
      "Frontend",
    ],
    goal: "The goal was to design and build a complete B2B e-commerce experience from the ground up, focusing on usability, clear product presentation, and a scalable Shopify structure suitable for business clients.",
    keyFeatures: [
      "Full Shopify store setup and customization",
      "B2B-focused UX/UI design",
      "Custom theme adjustments using Liquid",
      "Responsive and mobile-friendly layout",
      "Structured product and category pages",
      "Design work from Figma to implementation",
    ],
    snapshots: [],
    roleAndLearning:
      "During my internship at OICAN I was responsible for designing the entire B2B website from scratch and implementing it in Shopify. I worked with UX/UI design principles, structured the information architecture, and translated designs into a functional Shopify theme. This experience strengthened my skills in e-commerce development, client-focused design, and real-world project delivery.",
  },
  
  {
  title: "Makki Studio – Företagswebbplats",
  description:
    "En modern företagswebbplats för Makki Studio, designad och utvecklad för att presentera tjänster, projekt och priser på ett tydligt och professionellt sätt. Webbplatsen kombinerar webbdesign, UX och modern webbutveckling med fokus på prestanda, SEO och tillgänglighet.",

  imageUrl: "/makki-studio.png",

  link: "",
  liveDemo: "https://www.makkistudio.se",

  slug: "makki-studio",

  shortDescription:
    "Makki Studios egen företagswebbplats – designad och utvecklad med Next.js, TypeScript och Tailwind CSS.",

  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "UX/UI",
    "SEO",
    "Accessibility",
    "Webbdesign",
    "Webbutveckling",
  ],

  goal:
    "Målet var att skapa en professionell företagswebbplats för Makki Studio som tydligt kommunicerar tjänster, priser och tidigare projekt, samtidigt som webbplatsen är snabb, tillgänglig och lätt för både människor, sökmotorer och AI-agenter att förstå.",

  keyFeatures: [
    "Responsiv design för mobil, surfplatta och desktop",
    "Tydlig presentation av tjänster och priser",
    "Projektportfolio med detaljerade case",
    "SEO-optimerad metadata och canonical URLs",
    "Schema.org-strukturerad data",
    "Tillgänglighetsanpassad HTML och formulär",
    "AI-agent-vänlig struktur och navigation",
    "Kontaktformulär med spam-skydd",
    "Next.js App Router",
    "Komponentbaserad frontend",
  ],

  uiArchitecture: [
    "Återanvändbara React-komponenter",
    "Komponentbaserat designsystem",
    "Semantisk HTML-struktur",
    "Responsiva Tailwind CSS-layouts",
    "Återanvändbara CTA-, Navbar- och Footer-komponenter",
    "Strukturerad metadata och Schema.org",
  ],

  snapshots: [
    {
      imageUrl: "/snapshots/makki-home.png",
      description:
        "Makki Studios startsida med tydlig presentation av webbdesign, webbutveckling, projekt och tjänster.",
    },
    {
      imageUrl: "/snapshots/makki-services.png",
      description:
        "Tjänste- och prissida med tydliga webbpaket för företag.",
    },
    {
      imageUrl: "/snapshots/makki-contact.png",
      description:
        "Kontaktformulär där potentiella kunder enkelt kan beskriva sitt projekt.",
    },
  ],

  roleAndLearning:
    "Jag designade och utvecklade hela webbplatsen själv, från informationsarkitektur och visuell identitet till frontend, SEO, strukturerad data och tillgänglighet. Projektet har gett mig möjlighet att kombinera mina kunskaper inom UX/UI, React, Next.js och TypeScript med ett verkligt affärsmål: att göra Makki Studio tydligt för både potentiella kunder och moderna sök- och AI-system.",

  featured: true,
  accent: "green",
},

  {
    title: "Personal Portfolio Website",
    description:
      "A modern personal portfolio website built with React, Next.js, and Tailwind CSS. The project focuses on performance, responsive design, and clear presentation of projects and experience through a clean and structured UI.",
    imageUrl: "/portfolio.png",
    link: "https://github.com/jennymakki/jennys-presentation",
    liveDemo: "",
    slug: "personal-portfolio",
    shortDescription:
      "A responsive personal portfolio built with React, Next.js, and Tailwind CSS.",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Portfolio",
      "Responsive",
      "Frontend",
    ],
    goal: "The goal of this project was to design and develop a personal portfolio that showcases projects, experience, and skills in a structured and visually appealing way, while focusing on performance and reusable components.",
    keyFeatures: [
      "Responsive design for all screen sizes",
      "Component-based architecture",
      "Project filtering and dynamic rendering",
      "Optimized performance with Next.js",
      "Clean and modern UI with Tailwind CSS",
    ],
    snapshots: [],
    roleAndLearning:
      "I designed and developed this portfolio independently. The project strengthened my skills in Next.js, component structuring, and UI design, as well as how to present work in a clear and professional way.",
  },
];
