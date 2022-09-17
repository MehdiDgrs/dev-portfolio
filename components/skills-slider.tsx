import React, { useRef, useContext, useCallback, useEffect } from "react";
import { sizeContext } from "../utils/size-observer";
import useAnimationFrame from "./use-animation-frame";

interface Props {
  offsetX: number;
  className: string;
  contentWidth: number;
  children: React.ReactNode;
}

let SkillSliderContainer: React.FC<Props> = ({
  children,
  offsetX,
  className,
  contentWidth,
}) => {
  let { innerWidth } = useContext(sizeContext);
  const refScrollX = useRef<number>(offsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = true;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;

      if (elContainer && elContent) {
        innerWidth < 1100
          ? (refScrollX.current += 1.5)
          : (refScrollX.current += 0.7);

        elContainer.scrollLeft = refScrollX.current;
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [])
  );

  return (
    <section className="bg-white min-h-screen flex flex-col justify-center gap-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-28 text-3xl lg:text-4xl ">Technologies utilisées.</h1>
        <div
          ref={refContainer}
          id="container"
          className={`slider-container  overflow-x-hidden whitespace-nowrap  w-full bg-white max-w-full pointer-events-none  ${className}`}
        >
          <div ref={refContent} className="inline-block  ">
            {children}
          </div>
          <div className={enabled ? "inline-block" : "hidden"}>{children}</div>
        </div>
      </div>
    </section>
  );
};
interface ItemProps {
  width: number;
  children: React.ReactNode;
}

export const SliderItem: React.FC<ItemProps> = ({ children, width }) => {
  return (
    <div
      className=" justify-center items-center mx-4 inline-block my-6  "
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default SkillSliderContainer;
