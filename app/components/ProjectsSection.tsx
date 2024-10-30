"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Created the website you're currently at",
    image: "/images/shadow L.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ButterM-40/personal-website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "East Coast",
    description: "wrote short story of two kids who are in a sucky town",
    image: "/images/Projects/brah.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ButterM-40/Dungeon-Game-3D",
    previewUrl: "https://www.youtube.com/watch?v=W_adTM71V2w&ab_channel=RamiroSantos",
  },
  {
    id: 3,
    title: "get out",
    description: "Liminal space horror storyboard I made",
    image: "/images/Projects/liminal.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ButterM-40/Project-M347",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Hackathon",
    description: "Business dating app type website for small business to be advertised more",
    image: "/images/Projects/rizz.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ButterM-40/Langchain-Audio-Conversation",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Halloween",
    description: "Happy Halloween",
    image: "/images/Projects/halloween.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ButterM-40/BlitzWaveStudioGameJam70",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;