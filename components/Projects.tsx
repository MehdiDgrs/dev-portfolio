import React from "react";
import EmblaCarousel from "./Carousel";
import extensionProjectPic from "../public/assets/screenshot1280x800.png";
let Projects: React.FC = () => {
  let projects = [
    {
      index: 1,
      title: "Color picker extension from Chrome",
      description:
        "Created with the Vite.js tool to allow fast refresh during the developpement of an extension,used the CRXJS plugin to inject React code into the DOM ",
      img: extensionProjectPic,
      link: "",
    },
    {
      index: 2,
      title: "Photography Galerie with CMS integration",
      description:
        "Used Next.JS, the strapi CMS as a backend, Apollo/GraphQL for  querys between backend and frontend, to develop my own photography portfolio  ",
      img: extensionProjectPic,
      link: "",
    },
    {
      index: 3,
      title: "Tenzy Game",
      description: "Used React to make a small Tenzy Game",
      img: extensionProjectPic,
      link: "",
    },
  ];
  return (
    <section id="projects" className="h-screen   ">
      <EmblaCarousel projects={projects}></EmblaCarousel>
    </section>
  );
};
export default Projects;
