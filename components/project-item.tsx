import React, { useState, useRef, useEffect, useCallback } from "react";

let ProjectItem: React.FC = ({ project }) => {
  let [toggle, setToggle] = React.useState(false);

  let highlightRef = useCallback((node) => {
    if (node !== null) {
      setToggle(true);
    }
  }, []);

  // useEffect(
  //   () =>
  //     highlightRef.current.parentElement.style.opacity == 1
  //       ? setToggle(true)
  //       : setToggle(false),
  //   [highlightRef.current.parentElement.style]
  // );

  return (
    <div ref={highlightRef} className="cursor-pointer">
      <h2>{project.title}</h2>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } flex-col leading-none line mb-10`}
      >
        <span className="text-xl flex my-5 ">{project.description}</span>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="  mx-auto text-base block text-pink-500  uppercase "
        >
          visit
        </a>
      </div>
    </div>
  );
};
export default ProjectItem;
