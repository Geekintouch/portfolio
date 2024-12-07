"use client";

import React, { useState, useRef, useEffect } from "react";
import AppSection from "../AppSection";
import { PROJECTS } from "@/constants/menu";
import AppButton from "../AppButton";
import AppText from "../AppText";
import GithubLogo from "@images/icons/github-logo.svg";
import GlobeIcon from "@images/icons/globe-icon.svg";
import PlayIcon from '@images/icons/play-icon.svg';
import Image from "next/image";

const TAGS = {
  FULLSTACK : "FullStack",
  // FRONTEND: "Frontend",
  // BACKEND: "Backend",
  DATAENGINEER: "Data Engineering",
  AIML: "Data Science"
  
};

const PER_PAGE_PROJECTS = 2;

const randomColors = [
  "text-blue-600",
  "text-green-600",
  "text-yellow-600",
  "text-red-600",
  "text-pink-600",
  "text-purple-600",
  "text-indigo-600",
  "text-teal-600",
  "text-orange-600",
  "text-lime-600",
  "text-cyan-600",
  "text-emerald-600",
  "text-amber-600",
  "text-fuchsia-600",
  "text-true-gray-600",
];

const mainProjects = [
  {
    id: "corp_fin",
    name: "Dynamic Real-Time Stock Prediction Platform",
    description: `This project is to develop a stock price prediction tool that forecasts future prices using historical market data,
     supported by a robust data engineering framework. It features ETL data pipelines for efficient data ingestion from yfinance and 
     incorporates real-time data streaming with Apache Kafka, seamlessly integrated with Python. The infrastructure enables next-minute 
     trading price predictions using efficient strategies like Long Short-Term Memory (LSTM) neural networks.Data is stored and managed 
     using PostgreSQL, while AWS services provide scalable cloud storage and computing resources. The tool focuses on capturing temporal 
     dependencies in time-series data to achieve high precision in predictions. By providing data-driven support, it helps investors and 
     financial analysts anticipate short-term market trends, refine trading strategies, and make informed investment decisions. Working on
     the enhancements to include integrating additional financial metrics like trading volume and technical indicators (RSI, MACD), deploying 
     the tool as a web-based application with real-time predictions and user-friendly visualizations, and expanding its accessibility to a 
     broader audience within financial markets.`,
    techStack: ["Python", "yfinance", "postgreSQL", "Docker", "Git Actions", "Aws", "ETL", "kafka", "lstm", "Pandas", "Scikit-Learn", "NumPy", "TensorFlow", "Keras", "Matplotlib",],
    imgURL: "/images/stockprice.png",
    githubLink: `https://github.com/Geekintouch`,
    tags: [TAGS.DATAENGINEER],
  },
  {
    id: "mask-fever-detection-system",
    name: "IoT and ML-Driven real time COVID-19 Safety Monitoring System",
    description: `Developed COVID safety tool using Raspberry Pi and Machine Learning to detect mask usage and fever symptoms in real time, 
    minimizing human contact during viral outbreaks. This system features RBAC control, a user-friendly interface, and achieved 99.4% accuracy
    , providing real-time health insights, alerts, and access restrictions. I have Successfully deployed in my school campus to enhance safety 
    during critical times. The primary purpose of this tool is to improve safety in public and corporate spaces by automating health monitoring.
    It enables rapid detection of potential risks, proactive emergency alerts, and restricted access for symptomatic individuals, reducing the
    spread of infectious diseases. For Future enhancements, I am working on to include advanced health metrics like heart rate and oxygen levels, integrating 
    cloud-based analytics for centralized monitoring, deploying AI-driven models for better adaptability, and creating a mobile app for 
    real-time alerts and data access on-demand.`,
    techStack: ["Python", "Raspberry Pi", "Machine Learning", "Computer Vision", "TensorFlow", "scikit-learn", "React.js", "Spring Boot", "REST API", "PostgreSQL", "OAuth", "AWS IoT", "WebSockets", "JavaScript"],
    imgURL: "/images/rasp.png",
    githubLink: `https://github.com/Geekintouch`,
    // webLink: `https://codelabs-preview.appspot.com/?file_id=1tawz6aVeswcHqI2OKAxYyYzYdJ5Nxs-1t2lzuXzI5OU#0`,
    tags: [TAGS.FULLSTACK],
  },
  {
    id: "spring-boot-student-app",
    name: "Research Access Spring Application",
    description: `Developed Student Management Web Application within a research-driven environment to revamp student record administration
    and provide secure platform to students for exclusive access of research content, ensuring sensitive information remains private to the 
    institution. For the  frontend I crafted it with React.js, HTML5, & Tailwind CSS, delivering a modern & responsive interface that enhances 
    user engagement across devices. Students can seamlessly access research materials exclusive to the school upon logging in, benefiting from 
    an intuitive design tailored for admins, faculty, and students. The backend, powered by Spring Boot and Spring MVC, offers a modular and 
    scalable foundation. Security is reinforced through Spring Security's role-based access control, safeguarding data integrity and ensuring 
    only authorized users can access specific content. Data persistence is efficiently managed via PostgreSQL, seamlessly integrated with 
    Spring Data JPA and Hibernate. Employing a microservices architecture, containerization with Docker, and orchestration using Kubernetes, 
    the application ensures seamless scalability and efficient deployment. This sophisticated infrastructure guarantees high availability and 
    effective management across diverse environments.`,
    techStack: ["Java", "Spring", "React", "Tailwindcss", "Postgres", "Docker", "Kubernetes"],
    imgURL: "/images/res.jpeg",
    githubLink: `https://github.com/Geekintouch`,
    // webLink: `https://codelabs-preview.appspot.com/?file_id=12dn3Hs3BN9EUdLaln8LcXcGW6GwyTEJBKvV6ACbZrAk#0`,
    tags: [TAGS.FULLSTACK],
  },
  
  {
    id: "ams",
    name: "Attendance Marking Systems",
    description: `This project is Spring based scalable and secure Attendance Marking System (AMS), a web application designed to streamline
    attendance tracking and session management for educational and enterprise use. The system provided key functionalities such as session
    management, user enrollment, and role-based access control, prioritizing data security and user experience. Designed with scalability in 
    mind, the application catered to multi-role users and ensured efficient operational workflows. On the frontend, I crafted an intuitive UI 
    using JavaScript, focusing on user-centric design principles to improve usability and efficiency. For the backend, I utilized Spring MVC 
    to structure the application and implemented Spring Security to enforce advanced authentication and authorization protocols, to improve 
    data security. This application leveraged MySQL database, connected through Java connectors, to handle storage and retrieval of attendance
    data with optimal performance. The system was deployed on an Apache Tomcat server and further hosted on the AWS cloud, ensuring a stable, scalable, and globally accessible production environment.`,
    techStack: ["React", "Java", "SQL", "Tomcat", "Spring", "Maven", "AWS"],
    imgURL: "/images/prepbuddy.png",
    githubLink: `https://github.com/Geekintouch`,
    // webLink: `https://startling-cranachan-1e8cbc.netlify.app/`,
    tags: [TAGS.FULLSTACK],
  },
  {
    id: "twitter-sentimental-analysis",
    name: "Customer Centric Sentimental Analysis",
    description: `In today's data-driven world, public sentiment on social media can sway brand reputation, market trends, & policy-making. 
    This project is an event-prediction & data analysis tool that leverages Twitter’s global user-generated content to analyze real-time sentiment & predict
    actionable insights into trending topics, emotional reactions, and emerging themes in real time with customizable plug-in data filter 
    report visuals using powerBI`,
    techStack: ["Natural Langugae Processing", "powerBI", "Bag of Words", "scikit-learn", "TextBlob", "Matplotlib", "Tweepy", "Pandas", "Flask", "Jupyter Notebook"],
    imgURL: "/images/sentiment.png",
    githubLink: `https://github.com/Geekintouch`,
    // webLink: `https://codelabs-preview.appspot.com/?file_id=1DyfWnAj3sUVshCtt96xWAaFhrE6ifEfT13ZruDm3dMc#0`,
    // demoLink: `https://codelabs-preview.appspot.com/?file_id=1DyfWnAj3sUVshCtt96xWAaFhrE6ifEfT13ZruDm3dMc#0`,
    tags: [TAGS.AIML],
  },
  // {
  //   id: "chef-it-out",
  //   name: "Chef It Out",
  //   description: `I conceptualized and developed a dynamic platform facilitating seamless connections between chefs, hotels, and consumers with just a few clicks. The platform also offers a subscription feature, allowing customers to conveniently schedule dishes. Additionally, I integrated Paytm's payment gateway to support both subscription-based payments and direct payments during checkout. This project showcases my ability to create innovative solutions that bridge culinary talents with eager audiences while ensuring efficient and secure transactions.`,
  //   techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
  //   imgURL: "/images/chef-it-out.png",
  //   githubLink: `https://github.com/shivasaicharanruthala/comfort-clothing`,
  //   tags: [TAGS.BACKEND],
  // },
  // {
  //   id: "crwn-clothing",
  //   name: "Crwn Clothing",
  //   description: `Built an E-Commerce application as an educational project to grasp the fundamentals of React.js, employing the Context API for efficient state management. This project allowed me to delve into component isolation and data flow design, providing valuable insights into building robust web applications with a focus on user interfaces and seamless data management..`,
  //   techStack: ["React", "Node.js", "MongoDB", "Express", "Context API"],
  //   imgURL: "/images/crown-clothing.png",
  //   githubLink: `https://github.com/shivasaicharanruthala/comfort-clothing`,
  //   tags: [TAGS.BACKEND],
  // },
  // {
  //   id: "ice-breaker",
  //   name: "IceBreaker",
  //   description: `I designed and developed a robust crowdfunding website, streamlining campaign creation and management for users. By seamlessly integrating payment processing, I ensured secure contributions via various methods, including credit cards and PayPal. To enhance application reliability, I implemented Celery for email notifications and file uploads, enabling automated retries on failures. This project demonstrates my expertise in creating efficient and secure platforms that facilitate fundraising and user engagement.`,
  //   techStack: ["Python", "Django", "ORM", "Celery", "SQL", "Bootstrap"],
  //   imgURL: "/images/padhai.jpeg",
  //   githubLink: ``,
  //   tags: [TAGS.FRONTEND],
  // },
];

function ProjectsSection() {
  const [selectedProjects, setSelectedProjects] = useState(mainProjects);
  const [displayedProjects, setDisplayedProjects] = useState(PER_PAGE_PROJECTS);

  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const projectObserverRefs = useRef<{ [key: string]: IntersectionObserver }>(
    {}
  );

  useEffect(() => {
    selectedProjects.forEach((project) => {
      const projectRef = projectRefs.current[project.id];

      if (!projectRef) return;

      const obsCallBack = function (entries: IntersectionObserverEntry[]) {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          projectRef.classList.remove("opacity-100");
          projectRef.classList.remove("translate-y-0");
          projectRef.classList.add("opacity-0");
          projectRef.classList.add("translate-y-[5%]");
        } else {
          projectRef.classList.remove("opacity-0");
          projectRef.classList.remove("translate-y-[5%]");
          projectRef.classList.add("opacity-100");
          projectRef.classList.add("translate-y-0");
        }
      };

      const obsOptions = {
        root: null,
        threshold: 0,
      };

      const projectObserver = new IntersectionObserver(obsCallBack, obsOptions);
      projectObserver.observe(projectRef);
      projectObserverRefs.current[project.id] = projectObserver;
    });

    return () => {
      selectedProjects.forEach((project) => {
        projectObserverRefs.current[project.id]?.disconnect();
      });
    };
  }, [selectedProjects, displayedProjects]);

  const onSelectTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "All") {
      setSelectedProjects(mainProjects);
      setDisplayedProjects(displayedProjects);
    } else {
      const filteredProjects = mainProjects.filter((project) =>
        project.tags.includes(value)
      );
      setSelectedProjects(filteredProjects);
      setDisplayedProjects(displayedProjects);
    }
  };

  const handleOnClickBtn = () => {
    if (displayedProjects < selectedProjects.length) {
      setDisplayedProjects((prevState) => prevState + PER_PAGE_PROJECTS);
    } else {
      setDisplayedProjects((prevState) => prevState - PER_PAGE_PROJECTS);
    }
  };

  return (
    <AppSection headerTxt={PROJECTS}>
      <div className="section-content-padding w-full relative flex flex-col items-center justify-start md:gap-8 gap-6">
        <select
          onChange={onSelectTag}
          className="self-end bg-transparent border-2 rounded-md border-borderColor p-2 cursor-pointer text-textColor-primary-day dark:text-textColor-primary-night"
        >
          {["All", ...Object.values(TAGS)].map((tag) => {
            return (
              <option
                className="bg-backgroundColor-day dark:bg-backgroundColor-night"
                key={tag}
                value={tag}
              >
                {tag}
              </option>
            );
          })}
        </select>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedProjects.slice(0, displayedProjects).map((project) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="md:p-6 p-4 bg-backgroundColor-card-day dark:bg-backgroundColor-card-night w-full rounded-md opacity-0 translate-y-[5%] transition-all duration-500 ease-linear"
            >
              <div className="w-full h-[200px] sm:h-[240px] rounded-md relative mb-4 overflow-hidden">
                <Image alt={project.name} src={project.imgURL} fill />
              </div>
              <div className="flex flex-col gap-3 justify-start">
                <div className="flex gap-2 justify-between align-center">
                <AppText textTag="h3" extraMedium bold defaultColor>
                  {project.name}
                </AppText>
                  <div className="flex gap-2 align-center justify-end">
                  <a href={project.githubLink} target="_blank">
                    <GithubLogo className="h-9 w-9" />
                  </a>
                  {/* {project.webLink && <a href={project.webLink} target="_blank">
                    <GlobeIcon className="h-9 w-9" />
                  </a>} */}
                  {/* {project.demoLink && <a href={project.demoLink} target="_blank"><PlayIcon className="h-9 w-9"/></a>} */}
                </div>
                  </div>
                <AppText textTag="p" default secondary>
                  {project.description}
                </AppText>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((stack, index) => {
                    return (
                      <p
                        key={stack}
                        className={`text-sm ${index < randomColors.length ? randomColors[index] : randomColors[Math.floor(Math.random() * (13))]}`}
                      >{`#${stack}`}</p>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProjects.length > PER_PAGE_PROJECTS && (
          <AppButton
            buttonType="secondary"
            buttonText={`${
              displayedProjects < selectedProjects.length
                ? "Show More"
                : "Show Less"
            } `}
            ariaLabel={`click to ${
              displayedProjects < selectedProjects.length
                ? "Show More"
                : "Show Less"
            } projects`}
            onClick={handleOnClickBtn}
          />
        )}
      </div>
    </AppSection>
  );
}

export default ProjectsSection;
