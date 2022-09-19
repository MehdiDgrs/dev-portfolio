import React from "react";
import EmblaCarousel from "./Carousel";
import extensionProjectPic from "../public/assets/screenshot1280x800.png";
import ProjectSection from "./project-section";

let Projects: React.FC = () => {
  let projects = [
    {
      index: 1,
      title: "Color picker extension from Chrome",
      description:
        "Created with the Vite.js tool to allow fast refresh during the developpement of an extension,used the CRXJS plugin to inject React code into the DOM ",
      img: extensionProjectPic,
      url: "https://github.com/MehdiDgrs/vite-react-chrome-extension/blob/main/src/components/modals.jsx",
    },
    {
      index: 2,
      title: "Photography Galerie with CMS integration",
      description:
        "Used Next.JS, the strapi CMS as a backend, Apollo/GraphQL for  querys between backend and frontend, to develop my own photography portfolio  ",
      img: extensionProjectPic,
      url: "https://photography-portfolio-git-main-mehdidgrs.vercel.app/",
    },
    {
      index: 3,
      title: "Tenzy Game",
      description: "Used React to make a small Tenzy Game",
      img: extensionProjectPic,
      url: "https://mehdidgrs.github.io/Tenzy/",
    },
  ];
  return (
    <section id="projects" className="min-h-screen max-h-full   ">
      <div className="h-screen  justify-center grid place-content-center  ">
        <h1 className="inline   lg:text-4xl  mx-auto text-4xl md:text-6xl  text-white tracking-tight font-semibold ">
          Projects
        </h1>
      </div>
      <ProjectSection projectArray={projects} />
    </section>
  );
};
export default Projects;
