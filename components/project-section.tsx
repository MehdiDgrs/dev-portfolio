import { useRef, useState } from "react";
import React from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";
import ProjectItem from "./project-item";
const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const ProjectSection = ({ projectArray }) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  const scroll = React.useContext(ScrollContext);
  let { scrollY } = scroll;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-[#1C3864] text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 py-24 lg:px-20 md-py28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl  tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={`${s.skillText} opacity-10`}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            <ProjectItem project={projectArray[0]} />{" "}
          </div>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            <ProjectItem project={projectArray[1]} />{" "}
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            <ProjectItem project={projectArray[2]} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
