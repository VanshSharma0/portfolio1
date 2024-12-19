import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    cpp,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets/index";

  // import { AiOutlineShoppingCart } from "../sanity/node_modules/react-icons/ai"
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
    {
      title: "DevOps Engineer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C ++",
      icon: cpp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Web Developer",
      company_name: "Independent Consultant",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "Nov 2024 - Present",
      points: [
        "Developed custom web applications for clients, utilizing modern technologies like React, Node.js, and TypeScript",
        "Collaborated with clients to understand project requirements, provide recommendations, and deliver high-quality software",
        "Implemented efficient, maintainable code and performed testing to ensure optimal performance and user experience",
      ],
    },
    
    {
      title: "Mern Developer",
      company_name: "The Shubham Group",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "Oct 2024 - Nov 2024",
      points: [
        "Lead the optimization and enhancement of 7+ real estate websites, focusing on both visual appeal and technical performance.",
        "Implement responsive design principles and modern web development practices to ensure seamless user experience across all devices.",
        "Drive improvements in website loading speed and performance metrics through technical optimization.",
        "Develop and maintain custom features and functionalities tailored to real estate industry requirements."
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Encryptix",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "Jun 2024 - Jul 2024",
      points: [
        "Developed a Human resource management system.A software application designed to help manage human resources in an organization. It is used by HR managers to manage employee data, track employee performance and other personal information etc.",
        " I have developed an online platform dedicated to Henna booking services. This platform facilitates appointments for Henna application, catering primarily to events such as weddings, receptions, and other special occasions.",
      ],
    },
    {
      title: "Java Backend Intern",
      company_name: "CodSoft",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "Apr 2024 - June 2024",
      points: [
        "Developed a student course registration database, capable of storing detailed course information including code, title, and description.",
        "Created a command-line application for solving mathematical problems. The program prompts users to input valuesfor specific mathematical formulas and generates accurate solutions based on the provided data.",
        "Developed a project that acts as a Multiple Choice answer game with 4 answers and also implemented a timer of 10 seconds, within which you have to answer the question, or else it skips to the next one.",
      ],
    },
    {
      title: "Social Media Marketing Manager",
      company_name: "Sociara",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "January 2023 - April 2024",
      points: [
        "Spearhead social media strategy and content management for 3+ lifestyle and wellness businesses including prominent gyms, salons, and beauty parlors.",
        "Create and curate engaging visual content that aligns with each brand's unique identity and target audience.",
        "Develop and execute comprehensive social media campaigns to boost brand awareness and client engagement.",
        "Analyze social media performance metrics to identify trends and opportunities for optimization.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI-Headshot Generator",
      description:
        " Developed an AI-driven app, orchestrating the training of AI data models for transforming sample images into professional headshots. Integrated secure authentication, with a user-friendly and data-protected experience.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Leap AI",
          color: "green-text-gradient",
        },
        {
          name: "vercel",
          color: "pink-text-gradient",
        },
        {
          name: "supabase",
          color: "black-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://ai-headshots-gen.vercel.app/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "green-text-gradient",
        },
        {
          name: "shadcn-ui",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://jobit-one.vercel.app/",
    },
    {
      name: "Model Earth",
      description:
        "Model Earth is a platform integrates with major e-commerce and shipping systems, aiming to simplify user experience while maximizing positive environmental outcomes.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://model.earth/community/",
    },
    
    // {
    //   name: "Open Foot Print",
    //   description:
    //     "The Open Footprint Project by Model Earth focuses on creating Environmental Product Declarations (EPDs) and footprint profiles for communities, companies, products, and individuals. They provide tools for lifecycle assessment and environmental impact analysis, helping communities and businesses make data-driven decisions to reduce their ecological footprint.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "python",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/ModelEarth/OpenFootprint/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };