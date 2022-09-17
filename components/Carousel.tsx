import React, { useEffect, useContext, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import CarouselItems from "./Carousel-items";
import { sizeContext } from "../utils/size-observer";
let EmblaCarousel: React.FC = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  let ctx = useContext(sizeContext);
  let refs = useRef(projects.map((project) => [React.createRef()]));

  useEffect(() => {
    let { innerWidth } = ctx;
    refs.current[0].current.style.height = innerWidth;

    refs.current.map((item) => {
      item.current.style.width = `${innerWidth}px`;
      item.current.style.height = `${innerWidth}px`;
    });

    if (emblaApi) {
      //Embla Api is ready
      console.log(emblaApi);
    }
  }, [emblaApi]);
  return (
    <div className="overflow-hidden w-full h-screen flex" ref={emblaRef}>
      <div className="embla__container flex  h-3/4 w-3/4 my-auto   ">
        {" "}
        {projects.map((project, i) => {
          return (
            <div
              ref={refs.current[i]}
              key={project.index}
              className="embla__slide min-h-full  bg-white flex-col  justify-center"
            >
              <div>
                <h2>{project.title}</h2>
              </div>
              <div>{project.description}</div>
              <div className="absolute w-full h-full">
                <Image layout="fill" src={project.img}></Image>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmblaCarousel;
