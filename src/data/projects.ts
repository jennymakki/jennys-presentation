export const projects = [
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
    title: "To Do App",
    description:
      "This is a simple and intuitive task manager built with HTML, CSS, and JavaScript. It allows users to add new tasks, mark them as complete, and delete them as needed. The interface is clean and responsive, making it easy to stay organized across devices.",
    imageUrl: "/ToDo.png",
    link: "https://github.com/jennymakki/To-do-applikation",
    liveDemo: "https://jennymakki.github.io/To-do-applikation/",
    slug: "To-do-app",
    shortDescription:
      "A clean and functional task management app made with vanilla JavaScript.",
    tags: ["JavaScript", "HTML", "CSS", "Productivity", "DOM Manipulation"],
    goal: "To build a lightweight, no-login to-do application that works on both desktop and mobile. It should support basic task functionality while remaining easy to use.",
    keyFeatures: [
      "Add, complete, and delete tasks",
      "Interactive UI with animations",
      "Local state-based task tracking",
      "Responsive mobile-first design",
    ],
    snapshots: [],
    roleAndLearning:
      "I built the entire app using vanilla JavaScript, focusing on DOM manipulation and event handling. This helped strengthen my understanding of basic frontend development and UI state logic without relying on frameworks.",
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
];
