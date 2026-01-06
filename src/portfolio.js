import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

const illustration = {
  animated: true,
};

const greeting = {
  username: "Jharana Sapkota",
  title: "Hi all, I'm Jharana",
  subTitle:
    "A passionate Software Engineer with proven experience building production systems serving 10,000+ users. Specialized in full-stack development, cloud architecture, and scalable application design. Demonstrated success delivering cross-platform mobile apps, web applications, and desktop tools that reduce operational time by 20-40%.",
  resumeLink:
    "https://drive.google.com/file/d/1n_qiO0PrU4h20vcPA-bObYhEeZmPBAjZ/view?usp=drive_link",
  displayGreeting: true,
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/jhsap/",
  gmail: "jharanasapkota09@gmail.com",
  googleScholar: "https://scholar.google.com/citations?hl=en&user=5AVBZ58AAAAJ",
  github: "https://github.com/Jharana1999",
  facebook: "https://www.facebook.com/profile.php?id=61559924492930#",
  instagram: "https://www.instagram.com/ericaitisofc/",
  display: true,
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full Stack Software Engineer building scalable production systems, APIs, and cross-platform applications",
  skills: [
    emoji(
      "Full Stack Development – Building interactive, high-performance web & mobile applications."
    ),
    emoji(
      "Cloud Integrations – Developing cloud-native solutions and deploying applications on AWS and Firebase."
    ),
    emoji(
      "API Development & System Integration – Designing robust REST APIs and backend services."
    ),
  ],
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Rest APIs",
      fontAwesomeClassname: "fas fa-server",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fas fa-chart-bar",
    },
    {
      skillName: "D3.js",
      fontAwesomeClassname: "fas fa-chart-line",
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux",
    },

    {
      skillName: "Electron",
      fontAwesomeClassname: "fas fa-desktop",
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt",
    },
  ],
  display: true,
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Virginia Tech",
      logo: require("./assets/images/vtl.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Jan 2024 - Dec 2025",
      desc: "Graduate Research Assistant",
      descBullets: [
        "Thesis: Categorizing and Comparing Student's interactions in eTextbook",
        "Major Coursework: Software Engineering, Machine Learning, Big Data Engineering, Information Visualization",
      ],
    },
    {
      schoolName: "Pokhara University",
      logo: require("./assets/images/pkr.png"),
      subHeader: "Bachelor of Computer Information System(IT)",
      duration: "Sept 2017 - Aug 2022",
      desc: "Dean's List and Valedictorian",
      descBullets: [
        "Capstone: Ikuzo- The Ride Sharing Application",
        "Major Coursework: Data Structures and Algorithms, Advanced Java, Operating Systems, Data Analysis and Modeling, Statistics",
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%",
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false,
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer (Graduate Research Assistant)",
      company: "Virginia Tech",
      companylogo: require("./assets/images/vtl.png"),
      date: "Jan 2024 – Present",
      desc: "",
      descBullets: [
        "Built and deployed a desktop application using Electron and React for drone flight planning and mission visualization, used by 50+ pilots and reducing planning time by 40%.",
        "Extending the platform into a web-based application using FastAPI and JavaScript, adding interactive map-based interfaces and integrating a cloud-hosted risk-assessment service for standardized result generation.",
        "Designed and implemented REST APIs, backed by MySQL and MongoDB, optimizing request handling and database queries to reduce API response times by 30%.",
        "Wrote unit and integration tests for application modules and participated in peer code reviews to identify and fix defects early.",
        "Mentored 350+ undergraduate students in Data Structures and Algorithms, supporting problem solving and algorithmic thinking in Python and Java.",
      ],
    },
    {
      role: "Mobile Application Developer",
      company: "Skybase Innovations",
      companylogo: require("./assets/images/sky.png"),
      date: "Nov 2021 – Jun 2023",
      desc: "",
      descBullets: [
        "Developed and launched 5+ cross-platform mobile applications using Flutter and Java, supporting 10,000+ active users.",
        "Integrated REST APIs, OAuth authentication, and payment gateways (Khalti, eSewa), processing $50,000+ in monthly transactions.",
        "Implemented real-time features including push notifications, GPS tracking, and live messaging, increasing user engagement by 30%.",
        "Collaborated in Agile teams with two-week sprints, contributing to code reviews, testing, and maintaining 90% code coverage.",
        "Optimized app performance and user experience through efficient state management, reducing crash rates by 15% and improving app store ratings.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Skybase Innovations",
      companylogo: require("./assets/images/sky.png"),
      date: "Jan 2021 – Nov 2021",
      desc: "",
      descBullets: [
        "Built 8+ responsive web applications using React.js, JavaScript, HTML5, and CSS3 with a focus on usability and performance.",
        "Collaborated with UI/UX designers to implement pixel-perfect interfaces while applying SEO best practices and accessibility standards (WCAG 2.1).",
        "Implemented efficient state management solutions and optimized component rendering, improving page load times by 15%.",
        "Ensured cross-browser compatibility and responsive design across multiple devices, achieving consistent user experience on desktop, tablet, and mobile platforms.",
      ],
    },
  ],
};

const bigProjects = {
  title: "Projects",
  sections: [
    {
      sectionTitle: "",
      projects: [
        {
          image: require("./assets/images/quadra.png"),
          projectName: "QUADRA",
          projectDesc:
            "Production drone planning platform (Electron, React, FastAPI, MySQL, MongoDB) for 50+ pilots, reducing planning time by 40% through geospatial visualization and automated risk scoring.",
          footerLink: [
            {
              name: "Web Version (In Progress)",
              url: "https://quadra.goldensectionllc.com/",
            },
          ],
        },
        {
          image: require("./assets/images/bhok.webp"),
          projectName: "Bhoklayo",
          projectDesc:
            "Food delivery platform (Flutter, Node.js) serving 1,000+ users with real-time order tracking and payment processing. Optimized backend reducing order processing time by 30%.",
          footerLink: [
            {
              name: "View on Google Play",
              url: "https://play.google.com/store/apps/details?id=com.bhoklayo.android",
            },
          ],
        },
        {
          image: require("./assets/images/aayo.png"),
          projectName: "Aayo - Ride Sharing App",
          projectDesc:
            "Ride-sharing platform (Java) with real-time GPS tracking and dynamic fare calculation, completing 2,000+ rides with 85% ride acceptance rate.",
          footerLink: [
            {
              name: "View on App Store",
              url: "https://apps.apple.com/np/app/aayo-user/id1630423639?platform=iphone",
            },
          ],
        },
        {
          image: require("./assets/images/ghar.png"),
          projectName: "Ghardurbar",
          projectDesc:
            "Web platform for home inspections, managed by engineers, architects, and realtors with appointment scheduling and document management.",
          footerLink: [
            {
              name: "Visit Website",
              url: "https://ghardurbar.com",
            },
          ],
        },
        {
          image: require("./assets/images/llm.jpg"),
          projectName: "LLM Memorization and Privacy Evaluation (LLaMA-3)",
          projectDesc:
            "Evaluated memorization and privacy leakage in the LLaMA-3 8B base model with token-level and semantic similarity metrics. Built a scalable Python evaluation pipeline with batch inference and checkpointing.",
          footerLink: [
            {
              name: "View on Google Colab",
              url: "https://colab.research.google.com/drive/1PCtM87qYbLR9Inj2S2ZdGtaddII51QIk?usp=sharing",
            },
          ],
        },
        {
          image: require("./assets/images/see.webp"),
          projectName: "Help for SEE",
          projectDesc:
            "Exam preparation mobile app (Flutter) with study materials and mock tests for entrance exams, helping students prepare effectively.",
          footerLink: [
            {
              name: "View on Google Play",
              url: "https://play.google.com/store/apps/details?id=com.helpforsee.app",
            },
          ],
        },
        {
          image: require("./assets/images/pch.png"),
          projectName: "Paschimanchal Community Hospital",
          projectDesc:
            "Hospital website (Bootstrap, PHP) with online appointment booking feature, improving patient access and reducing administrative workload.",
          footerLink: [
            {
              name: "Visit Website",
              url: "https://pch.com.np/",
            },
          ],
        },
        {
          image: require("./assets/images/floor.png"),
          projectName: "Floor Plan Visualization with Interactive Chart",
          projectDesc:
            "Interactive visualization (D3.js, JavaScript) overlaying sensor data on floor plans, enabling real-time data insights with predicted temperature and alerts for abnormal attributes.",
          footerLink: [
            {
              name: "View on Observable",
              url: "https://observablehq.com/d/d4d6b33fe1a43f68",
            },
          ],
        },
        {
          image: require("./assets/images/mds.jpeg"),
          projectName: "Rolling CNN+LSTM Model for Air Pollution Forecasting",
          projectDesc:
            "ML model (Python, PyTorch) for real-time air pollution forecasting, implementing data preprocessing and sequential modeling with CNN+LSTM architecture.",
          footerLink: [
            {
              name: "View on Google Colab",
              url: "https://colab.research.google.com/drive/128IYIpcH3tYtzRxzB8m4e-Faa38IA-Rg?authuser=1",
            },
          ],
        },
        {
          image: require("./assets/images/crop.png"),
          projectName: "Crop Recommendation Dashboard",
          projectDesc:
            "Intelligent crop recommendation system (Python, Scikit-learn, KNN) providing data-driven agricultural insights for optimal crop selection.",
          footerLink: [
            {
              name: "View on GitHub",
              url: "https://github.com/Jharana1999/crop-recommendation-dashboard",
            },
          ],
        },
        {
          image: require("./assets/images/cnn.jpeg"),
          projectName: "Gamified Visualization of Multidimensional Scaling",
          projectDesc:
            "Interactive MDS visualization tool (D3.js, JavaScript) to help users explore high-dimensional data through gamified interactions and intuitive interfaces.",
          footerLink: [
            {
              name: "View on Observable",
              url: "https://observablehq.com/d/9f216ce4f75a6528",
            },
          ],
        },
        {
          image: require("./assets/images/credit.jpeg"),
          projectName: "Credit Card Fraud Detection",
          projectDesc:
            "Fraud detection ML model (Python, Scikit-learn) using SMOTE and SHAP on imbalanced datasets, achieving high accuracy in identifying fraudulent transactions.",
          footerLink: [
            {
              name: "View on GitHub",
              url: "https://github.com/Jharana1999/CreditCardFraud",
            },
          ],
        },
      ],
    },
  ],
  display: true,
};

const achievementSection = {
  title: emoji("Certifications"),
  achievementsCards: [
    {
      title: "Data Analysis with Python",
      subtitle: "Coursera",
      image: require("./assets/images/c1.png"),
      footerLink: [],
    },
    {
      title: "Data Visualization",
      subtitle: "Coursera",
      image: require("./assets/images/c2.png"),
      footerLink: [],
    },

    {
      title: "Machine Learning with Python",
      subtitle: "Coursera",
      image: require("./assets/images/c3.png"),
      footerLink: [],
    },
    {
      title: "Unsupervised Learning: Recommenders, Reinforcement Learning",
      subtitle: "Coursera",
      image: require("./assets/images/c4.jpg"),
      footerLink: [],
    },
    {
      title: "Supervised Learning: Regression and Classification",
      subtitle: "Coursera",
      image: require("./assets/images/c5.jpg"),
      footerLink: [],
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle: "Coursera",
      image: require("./assets/images/c6.jpg"),
      footerLink: [],
    },
    {
      title: "AI Bootcamp",
      subtitle: "Inc Academy",
      image: require("./assets/images/c7.jpg"),
      footerLink: [],
    },
    {
      title: "Android App Development",
      subtitle: "Skybase Innovations",
      image: require("./assets/images/c8.jpg"),
      footerLink: [],
    },
  ],
  display: true,
};

const publicationsSection = {
  title: "Publications",
  publications: [
    {
      title:
        "Multimodal Data Fusion and Deep Learning for Predicting Air Pollution at Construction Sites",
      authors: "Ruichuan Zhang, Jharana Sapkota, Jenna Krall",
      journal: "Journal of Computing in Civil Engineering",
      status: "Published",
      footerLink: [],
    },
    {
      title:
        "Multi-Head Temporal Attention Deep Learning for Multivariate Indoor Air Quality Forecasting",
      authors: "Ruichuan Zhang, Jharana Sapkota",
      journal: "Journal of Computing in Civil Engineering",
      status: "Accepted",
      footerLink: [],
    },
    {
      title: "Categorizing and Comparing Students' Interactions in eTextbooks",
      authors:
        "Jharana Sapkota, Mohammed Farghally, Mostafa Mohammed, Cliff Shaffer",
      journal: "Frontiers in Education Conference 2025",
      status: "Accepted",
      footerLink: [],
    },
    {
      title: "Examining Geospatial Differences in the Gender Wage Gap in STEM",
      authors:
        "Akshay Bansal, Cam Kormyolo, Mahdis Tajdari, Jharana Sapkota, Mohammed Farghally",
      journal: "Frontiers in Education Conference 2025",
      status: "Accepted",
      footerLink: [],
    },
  ],
  display: true,
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "5406050749",
  email_address: "jharanasapkota09@gmail.com",
  display: true,
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  publicationsSection,
  contactInfo,
  isHireable,
  resumeSection,
};
