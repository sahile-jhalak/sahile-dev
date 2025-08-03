import {
  mobile,
  backend,
  creator,
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
  carrent,
  next,
  CV_Duncan,
  portfolio,
  prescripto,
  CarShowcase,
  shop,
  resumind
} from "../assets";
export const CVDuncan = CV_Duncan;

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "work",
    title: "Project",
  },

  {
    id: "contact",
    title: "Contact",
  },
  
];

export const services = [
  {
    title: "Web Developer ",
    icon: mobile,
  },
  {
    title: "Open Source",
    icon: backend,
  },
  {
    title: "DSA",
    icon: creator,
  },
];

export const technologies = [
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
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Nexr",
    icon: next,
  },
];


export const projects = [
  {
     name: "Resumind",
    description:
      "A modern, responsive resume platform where users can securely store resumes, get AI-powered ATS matching with tailored feedback, and enjoy a sleek, reusable UI built with Tailwind CSS and shadcn/ui—fully optimized for all devices.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",

        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: resumind,
    source_code_link: "https://github.com/sahile-jhalak/Resumind",
    visit_here_link:"https://ai-resumind.vercel.app/", 
  },
  {
    name: "Admin Dashboard",
    description:
      "An admin dashboard allows at-a-glance access to the crucial information for the specific needs,This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",

        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sahile-jhalak/dashboard",
    visit_here_link:"https://dashboardcom.netlify.app",
  },
  {
    name: "PortFolio",
    description:
      "A personal portfolio website effectively showcases your professional identity,highlighting skills and expertise through a concise ,It features a structured display of projects and case studies,",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/sahile-jhalak/protfolio",
    visit_here_link:"https://sahile-portfolio.vercel.app/",
  },
  {
    name: "3D Shop",
    description:
      "In this project you Generate unique 3D shirts/swag items dynamically,apply any color to the 3D shirt/swag for personalized styling,enable users to upload any file as a logo,",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/sahile-jhalak/3d_shop/tree/main/client",
    visit_here_link:"https://66c62c66cde1b850d60e0827--strong-haupia-461d9f.netlify.app/",
  },
  {
    name: "Prescripto",
    description:
      "This is frotend application,i create an online appointment booking website for doctor or hospital. In this hospital website we will add multiple doctors and user can filter the doctor with their specialty.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: prescripto,
    source_code_link: "https://github.com/sahile-jhalak/prescripto",
    visit_here_link:"https://prescripto-com.netlify.app",
  },
  {
    name: "Car Showcase",
    description:
      "the Car Showcase website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: CarShowcase,
    source_code_link: "https://github.com/sahile-jhalak/car_showcase",
    visit_here_link:"https://car-showcase-lzxwmd7hn-sahile-jhalaks-projects.vercel.app",
  },
];


