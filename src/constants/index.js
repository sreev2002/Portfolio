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
    redux,
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
    SRM,
    tworks
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Animator",
      icon: mobile,
    },
    {
      title: "AI Enthusiast",
      icon: backend,
    },
    {
      title: "3D Experience Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "VFX Intern",
      company_name: "CCE",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Created dynamic and vibrant trailers that significantly increased audience engagement and video interactions.",
        "Developed virtual sets for live streams using Unreal Engine, enhancing production quality and visual appeal.",
        "Produced theatrical videos using Blender, delivering captivating and immersive content.",
        "Utilized advanced 3D modeling, texturing, and animation techniques to elevate visual storytelling.",
      ],
    },
    {
      title: "Research Intern",
      company_name: "SRM Insititute of Science and Technology",
      icon: SRM,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Dec 2023",
      points: [
        "Contributed to the design and development of a user-adaptive sensory integration room for children with Autism Spectrum Disorder.",
        "Applied IoT and machine learning techniques to create an intelligent, responsive environment.",
        "Developed interactive dashboards using React to monitor and visualize sensory data in real time.",
        "Played a pivotal role in integrating adaptive features to enhance user experience and therapeutic outcomes.",
      ],
    },
    {
      title: "Intern",
      company_name: "T-Works",
      icon: tworks,
      iconBg: "#383E56",
      date: "April 2024 - Sept 2024",
      points: [
        "Programmed interactive 3D models using React Three Fiber to enhance user engagement and provide dynamic visual experiences.",
        "Developed a custom AI-powered chatbot to streamline client interactions, resulting in a 25% reduction in turnover time",
        "Collaborated with cross-functional teams to contribute to the development of 15+ features and services in a user-friendly client portal, enhancing functionality and improving the overall user experience. ",
        
      ],
    },
    {
      title: "Assosiate Software Developer",
      company_name: "T-Works",
      icon: tworks,
      iconBg: "#E6DEDD",
      date: "Oct 2024 - Present",
      points: [
        "Initiated and led the development of a custom ERP solution tailored to specific business case scenarios, enhancing operational efficiency.",
        "Designed and implemented the solution using the T3 stack, integrating it seamlessly with the existing SaaS platforms.",
        "Oversaw the customization and scaling of the ERP system, ensuring it was adaptable to various business requirements and streamlining overall operations",
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
      name: "Eco Fertilization",
      description:
        "Engineered a CNN-based model for potato leaf disease classification, preprocessing a labeled dataset to address imbalance and enhance performance. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Supabase",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "",
    },
    {
      name: "AI Driven Tool For Meeting Management  For  Productivity And Engagement  Using LLM   2",
      description:
        "Designed and deployed a smart assistant capable of providing real-time insights and data retrieval during meetings. Received an Accuracy of over 98% in Information Retrieval and query resolving capabilities.  ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Project 3",
      description:
        "Lorem Ipsum",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };