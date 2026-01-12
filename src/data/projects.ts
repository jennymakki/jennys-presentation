export const projects = [
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
      "I built the project as a full-stack application using Next.js with server-side API routes and MongoDB for storage. I implemented Google authentication with NextAuth.js and focused on creating a seamless integration between recipes and grocery lists. This project strengthened my skills in full-stack development, user authentication, state management, and database design.",
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
      "This is an educational science website built with EJS templating on Node.js. It offers study content and helps students explore the scientific topics they are studying. The site features a clean, user-friendly design with responsive layouts for easy access across devices.",
    imageUrl: "/Vetenskapsrum.png",
    link: "https://github.com/jennymakki/Makkis-vetenskaps-rum",
    liveDemo: "https://makkis-vetenskapsrum.onrender.com/",
    slug: "Teachers-site",
    shortDescription:
      "A science website for students with structured subjects, built using EJS and Node.js.",
    tags: ["EJS", "Node.js", "Express", "Responsive", "Educational", "Figma"],
    goal: "This site was created to support classroom learning with a digital companion for students. The main goal was to offer categorized scientific content in a clean and user-friendly format using server-side rendering.",
    keyFeatures: [
      "Server-side rendering with EJS",
      "Categorized subject navigation",
      "Mobile-friendly responsive layout",
      "Clean and readable content display",
      "Ability to download presentations and other materials",
    ],
    snapshots: [
      {
        imageUrl: "/snapshots/SciStart.png",
        description:
          "This is the mobile view of the start page. I aimed to make it feel inviting and intuitive, using themed colors and icons for each subject to support learning and navigation.",
      },
      {
        imageUrl: "/snapshots/SciSubject.png",
        description:
          "When a user selects a subject, all units are displayed along with their corresponding lessons and study materials.",
      },
    ],
    roleAndLearning:
      "I was responsible for building the site structure and templating logic using EJS. I also wrote and styled the content pages, focusing on layout clarity and responsiveness. This project helped reinforce backend templating and server-side rendering concepts.",
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
];